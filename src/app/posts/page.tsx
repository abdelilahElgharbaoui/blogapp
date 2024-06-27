import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import PostsList from "./posts-lists";
import Form from "@/components/form";

export default async function Posts() {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All posts</h1>
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
     
    </main>
  );
}
