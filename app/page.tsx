import PostButton from '@/components/post-button';
import createPost from '@/server/actions/create-post';
import getPosts from '@/server/actions/get-posts';
import { postsTable } from '@/server/schema';
import Image from 'next/image';

export default async function Home() {
    const { error, success } = await getPosts();
    if (error) {
        throw new Error(error);
    }
    if (success) {
        return (
            <div>
                <h1>Welcome To Next JS</h1>
                {success.map((postsTable) => (
                    <div key={postsTable.id}>
                        <h2>{postsTable.title}</h2>
                    </div>
                ))}
                <form action={createPost}>
                    <input
                        className="bg-black"
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                    <PostButton />
                </form>
                <Image
                    src="/vercel.svg"
                    alt="vercel tag"
                    width={72}
                    height={16}
                />
            </div>
        );
    }
}
