export interface SectionBuyProps {
  title:
    | "promotion"
    | "new"
    | "before"
    | "articles"
    | "catalog"
    | "milk_food"
    | "bread_food"
    | "veg_food"
    | "freeze_food"
    | "drink_food"
    | "sweets_food"
    | "cofee_food"
    | "grocery_food"
    | "healstyle_food"
    | "zood_food"
    | "kido_food"
    | "meat_food"
    | "clean_nofood";
  limited: boolean;
}

export interface FormData {
  id: number;
  name: string;
  priceCard: number;
  priceWithoutCard: number;
  category: string;
  img: string;
}
type imgWord = { img: string };

export type InfoSectionsProductsName = Pick<SectionBuyProps, "title">;

export type InfoSectionsProducts = FormData &
  Pick<SectionBuyProps, "title"> &
  imgWord;
