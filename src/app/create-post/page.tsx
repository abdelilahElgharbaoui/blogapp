
import { createPost } from '@/actions/actions';
import Form from '@/components/form';
import EditorComponent from '@/components/tiptap';
import Tiptap from '@/components/tiptap';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import React from 'react'
export default async function Page() {
    
 
    
  return (
    <main className="text-center pt-16 ">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl ">Create post</h1>
     
     
      <EditorComponent />
      <LogoutLink className="bg-black text-zinc-50 rounded p-3 ">
        Log out
      </LogoutLink>
    </main>
  );
}
