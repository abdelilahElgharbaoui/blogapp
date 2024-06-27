import { createPost } from '@/actions/actions';
import React from 'react'

export default function Form() {
  return (
    <form
      className="flex flex-col max-w-[400px] mx-auto gap-5 space-x-2 mt-10"
      action={createPost}
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new Post"
        required
        className="border rounded px-3 h-full"
      />
      <textarea
        name="body"
        placeholder="Body content for new post"
        className="border rounded px-3 py-2 h-full"
        required
        rows={6}
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white mb-10">
        Submit
      </button>
    </form>
  );
}
