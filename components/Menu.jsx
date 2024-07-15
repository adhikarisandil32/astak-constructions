import React from "react"

export default function Menu({ menuItems, onClick }) {
  return (
    <ul className="flex flex-col xl:flex-row xl:items-center text-white overflow-hidden" onClick={onClick}>
      {menuItems.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.link}
            className="inline-block w-full px-6 py-2 hover:bg-[#040613] rounded-md transition-all duration-300"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
