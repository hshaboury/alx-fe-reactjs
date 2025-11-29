import React from "react";
import Search from "./components/Search";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        GitHub User Search
      </h1>

      <Search />
    </div>
  );
}
