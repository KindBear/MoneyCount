import { controller } from "../core/controller";
import { channel } from "../core/channel";
import { CategoryService } from "../services/CategoryService";
import { Category, CategoryCreateData, CategoryDeleteData, CategoryUpdateData } from "../../shared/types/Category";

@controller("categories/")
export class CategoryController {

  constructor(
    private categoryService: CategoryService
  ) {
  }

  @channel("get")
  getCategories(): Category[] {
    return this.categoryService.categories;
  }

  @channel("create")
  createCategory(event: any, { name }: CategoryCreateData): Category {
    return this.categoryService.createCategory(name);
  }

  @channel("delete")
  deleteCategories(event: any, { id }: CategoryDeleteData): void {
    this.categoryService.deleteCategory(id);
  }

  @channel("update")
  updateCategories(event: any, { id, name }: CategoryUpdateData): Category {
    return this.categoryService.updateCategory(id, name);
  }
}
