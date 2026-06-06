import Categories from "@/components/categories/categories";
import Carrousel from "@/components/reusableComponents/carrousel";
import CategoryItems from "@/components/categoryItems/categoryItems";
import Items, { type ItemInt } from "@/components/categoryItems/items";
import { uae, adds, categoriesItems, bestSellingItems } from "@/utils/utils";

type HomeTabProps = {
  onItemClick: (item: ItemInt) => void;
};

export default function HomeTab({ onItemClick }: HomeTabProps) {
  return (
    <div>
      <Categories />

      <Carrousel slides={uae} height={"3rem"} autoPlayDelay={4000} />
      <Carrousel slides={adds} height={"10rem"} />

      <h4 className="mx-4 font-bold text-black">Best picks for you.</h4>
      <Items items={bestSellingItems} onItemClick={onItemClick} />

      <h4 className="mx-4 font-bold text-black">Categories</h4>
      <CategoryItems items={categoriesItems} />
    </div>
  );
}