import * as React from "react";
import SubsribeFormComponent from "./SubsribeForm";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaRegCopyright } from "react-icons/fa";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";
import { MdPhoneAndroid } from "react-icons/md";
interface InfoSectionProps {
  title: string;
  items: string[];
}

interface ContactInfoProps {
  email: string;
  address: string;
  phone: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => (
  <section className="flex flex-1 flex-col text-xs text-white">
    <h2 className="text-base font-medium uppercase">{title}</h2>
    {items.map((item, index) => (
      <p key={index} className={`mt-${index === 0 ? "8" : "5"}`}>
        {item}
      </p>
    ))}
  </section>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ email, address, phone }) => (
  <section className="flex flex-1 flex-col self-stretch text-xs text-white">
    <h2 className="text-base font-medium uppercase">CONTACT US</h2>
    <p className="mt-10 leading-8 ">
      If you have any query, please contact us <br />
      <span className="font-medium text-red-600">{email}</span>
    </p>
    <div className="mt-2.5 flex gap-1">
      <FaMapMarkerAlt className="text-[20px]" />
      <div className="my-auto flex-auto">{address}</div>
    </div>
    <div className="mt-5 flex gap-1 uppercase">
      <MdPhoneAndroid className="text-[20px]" />
      <div className="my-auto flex-auto">{phone}</div>
    </div>
  </section>
);

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* <SubsribeFormComponent /> */}
      <section className="flex w-full flex-col bg-gray-800 px-16 py-11 max-md:max-w-full max-md:px-5">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <section className="flex flex-1 flex-col text-xs text-white">
            <h2 className="text-base font-medium uppercase text-white">About Us</h2>
            <p className="mt-9 text-sm leading-6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque
              ultricies et tortor nec laoreet.
            </p>
            <div className="mt-5 flex w-full gap-5">
              <FaFacebookF className="text-[20px]" />
              <FaInstagram className="text-[20px]" />
              <TiSocialSkypeOutline className="text-[20px]" />
              <RiYoutubeLine className="text-[20px]" />
            </div>
          </section>

          <InfoSection title="Information" items={["About", "Terms & Conditions", "EMI Payment"]} />
          <InfoSection title="ACCOUNT" items={["My Account", "My Orders", "Wishlist", "Account Details"]} />
          <InfoSection title="Store" items={["Discounts", "Contact", "All Collections"]} />
          <ContactInfo email="Paykad@gmail.com" address="California, USA" phone="+12012987481" />
        </div>

        <hr className="mt-20 h-[1px] shrink-0 border border-solid border-white bg-white max-md:mt-10 max-md:max-w-full" />

        <footer className="mt-8 flex gap-1.5 self-center text-xs text-white">
          <FaRegCopyright className="text-[20px]" />
          <p className="my-auto flex-auto">Copyright.2024.All Right Reserved</p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
