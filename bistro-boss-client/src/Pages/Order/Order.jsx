import { Helmet, HelmetProvider } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopImg from "../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../hook/useMenu";
import OrdersTab from "../../Shared/OrdersTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  // console.log(category);
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const initIndexOf = categories.indexOf(category);
  const [tabindex, setTabindex] = useState(initIndexOf);

  const desserts = menu.filter((dessert) => dessert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");
  const drinks = menu.filter((drink) => drink.category === "drinks");
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Bistro Boss | Our Shop</title>
        </Helmet>
        <Cover img={shopImg} title="OUR SHOP"></Cover>
        <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <OrdersTab items={salads}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={pizzas}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={soups}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={desserts}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={drinks}></OrdersTab>
          </TabPanel>
        </Tabs>
      </div>
    </HelmetProvider>
  );
};

export default Order;
