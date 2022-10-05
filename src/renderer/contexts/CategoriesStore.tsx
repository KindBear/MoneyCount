import { makeAutoObservable } from "mobx";

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
}

export default new CategoriesStore();
