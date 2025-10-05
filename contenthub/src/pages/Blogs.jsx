import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function Blogs() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

