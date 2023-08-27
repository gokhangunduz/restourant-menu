type IuseSidebar = {
  isOpen: boolean;
  setIsOpen: any;
};

type IuseData = {
  restourant: IRestourant;
  categories: ICategories;
  products: IProducts;
};

type IRestourant = {
  name: string;
  currency: string;
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
