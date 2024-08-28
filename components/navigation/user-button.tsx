'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface UserButtonProps {
    session: Session | null;
}

export const UserButton = ({ session }: UserButtonProps) => {
    if (!session || !session.user) {
        return <button>Sign In</button>;
    }
    return (
        <div>
            <h1>Welcome, {session.user.name || session.user.email}</h1>
            {/* Add sign out functionality here */}
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
};
