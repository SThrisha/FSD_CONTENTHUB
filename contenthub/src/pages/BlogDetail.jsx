import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  // Later we’ll fetch by `id`, for now static data
  const blog = {
    title: "First Blog Post",
    content:
      "This is a detailed blog content. In future, it will come from database.",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title} (ID: {id})</h1>
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
}
