import { Category } from "../../shared/types/Category";

export class CategoryService {
  categories: Category[] = [];

  createCategory(name: string): Category {
    const newCategory: Category = {
      id: `${this.categories.length}_${name}`,
      name,
      subcategories: []
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  deleteCategory(id: string): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }

  updateCategory(id: string, name: string): Category {
    this.categories = this.categories.map(category => {
      if (category.id === id) {
        return {
          ...category,
          name
        };
      }

      return category;
    });

    return this.categories.find(category => category.id === id);
  }
}
