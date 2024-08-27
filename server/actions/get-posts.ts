'use server';

import { db } from '@/server/db';
import { error } from 'console';

export default async function getPosts() {
    const posts = await db.query.postsTable.findMany();

    if (!posts) {
        return { error: 'Nothing to return' };
    }
    return { success: posts };
}
