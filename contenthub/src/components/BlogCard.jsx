import { useState } from "react";

export default function BlogCard({ blog }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>{blog.title}</h2>
      <p>{blog.preview}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "♡ Like"}
      </button>
    </div>
  );
}
