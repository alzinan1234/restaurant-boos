import Banner from "../../Components/home/Banner";
import OrderMenu from "../../Components/home/OrderMenu";
import MenuSlider from "../../Components/home/MenuSlider";
import BistroBoos from "../../Components/home/BistroBoos";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderMenu title={"ORDER ONLINE"} color={"#000"} />
      <MenuSlider />
      <BistroBoos />
    </div>
  );
};

export default Home;
