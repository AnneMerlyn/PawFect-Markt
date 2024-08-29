'use client';

import { BackButtonType } from '@/types/auth-schema';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const BackButton = ({ href, label }: BackButtonType) => {
    return (
        <Button className="font-medium w-full">
            <Link aria-label={label} href={href}>
                {label}
            </Link>
        </Button>
    );
};
