export interface SectionBuyProps {
  title: "promotion" | "new" | "before" | "articles" | "catalog";
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
