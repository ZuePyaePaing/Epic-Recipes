import CardsSection from "@/components/CardsSection";
import getMarkdwonData from "@/lib/getMarkdown";

interface Recipe {
  title: string;
  cook_time: string;
  author: string;
  created_at: string;
  description: string;
  slug: string;
  modified_title: string;
}
const page = async () => {
  const recipes: Recipe[] = await getMarkdwonData("recipes");
  console.log(recipes);

  return (
    <section className="w-full mx-auto">
      <CardsSection recipes={recipes}/>
    </section>
  );
};

export default page;
