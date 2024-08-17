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
import { ArrowUpRight, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {};

const RecipeCard = (props: Props) => {
  return (
    <Card className="max-w-[360px]">
      <CardHeader>
        <CardTitle>Reciepe Name</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          fugiat adipisci officiis veritatis id sint cupiditate distinctio eius
          at eum, dolorem voluptatem dicta. Distinctio aut optio id delectus
          quasi velit?
        </CardDescription>
      </CardContent>
      <CardFooter className=" flex items-center justify-between">
        <div className="flex gap-x-3 ">
          <Badge className="text-xs font-medium text-nowrap">@ Mg Kaung</Badge>
          <Badge className="text-xs font-medium text-nowrap">
            <Calendar className=" w-4 h-4" />
            16/8/2024
          </Badge>
        </div>
        <Link href={"/recipe"} className=" flex items-center text-nowrap transition-all hover:text-red-600">
          <p className=" text-xs font-medium">see more</p>
          <ArrowUpRight className=" w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
