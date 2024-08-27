'use server';

import { db } from '@/server/db';
import { error } from 'console';
import { postsTable } from '../schema';
import { revalidatePath } from 'next/cache';

export default async function createPost(formData: FormData) {
    console.log(formData);
    const title = formData.get('title')?.toString();

    if (!title) {
        return { error: 'Title is required!' };
    }
    revalidatePath('/');
    const dataInsert = await db.insert(postsTable).values({
        title: title,
    });
    // if (!postsTable) {
    //     return { error: 'Nothing to return' };
    // }
    return { success: dataInsert };
}
