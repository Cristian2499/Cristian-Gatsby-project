import "prismjs/themes/prism.css";
import React from "react";
import Navbar from "./src/components/Navbar";

export const wrapPageElement = ({ element }) => (
  <>
    <Navbar />
    {element}
  </>
);