import React from "react";
import authors from "./data";
import SideBar from "./SideBar";
import AuthorList from "./AuthorList";
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <SideBar />
        <AuthorList authors={authors} />
      </div>
    </div>
  );
}

export default App;
