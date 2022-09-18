import { controller } from "../decorators/controller";
import { channel } from "../decorators/channel";

@controller("categories/")
export class Categories {

  @channel("get")
  getCategories(): string[] {
    return ["Category 1", "Category 2", "Category 3"];
  }

  @channel("create")
  createCategories(): string[] {
    return ["Category 1", "Category 2", "Category 3"];
  }

  @channel("delete")
  deleteCategories(): string[] {
    return ["Category 1", "Category 2", "Category 3"];
  }

  @channel("update")
  updateCategories(): string[] {
    return ["Category 1", "Category 2", "Category 3"];
  }
}
