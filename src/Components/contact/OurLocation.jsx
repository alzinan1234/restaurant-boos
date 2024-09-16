import { ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { GoLocation } from "react-icons/go";

const OurLocation = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-12 mb-9">
        <div>
          <button className="bg-red-700 w-[200px] p-6 px-6 py-4 flex items-center justify-center">
            <PhoneIcon className="w-6 h-6 " />
          </button>
          <h1>PHONE</h1>
          <p>+38 (012) 34 56 789</p>
        </div>

        <div>
          <button className="bg-red-700 w-[200px] p-6 px-6 py-4 flex items-center justify-center">
            <GoLocation className="w-6 h-6 " />
          </button>
          <h1>ADDRESS</h1>
          <p>Mirpur-10,Dhaka</p>
        </div>

        <div>
          <button className="bg-red-700 w-[200px] p-6 px-6 py-4 flex items-center justify-center">
            <ClockIcon className="w-6 h-6 " />
          </button>
          <h1>WORKING HOURS</h1>
          <p>Mon - Fri: 08:00 - 22:00</p>
        </div>
      </div>
    </>
  );
};

export default OurLocation;
