
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button';
import { Github, Chrome} from "lucide-react";

export default function SocialLogin() {
    const { t } = useTranslation();
    return (
        <div>
            {/* Divider */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-background text-muted-foreground">
                        {t('auth.or')}
                    </span>
                </div>
            </div>

            {/* Social Register */}
            <div className="grid grid-cols-2 gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => {}}
                    className="h-12 gap-2"
                >
                    <Chrome className="w-5 h-5" />
                    {t('auth.google')}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => {}}
                    className="h-12 gap-2"
                >
                    <Github className="w-5 h-5" />
                    {t('auth.github')}
                </Button>
            </div>
        </div>
    )
}
