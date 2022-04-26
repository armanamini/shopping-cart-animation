import React from "react";
import Items from "../Items/Items";
import jar from "../../images/JAR.png";
import apple from "../../images/apple.png";
import banana from "../../images/Bitmap.png";
import grape from "../../images/grape.png";
import style from "./Product.module.css";
import MoreItems from "../Items/MoreItems";
import { useState } from "react";
import Roundcircle from "../../SVG/Round_circle";
import DoNotDestrub from "../../SVG/DoNotDestrub";
import cls from "classnames";

const Product = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Lotus Jar",
      price: "29.99",
      img: jar,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 2,
      title: "Lotus Mi",
      price: "39.99",
      img: jar,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  const DUMMY_DATA_fruit = [
    {
      id: 3,
      title: "Apple Fruit",
      price: "9.99",
      img: apple,
      description: "Original Taste",
    },
    {
      id: 4,
      title: "Triple Fruit",
      price: "10.00",
      img: banana,
      description: "Original Taste",
    },
    {
      id: 5,
      title: "Grape",
      price: "10.00",
      img: grape,
      description: "Original Taste",
    },
  ];
  const [showMoreItems, setShowMoreItems] = useState(false);
  const handleShowMore = () => {
    setShowMoreItems(!showMoreItems);

  }
  return (
    <div className={style.container}>
      <h1 className={style.ItemsTitle} >Best Sellers</h1>
      {!showMoreItems ? <div className={cls(style.showMeMore, style.closeSvg )} onClick={handleShowMore}><Roundcircle/></div> : <div className={cls(style.showMeMore,style.Opensvg)} onClick={handleShowMore}><DoNotDestrub/></div>}
      <div className={style.allItems}>
        <div className={style.productContainer}>
          {DUMMY_DATA.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </div>

      
{showMoreItems &&  <div className={style.MoreItemsContainer}>
          <h2 className={style.moreItemsTitle}>More Items</h2>
          {DUMMY_DATA_fruit.map((item) => (
            <MoreItems key={item.id} item={item} />
          ))}
        </div>}

      </div>
    </div>
  );
};

export default Product;
