import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {/* Car Catalogue  List*/}

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Opps we couldn't find any cars
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
