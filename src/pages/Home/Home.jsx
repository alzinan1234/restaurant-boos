import Banner from "../../Components/home/Banner";
import OrderMenu from "../../Components/home/OrderMenu";
import MenuSlider from "../../Components/home/MenuSlider";
import BistroBoos from "../../Components/home/BistroBoos";
import OurMenu from "../../Components/home/OurMenu";
import Number from "../../Components/home/Number";
import Chef from "../../Components/home/Chef";
import FromMenu from "../../Components/home/FromMenu";
import Review from "../../Components/home/Review";
import Footer from "../../Components/home/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderMenu
        title={"ORDER ONLINE"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---From 11:00am to 10:00pm---"}
      />
      <MenuSlider />
      <BistroBoos />
      <OrderMenu
        title={"FROM OUR MENU"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---Check it out---"}
      />
      <OurMenu />
      <Number />
      <OrderMenu
        title={"CHEF RECOMMENDS"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---Should Try---"}
      />
      <Chef />
      <FromMenu />
      <OrderMenu
        title={"TESTIMONIALS"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---What Our Clients Say---"}
      />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
