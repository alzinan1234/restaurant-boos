import React from "react";
import MenuBanner from "../../Components/our-Menu/MenuBanner";
import OrderMenu from "../../Components/home/OrderMenu";
import TodayOffers from "../../Components/our-Menu/TodayOffers";
import Desserts from "../../Components/our-Menu/Desserts";

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
    </>
  );
};

export default MenuPart;
