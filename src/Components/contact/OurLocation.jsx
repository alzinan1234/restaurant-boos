import { ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { GoLocation } from "react-icons/go";

const OurLocation = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mb-9">
        <div className="text-center">
          <button className="bg-red-700 w-[150px] sm:w-[200px] p-4 sm:p-6 flex items-center justify-center mx-auto">
            <PhoneIcon className="w-6 h-6 " />
          </button>
          <h1 className="text-lg font-semibold mt-2">PHONE</h1>
          <p className="text-sm">+38 (012) 34 56 789</p>
        </div>

        <div className="text-center">
          <button className="bg-red-700 w-[150px] sm:w-[200px] p-4 sm:p-6 flex items-center justify-center mx-auto">
            <GoLocation className="w-6 h-6 " />
          </button>
          <h1 className="text-lg font-semibold mt-2">ADDRESS</h1>
          <p className="text-sm">Mirpur-10, Dhaka</p>
        </div>

        <div className="text-center">
          <button className="bg-red-700 w-[150px] sm:w-[200px] p-4 sm:p-6 flex items-center justify-center mx-auto">
            <ClockIcon className="w-6 h-6 " />
          </button>
          <h1 className="text-lg font-semibold mt-2">WORKING HOURS</h1>
          <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
        </div>
      </div>
    </>
  );
};

export default OurLocation;
