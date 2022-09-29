import { Category } from "../../shared/types/Category";
import { FileService } from "./FileService";
import { OnInit } from "../core/onInit";
import { service } from "../core/service";
import { Observable } from "../core/Observable";

@service()
export class CategoryService implements OnInit {
  private _categories: Observable<Category[]>;
  private fileName = "categories.json";

  constructor(
    private fileService: FileService,
  ) {
    this._categories = new Observable<Category[]>([]);
  }

  public get categories(): Category[] {
    return this._categories.value;
  }

  public async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this._categories.value = JSON.parse(categoriesJSON);
    }
    this._categories.subscribe((value) => {
      this.fileService.writeFile(this.fileName, JSON.stringify(value));
    });
  }

  public createCategory(name: string): Category {
    const newCategory: Category = {
      id: `${this._categories.value.length}_${name}`,
      name,
      subcategories: [],
    };
    this._categories.value = [...this._categories.value, newCategory];
    return newCategory;
  }

  public deleteCategory(id: string): void {
    this._categories.value = this._categories.value.filter(category => category.id !== id);
  }

  public updateCategory(id: string, name: string): Category {
    this._categories.value = this._categories.value.map(category => {
      if (category.id === id) {
        return {
          ...category,
          name,
        };
      }

      return category;
    });

    return this._categories.value.find(category => category.id === id);
  }
}
