import fs from "fs";
import matter from "gray-matter";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const getContent = (slug: string) => {
  const folder = "recipes/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) {
    notFound();
  }
  const content = fs.readFileSync(file, "utf8");

  const result = matter(content);
  return result;
};

export async function generateMetadata({ params }: any) {
  const title = params.slug ? ` - ${params.slug}` : "";
  return {
    title: `EPICRECIPES ${title.replace("_", " ").toUpperCase()}`,
  };
}

const RecipeDetail = ({ params }: any) => {
  const { slug } = params;
  const recipe = getContent(slug);
  const { title, cook_time, author, created_at, description } = recipe.data;
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="mb-3">{title}</CardTitle>
          <div className=" flex items-center  gap-x-2">
            <Badge className="text-xs font-medium text-nowrap">{author}</Badge>
            <Badge className="text-xs font-medium text-nowrap">
              <Clock className=" w-4 h-4 me-1" />

              {created_at}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className=" flex items-center justify-between">
          <Badge className="text-xs font-medium text-nowrap">
            <Clock className=" w-4 h-4 me-1" />
            {cook_time}
          </Badge>
          <Link
            href={`/`}
            className=" flex items-center text-nowrap transition-all hover:text-red-600"
          >
            <Button size={'icon'}>
              <ArrowLeft className=" w-6 h-6" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RecipeDetail;
