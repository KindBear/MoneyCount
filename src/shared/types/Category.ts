interface Category {
  id: string;
  name: String;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
}

export default Category;
