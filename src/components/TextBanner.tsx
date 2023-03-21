import React from "react"

const TextBanner: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 ml-10 mt-20 items-start text-left">
      <div className="headline  uppercase text-white flex flex-col gap-10">
        <h1 className="text-5xl font-bold">the barbershop</h1>
        <h2 className="text-4xl text-barberColor font-bold">
          expert haircuts and grooming servies
        </h2>
      </div>

      <p className="text-gray-300 text-2xl">
        At the Finest Barbershop, we offer a wide range of professional hair{" "}
        <br />
        cutting and grooming services for men. Our experienced barbers use{" "}
        <br />
        the newest techniques and tools to give you the perfect look.
      </p>

      <div className="button flex gap-5">
        <button className="bg-barberColor px-10 py-5 text-white rounded-md text-xl hover:opacity-80 duration-200 font-medium">
          Book a haircut
        </button>
        <button
          className="border-barberColor  border-2 px-10 py-5 text-barberColor rounded-md text-xl font-medium
             hover:bg-barberColor hover:text-white duration-300"
        >
          Go shopping
        </button>
      </div>
    </div>
  )
}

export default TextBanner
