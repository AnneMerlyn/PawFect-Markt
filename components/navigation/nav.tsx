import { auth } from '@/server/auth';
import { UserButton } from './user-button';

export default async function Nav() {
    const session = await auth();

    return (
        <header className="bg-slate-500 py-4">
            <nav>
                <ul className="flex justify-between">
                    <li>Logo</li>
                    <li>
                        <UserButton session={session} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
