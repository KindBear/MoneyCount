export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
}

export type CategoryUpdateData = {
  id: string;
  name: string;
};

export type CategoryCreateData = {
  name: string;
};

export type CategoryDeleteData = {
  id: string;
};
