import { useEffect, useState } from "react";
import { createCategories, getCategories } from "../api/categories";
import Category from "../../shared/types/Category";

const SettingsPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div>
      <h2>Settings are Coming Soon...</h2>
      <input value={categoryName} onChange={(event) => {
        setCategoryName(event.target.value);
      }}/>
      <button onClick={() => {
        if (categoryName) {
          createCategories(categoryName).then((category: Category) => {
            if (category.id) {
              getCategories().then((result) => {
                setCategories(result);
              });
            }
          })
          setCategoryName("");
        }
      }}>Add Category</button>
      {categories.map((elem: Category) => {
        return (
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <p>{elem.name}</p>
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  );
};

export default SettingsPage;
