import React, { useState } from "react";
import Navbar from "./Component/Navbar"; // Adjust the import path as necessary
import NewsBoard from "./Component/NewsBoard"; // Adjust the import path as necessary

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
