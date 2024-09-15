import Banner from "../../Components/home/Banner";
import OrderMenu from "../../Components/home/OrderMenu";
import MenuSlider from "../../Components/home/MenuSlider";
import BistroBoos from "../../Components/home/BistroBoos";
import OurMenu from "../../Components/home/OurMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderMenu
        title={"ORDER ONLINE"}
        heading={"#000"}
        time={"---From 11:00am to 10:00pm---"}
        text={"#D99904"}
      />
      <MenuSlider />
      <BistroBoos />
      <OrderMenu
        title={"FROM OUR MENU"}
        color={"#000"}
        time={"---Check it out---"}
        text={"#D99904"}
      />
      <OurMenu />
    </div>
  );
};

export default Home;
