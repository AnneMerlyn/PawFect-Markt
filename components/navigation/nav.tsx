import { auth } from '@/server/auth';
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default async function Nav() {
    const session = await auth();

    return (
        <header>
            <nav>
                <ul className="flex justify-between text-neutral-50">
                    <li>Logo</li>
                    {!session ? (
                        <li>
                            <Button asChild>
                                <Link className="flex" href="/auth/login">
                                    <LogIn size={16} />
                                    <span>LogIn</span>
                                </Link>
                            </Button>
                        </li>
                    ) : (
                        <li>
                            <UserButton session={session} />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
