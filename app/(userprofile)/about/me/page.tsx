import Link from 'next/link';

export default function Me() {
    return (
        <div>
            <h1>Me</h1>
            <p>This is about me</p>
            <Link href="/about">Go back to About</Link>
        </div>
    );
}
