import React from "react"

export default function Menu({ menuItems }) {
  return (
    <ul className="flex items-center text-white">
      {menuItems.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.link}
            className="inline-block px-6 py-2 hover:bg-[#040613] rounded-md transition-all duration-300"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
