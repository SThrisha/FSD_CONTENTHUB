import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to ContentHub</h1>
      <p>Your place for blogs and vlogs.</p>
      <Link to="/blogs">Go to Blogs</Link>
    </div>
  );
}
