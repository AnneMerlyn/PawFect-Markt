'use client';

import { AuthCard } from './auth-card';

export const LoginForm = () => {
    return (
        <AuthCard
            cardTitle="Welcome!"
            backButtonHref="/auth/register"
            backButtonLabel="Create New Account"
            showSocials
        >
            <div>
                <h1>Hey</h1>
            </div>
        </AuthCard>
    );
};
