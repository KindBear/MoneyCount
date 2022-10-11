import { makeAutoObservable, runInAction } from "mobx";
import { createCategory, deleteCategory } from "../api/categories";
import { getCategories } from "../api/categories";
import { Category } from "../../shared/types/Category";

class CategoriesStore {
  public categories: Category[] = [];
  public isCreateModalOpened: boolean = false;
  public deleteCategoriesId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public openCreateModal = () => {
    this.isCreateModalOpened = true;
  };

  public closeCreateModal = () => {
    this.isCreateModalOpened = false;
  };

  public openDeleteModal = (id: string) => {
    this.deleteCategoriesId = id;
  };

  public closeDeleteModal = () => {
    this.deleteCategoriesId = null;
  };

  public category(id: string): Category {
    if (id) {
      return this.categories.find((item) => item.id === id);
    } else {
      return {} as Category;
    }
  }

  public async getCategories() {
    const categories = await getCategories();

    runInAction(() => {
      this.categories = categories;
    });
  }

  public async createCategory(name: string) {
    createCategory(name);
    this.getCategories();
  }

  public async deleteCategory(id: string) {
    await deleteCategory(id);

    this.getCategories();
  }
}

export default new CategoriesStore();
