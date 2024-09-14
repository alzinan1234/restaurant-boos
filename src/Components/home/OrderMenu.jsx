/* eslint-disable react/prop-types */
const OrderMenu = ({ title = "write the text", color = "#000" }) => {
  return (
    <>
      <div className="mt-10 mb-10">
        <div className="flex flex-col items-center justify-items-center ">
          <p className="text-[#D99904]">---From 11:00am to 10:00pm---</p>
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
