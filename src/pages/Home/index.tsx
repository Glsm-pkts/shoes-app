
import { useState } from "react";
import Filter from "../../components/filter";
import Hero from "./Hero";
import List from "./List";
import Buttons from "./Buttons";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      
      <Hero/>
      <Buttons open={() =>setIsOpen(true)}/>
      <h3 className="text-[20px]   font-semibold my-[32px]">Sana Uygun Seçenekler</h3>

      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)}/>
        <List/>
      </div>
    </div>
  );
}

export default Home;
