import { Category } from "../../shared/types/Category";
import { FileService } from "./FileService";
import { OnInit } from "../core/onInit";
import { service } from "../core/service";
import { Observable } from "../core/Observable";

@service()
export class CategoryService implements OnInit {
  public categories: Observable<Category[]>;
  public fileName = "categories.json";

  constructor(
    private fileService: FileService,
  ) {
    this.categories = new Observable<Category[]>([]);
  }

  public async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this.categories.value = JSON.parse(categoriesJSON);
    }
    this.categories.subscribe((value) => {
      this.fileService.writeFile(this.fileName, JSON.stringify(value));
    });
  }

  public createCategory(name: string): Category {
    const newCategory: Category = {
      id: `${this.categories.value.length}_${name}`,
      name,
      subcategories: [],
    };
    this.categories.value = [...this.categories.value, newCategory];
    return newCategory;
  }

  public deleteCategory(id: string): void {
    this.categories.value = this.categories.value.filter(category => category.id !== id);
  }

  public updateCategory(id: string, name: string): Category {
    this.categories.value = this.categories.value.map(category => {
      if (category.id === id) {
        return {
          ...category,
          name,
        };
      }

      return category;
    });

    return this.categories.value.find(category => category.id === id);
  }
}
