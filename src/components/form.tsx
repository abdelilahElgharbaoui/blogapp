"use client";

import React, {useState, useEffect} from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import { createPost } from "@/actions/actions";

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

      <FroalaEditor
        tag="textarea"
        config={{
          placeholderText: "Title",
          theme: "Gray",
          classes: " bg-black",
          heightMin: 300,
          width: 1000,
          background: "black",
        }}
      />

      <button className="h-10 bg-blue-500 px-5 rounded text-white mb-10">
        Submit
      </button>
    </form>
  );
}
