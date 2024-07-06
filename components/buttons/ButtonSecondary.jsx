import React from "react"
import { twMerge as tw } from "tailwind-merge"

export default function ButtonSecondary({ text, action, className }) {
  return (
    <button
      className={tw("group px-6 py-4 rounded-md border border-blue-950 overflow-hidden relative", className)}
      onClick={action}
    >
      <span className="inline-block absolute left-0 top-0 h-0 w-full group-hover:h-full transition-all duration-300 bg-blue-950"></span>
      <span className="relative z-10 group-hover:text-white duration-300 transition-all">{text}</span>
    </button>
  )
}
