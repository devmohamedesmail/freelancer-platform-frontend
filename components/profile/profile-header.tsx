import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Edit, Save, X} from "lucide-react";

interface PropsInterface {
    isEditing: boolean,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
    handleCancel: () => void
}



export default function ProfileHeader({isEditing,setIsEditing,handleCancel}:PropsInterface) {
    const { t } = useTranslation()
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">{t('profile.my_profile')}</h1>
                <p className="text-muted-foreground">

                    {t('profile.description')}
                </p>
            </div>
            {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit className="w-4 h-4" />
                    {t('profile.edit_profile')}
                </Button>
            ) : (
                <div className="flex gap-3">
                    <Button variant="outline" onClick={handleCancel} className="gap-2">
                        <X className="w-4 h-4" />
                        {t('common.cancel')}
                    </Button>
                    <Button onClick={()=>{}} className="gap-2">
                        <Save className="w-4 h-4" />
                        {t('common.save')}
                    </Button>
                </div>
            )}
        </div>
    )
}
