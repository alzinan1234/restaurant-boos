/* eslint-disable react/prop-types */
const OrderMenu = ({
  title = "write the text",
  heading = "#000",
  time,
  text,
}) => {
  return (
    <>
      <div className="mt-10 mb-10">
        <div className="flex flex-col items-center justify-items-center ">
          <p className={`text-[${text}]`}>{time}</p>
          <h1
            className={`text-[${heading}] text-3xl font-semibold pt-6 uppercase`}
          >
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default OrderMenu;
