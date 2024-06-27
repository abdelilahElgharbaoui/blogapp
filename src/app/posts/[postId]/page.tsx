
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import PostList from "./post-list";
import Upvotebtn from "@/components/upvote-btn";

export default async function Post({params}:{
    params:any
}) {
 
console.log(params.postId);

 
  return (
    <main className="text-center pt-16 px-5">
      <Suspense fallback="Loading...">
        <PostList params={params.postId} />
      </Suspense>
      <Upvotebtn />
    </main>
  );
}
