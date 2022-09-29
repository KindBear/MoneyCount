import { IpcMainInvokeEvent } from "electron";
import { controller } from "../core/controller";
import { channel } from "../core/channel";
import { CategoryService } from "../services/CategoryService";
import { Category, CategoryCreateData, CategoryDeleteData, CategoryUpdateData } from "../../shared/types/Category";

@controller("categories/")
export class CategoryController {

  constructor(
    private categoryService: CategoryService,
  ) {
  }

  @channel("get")
  public getCategories(): Category[] {
    return this.categoryService.categories;
  }

  @channel("create")
  public createCategory(event: IpcMainInvokeEvent, { name }: CategoryCreateData): Category {
    return this.categoryService.createCategory(name);
  }

  @channel("delete")
  public deleteCategories(event: IpcMainInvokeEvent, { id }: CategoryDeleteData): void {
    this.categoryService.deleteCategory(id);
  }

  @channel("update")
  public updateCategories(event: IpcMainInvokeEvent, { id, name }: CategoryUpdateData): Category {
    return this.categoryService.updateCategory(id, name);
  }
}
