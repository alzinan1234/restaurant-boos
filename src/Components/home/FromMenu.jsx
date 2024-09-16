import bgImage from "../../assets/home/Rectangle 13.png";
import image from "../../assets/home/Rectangle 14.png";

const FromMenu = () => {
  return (
    <div
      className="relative bg-cover bg-center flex justify-center items-center h-screen mt-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col md:flex-row gap-8 w-[90%] md:w-[80%] lg:w-[900px] mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="From Menu"
            className="object-cover w-full h-[300px] md:h-[100%] rounded"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            March 20, 2024
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2">
            WHERE CAN I GET SOME?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-6 mx-auto md:mx-0 text-sm rounded p-3 bg-pink-700 shadow text-white hover:bg-red-700 cursor-pointer">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
