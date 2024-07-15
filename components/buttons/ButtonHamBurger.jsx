import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function ButtonHamBurger({ action }) {
  return (
    <button className="px-4 py-2 text-white text-3xl hover:bg-[#040613] transition-all duration-300" onClick={action}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  )
}
