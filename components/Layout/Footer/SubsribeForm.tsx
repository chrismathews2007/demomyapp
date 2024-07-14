import * as React from "react"

interface SubscribeFormProps {
  label: string
  buttonText: string
  placeholder: string
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
  )
}

const SubsribeFormComponent: React.FC = () => {
  return (
    <section className="flex justify-between gap-5 max-md:flex-wrap">
      <div className="mt-6 flex w-full max-w-[1292px] items-center gap-5 self-center px-5 max-md:flex-wrap max-md:px-5">
        <div className="my-auto flex gap-5 px-5">
          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/616083c9baba4dec6138333bfd8d70458db4840309b2ce56d98cea18922e5cfc?apiKey=092e5299facd4790b1e37a52ac69c71d&"
              className="aspect-[1.2] w-9 fill-red-600"
              alt="Special Offer Icon"
            />
          </div>
          <h1 className="flex-auto text-xl font-medium text-white">For Special Offer Notification</h1>
        </div>
        <SubscribeForm label="Enter your email" buttonText="SUBSCRIBE" placeholder="Enter your email" />
      </div>
    </section>
  )
}

export default SubsribeFormComponent
