import React from "react";
import MenuBanner from "../../Components/our-Menu/MenuBanner";
import OrderMenu from "../../Components/home/OrderMenu";
import TodayOffers from "../../Components/our-Menu/TodayOffers";
import Desserts from "../../Components/our-Menu/Desserts";
import DessertsPart from "../../Components/our-Menu/DessertsPart";
import Pizza from "../../Components/our-Menu/Pizza";
import PizzaData from "../../Components/our-Menu/PizzaData";
import Salad from "../../Components/our-Menu/Salad";
import SaladData from "../../Components/our-Menu/SaladData";
import ShoupData from "../../Components/our-Menu/ShoupData";
import Soup from "../../Components/our-Menu/Soup";

const MenuPart = () => {
  return (
    <>
      <MenuBanner />
      <OrderMenu
        title={"TODAY'S OFFER"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---Don't miss---"}
      />
      <TodayOffers />
      <Desserts />
      <DessertsPart />
      <Pizza />
      <PizzaData />
      <Salad />
      <SaladData />
      <Soup />
      <ShoupData />
    </>
  );
};

export default MenuPart;
