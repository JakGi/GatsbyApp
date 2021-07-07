import * as React from "react";
import { Link } from "gatsby";
import About from "./About";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>My Page</title>
      <Link to="/src/pages/About.jsx"></Link>
    </main>
  );
};

export default IndexPage;
