import React, { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search/search";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setData(data));

  useEffect(() => {
    filteredData();
  });

  useEffect(() => {
    setData(data)
    setSearch(search)
  }, [data, search])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = () =>
    data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="App">
      <SearchBox
        type="search"
        placeholder="search the monsters..."
        handleChange={handleChange}
      />
      <CardList collection={filteredData()} />
    </div>
  );
}

export default App;
