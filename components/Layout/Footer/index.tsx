import * as React from "react";
import SubsribeFormComponent from "./SubsribeForm";

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
    <p className="mt-10 leading-8 text-red-600">
      If you have any query, please contact us <br />
      <span className="font-medium text-red-600">{email}</span>
    </p>
    <div className="mt-2.5 flex gap-1">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2054dedbf5b07da265d1aa92077991302abd3c930eb81425ebc83feedac90705?apiKey=092e5299facd4790b1e37a52ac69c71d&"
        alt=""
        className="aspect-square w-[30px] shrink-0"
      />
      <div className="my-auto flex-auto">{address}</div>
    </div>
    <div className="mt-5 flex gap-1 uppercase">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40bc4ae9f57519779afd39f1f5b190840808be9770a43f89fb5c787712dc3a4c?apiKey=092e5299facd4790b1e37a52ac69c71d&"
        alt=""
        className="aspect-square w-[30px] shrink-0"
      />
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
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ba3b02997467539b9da38bcb0333f2f164c4b544b3de13c375a2931a80b02ef?apiKey=092e5299facd4790b1e37a52ac69c71d&"
                alt=""
                className="aspect-square w-[23px] shrink-0"
              />
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f32e1c61d12c1fd11c9f14c781880f96df3e6eb545b9e09af53ed5bac088cc46?apiKey=092e5299facd4790b1e37a52ac69c71d&"
                  alt=""
                  className="aspect-square w-[23px] shrink-0"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc7fc06d9ab26f904738ec41f0407f345825d75246f05d9e8898a77f0aca188?apiKey=092e5299facd4790b1e37a52ac69c71d&"
                  alt=""
                  className="aspect-[0.95] w-[22px] shrink-0"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f72421fce502e6ba7ec792fe4204540b426ecdca7a00e45fa70f532581131fe?apiKey=092e5299facd4790b1e37a52ac69c71d&"
                  alt=""
                  className="aspect-square w-[23px] shrink-0"
                />
              </div>
            </div>
          </section>

          <InfoSection title="Information" items={["About", "Terms & Conditions", "EMI Payment"]} />
          <InfoSection title="ACCOUNT" items={["My Account", "My Orders", "Wishlist", "Account Details"]} />
          <InfoSection title="Store" items={["Discounts", "Contact", "All Collections"]} />
          <ContactInfo email="Paykad@gmail.com" address="California, USA" phone="+12012987481" />
        </div>

        <hr className="mt-20 h-[1px] shrink-0 border border-solid border-white bg-white max-md:mt-10 max-md:max-w-full" />

        <footer className="mt-8 flex gap-1.5 self-center text-xs text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b43e17f0d967c33812292e1b9fc2c7615fc6c298e2ae3a81c56a9f2a72934f8?apiKey=092e5299facd4790b1e37a52ac69c71d&"
            alt=""
            className="aspect-square w-[18px] shrink-0"
          />
          <p className="my-auto flex-auto">Copyright.2024.All Right Reserved</p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
