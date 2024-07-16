import React from "react"

export default function ServicesCard({ service }) {
  return (
    <>
      <div className="py-4 px-8 border hover:shadow-lg rounded-md space-y-4 h-full cursor-pointer transition-all duration-300">
        <div className="flex gap-4 items-center">
          <div className="relative h-20 w-20">
            <img
              src={service.imgUrl}
              alt="single-service-image"
              className="absolute left-0 top-0 h-full w-full object-contain object-center"
            />
          </div>
          <h3 className="font-bold text-xl">{service.title}</h3>
        </div>

        <ul className="space-y-2 list-disc ml-8">
          <li>
            <p className="text-sm xl:text-base">{service.description.overview}</p>
          </li>
          <li>
            <p className="text-sm xl:text-base">{service.description.responsibility}</p>
          </li>
        </ul>
      </div>
    </>
  )
}
