import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  title: string;
  cook_time: string;
  author: string;
  created_at: string;
  description: string;
  slug: string;
  modified_title: string;
};

const RecipeCard = ({
  title,
  cook_time,
  author,
  created_at,
  description,
  slug,
}: Props) => {
  return (
    <Card className="max-w-[360px]">
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
          href={`/recipe/${slug}`}
          className=" flex items-center text-nowrap transition-all hover:text-red-600"
        >
          <p className=" text-xs font-medium">see more</p>
          <ArrowUpRight className=" w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
