import api from "./apiInstance";
import { Category, CategoryCreateData, CategoryDeleteData, CategoryUpdateData } from "../../shared/types/Category";

enum CategoriesChannel {
  GET = "categories/get",
  CREATE = "categories/create",
  UPDATE = "categories/update",
  DELETE = "categories/delete",
}

export function getCategories(): Promise<Category[]> {
  return api<undefined, Category[]>(CategoriesChannel.GET);
}

export function createCategory(name: string): Promise<Category> {
  return api<CategoryCreateData, Category>(CategoriesChannel.CREATE, { name });
}

export function updateCategory(id: string, name: string): Promise<Category> {
  return api<CategoryUpdateData, Category>(CategoriesChannel.UPDATE, { id, name });
}

export function deleteCategory(id: string): Promise<void> {
  return api<CategoryDeleteData, void>(CategoriesChannel.DELETE, { id });
}
