import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostList({params}:{
    params:string
}) {

  const postId = parseInt(params,10);


 
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if(!post){
    notFound()
  }
  
  return (
    <>
      <h1 className="text-4xl font-semibold mb-5 md:text-5xl">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
}
