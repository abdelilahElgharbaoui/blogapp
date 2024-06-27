"use client"
import React, { useState } from 'react'

export default function Upvotebtn() {
        const [upvoteCount, setupVoteCount] = useState(0);

  return (
    
<button className="bg-blue-500 text-white p-2 mt-10" onClick={()=>{
    setupVoteCount(upvoteCount+1);
}}>{upvoteCount} Upvote</button>
  )
}
