import Link from 'next/link';

export default function About() {
    return (
        <div className="bg-teal-500">
            <h1>About</h1>
            <p>This is about page</p>
            <p>
                <Link href="/about/me">About Me</Link>
            </p>
            <p>
                <Link href="/">Go back to Home</Link>
            </p>
        </div>
    );
}
