import SectionArticles from "@/components/SectionArticles/SectionArticles";
import SectionLocation from "@/components/SectionLocation/SectionLocation";
import {SectionOfBuy} from "@/components/SectionOfBuy/SectionOfBuy";
import { SectionSpecialOffer } from "@/components/SectionSpecialOffer/SectionSpecialOffer";
import Slider from "@/components/Slider/Slider";
 

export default function Home() {
  return (
    <main className=" body__without__footer pt-[6px]  ">
      <Slider />
      <SectionOfBuy title={'promotion'} />
      <SectionOfBuy title={'new'} />
      <SectionOfBuy title={'before'} />
      <SectionSpecialOffer/>
      <SectionLocation/>
      <SectionArticles/>
    </main>
  );
}
