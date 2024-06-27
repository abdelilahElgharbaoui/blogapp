"use server"

import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData:FormData) {
    const {isAuthenticated} = getKindeServerSession();
    if(!(isAuthenticated())){
        redirect('/api/auth/login');
    }

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    
    await db.post.create({
        data:{
            title,
            body
        }
    })

    revalidatePath("/posts")
   
}

export async function allPost(){
    const posts = await db.post.findMany();
    return posts;
}