import * as React from "react";
import SelectDropdown from "@/components/UI/SelectDropdown";

const Header: React.FC = () => {
  const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "chinese", label: "Chinese" },
    { value: "hindi", label: "Hindi" },
    { value: "arabic", label: "Arabic" },
  ];

  const currencies = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "inr", label: "INR" },
    { value: "jpy", label: "JPY" },
  ];

  return (
    <header className="flex justify-end gap-3 whitespace-nowrap bg-gray-800 px-16 py-4 text-xs font-light text-white max-md:flex-wrap max-md:px-5">
      <SelectDropdown data={languages} />
      <span className="my-auto h-3 w-px shrink-0 border border-solid border-white bg-white" />
      <SelectDropdown data={currencies} />
    </header>
  );
};

export default Header;
