import api from "./apiInstance";

export function getCategories() {
  return api("get/categories");
}

export function createCategories(name: string) {
  return api("post/categories", name);
}
