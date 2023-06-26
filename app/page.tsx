import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* Car Catalogue */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Our Catalogue</h1>
          <p>1000+ cars available for you to choose from</p>
        </div>

        <div className="home__filters">
          {/* SearchBar */}
          <SearchBar />

          <div className="home__filter-container">
            {/* CustomFilter */}
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
      </div>
    </main>
  );
}
