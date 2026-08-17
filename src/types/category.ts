export type Category = {
  id: string;
  name: string;
  nameEn: string;
  src: string;
  subCategories?: SubCategory[];
};

export type SubCategory = {
  id: string;
  name: string;
  nameEn: string;
};