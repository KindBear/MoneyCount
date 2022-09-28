import { Category } from "../../shared/types/Category";
import { FileService } from "./FileService";
import { OnInit } from "../core/onInit";
import { service } from "../core/service";

@service()
export class CategoryService implements OnInit {
  public categories: Category[] = [];
  public fileName = "categories.json";

  constructor(
    private fileService: FileService,
  ) {
  }

  public async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this.categories = JSON.parse(categoriesJSON);
    }
  }

  public createCategory(name: string): Category {
    const newCategory: Category = {
      id: `${this.categories.length}_${name}`,
      name,
      subcategories: [],
    };
    this.categories.push(newCategory);
    this.saveChanges();
    return newCategory;
  }

  public deleteCategory(id: string): void {
    this.categories = this.categories.filter(category => category.id !== id);
    this.saveChanges();
  }

  public updateCategory(id: string, name: string): Category {
    this.categories = this.categories.map(category => {
      if (category.id === id) {
        return {
          ...category,
          name,
        };
      }

      return category;
    });

    this.saveChanges();
    return this.categories.find(category => category.id === id);
  }

  public saveChanges() {
    this.fileService.writeFile(this.fileName, JSON.stringify(this.categories));
  }
}
