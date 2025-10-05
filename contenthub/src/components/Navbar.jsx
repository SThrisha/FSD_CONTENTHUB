import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <h2>ContentHub</h2>
      <div>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
}
