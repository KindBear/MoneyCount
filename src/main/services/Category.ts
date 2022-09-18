import Category from "../../shared/types/Category";

class CategoryService {
  categories: Category[] = [];

  createCategory(name: string): Category {
    const newCategory: Category = {
      id: `${this.categories.length}_${name}`,
      name,
      subcategories: []
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  deleteCategory(id: string): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}

export default CategoryService;
