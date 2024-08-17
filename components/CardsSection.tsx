import React from "react";
import RecipeCard from "./RecipeCard";

type Props = {};

const CardsSection = (props: Props) => {
  return (
    <section className=" flex gap-3 flex-wrap justify-center">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  );
};

export default CardsSection;
