import { makeAutoObservable } from "mobx";
import { createCategory } from "../api/categories";

class CategoriesStore {
  public isCreateModalOpened: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public openCreateModal = () => {
    this.isCreateModalOpened = true;
  };

  public closeCreateModal = () => {
    this.isCreateModalOpened = false;
  };

  public async createCategory(name: string) {
    createCategory(name);
  }
}

export default new CategoriesStore();
