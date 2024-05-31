import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hook/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((offer) => offer.category === "offered");
  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="OUR MENU"></Cover>
      <SectionTitle
        Heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitle>
      {/* Offered item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desserts item */}
      <MenuCategory
        items={desserts}
        title="desserts"
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza item */}
      <MenuCategory
        items={pizzas}
        title="pizza"
        img={pizzaImg}
      ></MenuCategory>
      {/* Salads item */}
      <MenuCategory
        items={salads}
        title="salad"
        img={saladImg}
      ></MenuCategory>
      {/* Soups item */}
      <MenuCategory
        items={soups}
        title="soups"
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
