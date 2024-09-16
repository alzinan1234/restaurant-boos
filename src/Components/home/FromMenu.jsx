import bgImage from "../../assets/home/Rectangle 13.png";
import image from "../../assets/home/Rectangle 14.png";

const FromMenu = () => {
  return (
    <div
      className="relative bg-cover bg-center flex justify-center items-center h-screen mt-10 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" flex gap-8 w-[900px] mx-auto ">
        <div className=" ">
          <img src={image} alt="From Menu" className="object-cover h-[100%]" />
        </div>

        <div className="w-[100%]">
          <h1 className="text-2xl font-bold text-white">March 20, 2024</h1>
          <h2 className="text-3xl font-bold text-white">
            WHERE CAN I GET SOME?
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="   mx-auto  text-sm rounded p-3 bg-pink-700 shadow text-white hover:bg-red-700 cursor-pointer mt-1">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
