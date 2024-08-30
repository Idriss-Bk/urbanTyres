import Hero from "@/app/components/sections/Hero";
import Block1 from "@/app/components/sections/Featured/Categories/Block1";
import Block2 from "@/app/components/sections/Featured/Categories/Block2";
import Block3 from "@/app/components/sections/Featured/Categories/Block3";
import Aboutme from "./components/sections/Aboutme";
import Newsletter from "./components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Block1 />
      <Aboutme />
      <Block2 />
      <Newsletter />
      <Block3 />
    </main>
  );
}
