import { useState ,useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    getCategory();
  }, []);

  async function getCategory() {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    setCategories(data);
  }

  return (
      <div>
        {categories.map((categories) => {
          return <div key={categories.id + categories.name}>{categories.name}</div>
        })}
      </div>
    );
}
