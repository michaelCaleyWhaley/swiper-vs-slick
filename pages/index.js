import React from "react";

import SlickCarousel from "../components/SlickCarousel/SlickCarousel";
import ProductCard from "../components/ProductCard";
import SwiperCarousel from "../components/SwiperCarousel/SwiperCarousel";

const cages = [
  {
    src: "https://www.placecage.com/c/200/300",
    alt: "a",
    desc: "This is CAGE",
    price: "£45",
  },
  {
    src: "https://www.placecage.com/c/200/301",
    alt: "a",
    desc: "This is CAGE",
    price: "£55",
  },
  {
    src: "https://www.placecage.com/c/200/302",
    alt: "a",
    desc: "This is CAGE",
    price: "£1",
  },
  {
    src: "https://www.placecage.com/c/200/303",
    alt: "a",
    desc: "This is CAGE",
    price: "£100",
  },
  {
    src: "https://www.placecage.com/c/200/304",
    alt: "a",
    desc: "This is CAGE",
    price: "£1000",
  },
  {
    src: "https://www.placecage.com/c/200/305",
    alt: "a",
    desc: "This is CAGE",
    price: "£20",
  },
  {
    src: "https://www.placecage.com/c/200/306",
    alt: "a",
    desc: "This is CAGE",
    price: "£789",
  },
  {
    src: "https://www.placecage.com/c/200/312",
    alt: "a",
    desc: "This is CAGE",
    price: "£920",
  },
  {
    src: "https://www.placecage.com/c/200/311",
    alt: "a",
    desc: "This is CAGE",
    price: "£120",
  },
  {
    src: "https://www.placecage.com/c/200/310",
    alt: "a",
    desc: "This is CAGE",
    price: "£340",
  },
];

function Home() {
  return (
    <>
      <SlickCarousel>
        {cages.map((cage) => (
          <ProductCard key={cage.src} {...cage} />
        ))}
      </SlickCarousel>

      <SwiperCarousel>
        {cages
          .map((cage) => <ProductCard key={cage.src} {...cage} />)
          .reverse()}
      </SwiperCarousel>
    </>
  );
}

export default Home;
