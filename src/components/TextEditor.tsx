import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

export function TextEditor() {
  const [content, setContent] = useState('')
  
  return(
    <div className='h-[300px]'>
      <ReactQuill theme='snow' value={content} onChange={setContent} />
    </div>
  )
}
