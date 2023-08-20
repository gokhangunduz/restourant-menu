type IuseData = {
  categories: ICategories;
  products: IProducts;
};

type ICategories = ICategory[];

type ICategory = {
  id: number;
  name: string;
};

type IProducts = IProduct[];

type IProduct = {
  image_url: string;
  id: number;
  category_id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};
