import React from "react"
import { twMerge as tw } from "tailwind-merge"

export default function ButtonSpinner({ className }) {
  return (
    <button
      disabled={true}
      className={tw("group px-6 py-4 rounded-md border border-blue-950 overflow-hidden relative", className)}
    >
      <span className="inline-block absolute left-0 top-0 h-0 w-full group-hover:h-full transition-all duration-300 bg-blue-950"></span>
      <span className="animate-spin inline-block relative z-10 h-5 w-5 rounded-full border-2 border-blue-800 border-t-white duration-300 transition-all"></span>
    </button>
  )
}
