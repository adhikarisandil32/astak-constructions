import React from "react"
import { twMerge as tw } from "tailwind-merge"

export default function ButtonPrimary({ text, action, className }) {
  return (
    <button
      className={tw(
        "group px-6 py-4 rounded-md border border-blue-950 bg-blue-950 text-white overflow-hidden relative",
        className
      )}
      onClick={action}
    >
      <span className="inline-block absolute left-0 top-0 h-0 w-full group-hover:h-full transition-all duration-300 bg-orange-200"></span>
      <span className="relative z-10 group-hover:text-black duration-300 transition-all">{text}</span>
    </button>
  )
}
