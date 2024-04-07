import React from "react";
import { Card, Button, Badge } from "flowbite-react";
import { getImageURL } from "../utils/image-util";
import { getCategoryColor } from "../utils/category-util";
import { IoLocationOutline, IoStorefrontSharp } from "react-icons/io5";

export default function Item({item, img, price, category, system, store, location}) {


    return (
        <Card
          className="max-w-sm"
          imgAlt={item}
          imgSrc={getImageURL(img)}
        >
        <div className="flex justify-between">
          <Badge className="" color={getCategoryColor(category)}>{category}</Badge>
          <div className="flex flex-wrap">
            <span className="text-sm mr-2"><IoStorefrontSharp className="inline" /> {store}</span>
            <span className="text-sm"><IoLocationOutline className="inline" />{location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item}
          </h5>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{`¥${price}`}</span>
        </div>
        <div className="flex items-center justify-between">
          <a className="text-red-500 hover:underline">Delete</a>
          <Button size="sm">See details</Button>
        </div>
      </Card>
    )
}