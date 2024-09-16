/* eslint-disable react/prop-types */
const OrderMenu = ({ pColor, time, color, title }) => {
  return (
    <>
      <div className="mt-10 mb-10 font">
        <div className="flex flex-col items-center justify-items-center ">
          <p className={`text-[${pColor}]`}>{time}</p>
          <h1
            className={`text-[${color}] text-3xl font-semibold pt-6 uppercase`}
          >
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default OrderMenu;
