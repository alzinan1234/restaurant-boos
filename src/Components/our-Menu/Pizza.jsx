import Image from "../../assets/menu/pizza-bg.jpg";

const Pizza = () => {
  return (
    <>
      <div className="relative mt-10 mb-10">
        {/* Image Section */}
        <img
          className="w-full h-[350px] md:h-[512px] object-cover"
          src={Image}
          alt="Chef"
        />

        {/* Text Overlay */}
        <div className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="text-white bg-[#00000039] text-center max-w-[90%] md:max-w-[800px] h-[200px] p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">
              PIZZA
            </h1>
            <p className="text-sm md:text-lg leading-relaxed">
              Our Bistro Boos are the heart of our restaurant. They ensure every
              dish that leaves our kitchen is a masterpiece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
