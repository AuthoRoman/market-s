export interface SectionBuyProps {
  title: "promotion" | "new" | "before";
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

export type InfoSectionsProducts = FormData & SectionBuyProps & imgWord;
