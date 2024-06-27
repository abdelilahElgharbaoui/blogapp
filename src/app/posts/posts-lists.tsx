import { allPost } from "@/actions/actions";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function PostsList() {
  const posts = await allPost();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id} className="mb-5">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      <li></li>
    </ul>
  );
}
