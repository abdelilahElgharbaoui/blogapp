
"use client";

import React, { useState, useEffect } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
 import 'froala-editor/js/third_party/image_tui.min.js';
  import 'froala-editor/js/third_party/embedly.min.js';
  import 'froala-editor/js/third_party/spell_checker.min.js';
import FroalaEditor from 'react-froala-wysiwyg';
import Parser from "html-react-parser";

export default function EditorComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="editor-container pt-5 mx-auto max-w-4xl">
        {content}
        <div className="content">{Parser(content)}</div>
        <div className="editor-content-input pt-2">
          <FroalaEditor
            tag="textarea"
            model={content}
            onModelChange={setContent}
            config={{
              placeholderText: "Unveil your story...",
              codeMirror: title,
              theme: "light",
              color: "",
            }}
          />
        </div>
      </div>
    </>
  );
}

