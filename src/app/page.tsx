import SectionArticles from "@/components/SectionArticles/SectionArticles";
import SectionLocation from "@/components/SectionLocation/SectionLocation";
import { SectionOfBuy } from "@/components/SectionOfBuy/SectionOfBuy";
import { SectionSpecialOffer } from "@/components/SectionSpecialOffer/SectionSpecialOffer";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="pt-[6px]">
      <Slider />
      <SectionOfBuy limited ={true}  title={"promotion"} />
      <SectionOfBuy limited = {true}   title={"new"} />
      <SectionOfBuy limited= {true}  title={"before"} />
      <SectionSpecialOffer />
      <SectionLocation />
      <SectionArticles />
    </div>
  );
}
