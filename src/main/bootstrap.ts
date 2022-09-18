import CategoriesController from "./controllers/Categories";
import CategoryService from "./services/Category";

export function bootstrap() {
  const categoryService = new CategoryService();
  new CategoriesController(categoryService);
}
