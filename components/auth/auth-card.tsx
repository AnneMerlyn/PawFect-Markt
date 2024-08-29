import { CardWrapperProps } from '@/types/auth-schema';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Socials from './socials';
import { BackButton } from './back-button';

export const AuthCard = ({
    children,
    cardTitle,
    backButtonHref,
    backButtonLabel,
    showSocials,
}: CardWrapperProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardContent>{children}</CardContent>
                {showSocials && (
                    <CardFooter>
                        <Socials />
                    </CardFooter>
                )}
                <CardFooter>
                    <BackButton href={backButtonHref} label={backButtonLabel} />
                </CardFooter>
            </CardHeader>
        </Card>
    );
};
