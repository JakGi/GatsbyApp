import * as React from "react";
import { Link } from "gatsby";
import about from "./about";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>My Page</title>
      <Link to="/about">O nas</Link>
      <Link to="/blog">Blog</Link>
    </main>
  );
};

export default IndexPage;
