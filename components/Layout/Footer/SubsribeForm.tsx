import * as React from "react";
import { FaRegNewspaper } from "react-icons/fa";
interface SubscribeFormProps {
  label: string;
  buttonText: string;
  placeholder: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ label, buttonText, placeholder }) => {
  return (
    <form className="flex gap-5 bg-white pl-7 max-md:max-w-full max-md:flex-wrap">
      <label htmlFor="emailInput" className="sr-only">
        {label}
      </label>
      <input
        className="my-auto flex-auto text-sm text-neutral-500"
        type="email"
        id="emailInput"
        placeholder={placeholder}
        aria-label={label}
      />
      <button className="justify-center whitespace-nowrap bg-red-600 px-14 py-6 text-base font-semibold text-white max-md:px-5">
        {buttonText}
      </button>
    </form>
  );
};

const SubsribeFormComponent: React.FC = () => {
  return (
    <section className="flex justify-between gap-5 max-md:flex-wrap">
      <div className="mt-6 flex w-full max-w-[1292px] items-center gap-5 self-center px-5 max-md:flex-wrap max-md:px-5">
        <div className="my-auto flex gap-5 px-5">
          <div className="flex items-center justify-center">
            <FaRegNewspaper className="aspect-[1.2] w-9 fill-red-600" />
          </div>
          <h1 className="flex-auto text-xl font-medium text-white">For Special Offer Notification</h1>
        </div>
        <SubscribeForm label="Enter your email" buttonText="SUBSCRIBE" placeholder="Enter your email" />
      </div>
    </section>
  );
};

export default SubsribeFormComponent;
