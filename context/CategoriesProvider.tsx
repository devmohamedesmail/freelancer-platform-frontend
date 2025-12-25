import axios from 'axios'
import React,{createContext,ReactNode,useEffect,useState,useContext} from 'react'

interface Category {
  id: number;
   name_ar: string;
    name_en: string;
    icon: string;
}

interface CategoriesContextType {
  categories: Category[];
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);


export default function CategoriesProvider({children} : {children: ReactNode}) {
    const [categories, setCategories] = useState<Category[]>([]);


   useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "https://freelancer-platform-backend-dkqh.onrender.com/api/categories?populate[subcategories][populate]=*",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
          }
        }
      );
      // فقط حدث الـ state بعد أن تنتهي العملية
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories();
}, []);


  return (
    <CategoriesContext.Provider value={{categories}}>
        {children}
    </CategoriesContext.Provider>
  )
}



export const useCategories = (): CategoriesContextType => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
