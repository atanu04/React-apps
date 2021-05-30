import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuitem, setMenuitem] = useState(items);
  const filterItem = (category) => {
    if (category === "all") {
      setMenuitem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuitem(newItem);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our menus</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItem={filterItem} />
        <Menu items={menuitem} />
      </section>
    </main>
  );
}

export default App;
