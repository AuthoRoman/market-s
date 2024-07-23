import SectionOfBuy from "@/components/SectionOfBuy/SectionOfBuy";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" body__without__footer pt-[6px]  ">
      <Slider />
      <SectionOfBuy title={'promotion'} />
      <SectionOfBuy title={'new'} />
      <SectionOfBuy title={'before'} />
    </main>
  );
}
