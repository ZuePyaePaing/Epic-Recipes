import React from "react";
import RecipeCard from "./RecipeCard";

interface Recipe {
  title: string;
  cook_time: string;
  author: string;
  created_at: string;
  description: string;
  slug: string;
  modified_title: string;
}

interface CardsSectionProps {
  recipes: Recipe[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ recipes }) => {
  return (
    <section className=" flex gap-3 flex-wrap justify-center">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </section>
  );
};

export default CardsSection;
