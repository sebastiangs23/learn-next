import Categories from "@/components/categories/categories";
import Location from "@/components/location/location";
import SearchBar from "@/components/searchbar/searchBar";

export default function Home() {
  return (
    <div className="bg-white">
      <Categories/>
      <Location />
      <SearchBar />
    </div>
  );
}
