import React from "react";
import ContactBanner from "../../Components/contact/ContactBanner";
import OrderMenu from "../../Components/home/OrderMenu";
import OurLocation from "../../Components/contact/OurLocation";
import ContactFrom from "../../Components/contact/ContactFrom";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <OrderMenu
        title={"OUR LOCATION"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---Visit Us---"}
      />
      <OurLocation />
      <OrderMenu
        title={"CONTACT FORM"}
        color={"#000"}
        pColor={"#D99904"}
        time={"---Send Us a Message---"}
      />
      <ContactFrom />
    </>
  );
};

export default Contact;
