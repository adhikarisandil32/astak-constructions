import React from "react"
import Menu from "../Menu"

const menuItems = [
  { text: "Home", link: "#" },
  { text: "About Us", link: "#about" },
  { text: "Projects", link: "#projects" },
  { text: "Services", link: "#services" },
  { text: "Testimonials", link: "#testimonials" },
  { text: "Contact", link: "#contact" },
]

export default function Navbar() {
  return (
    <div className="bg-blue-950 sticky top-0 z-50">
      <div className="container">
        <div className="py-6 flex items-center justify-between">
          <div className="text-2xl text-white">
            <a href="#">Logo</a>
          </div>

          <div>
            <Menu menuItems={menuItems} />
          </div>

          <div>
            <a href="#contact">
              <button className="group relative border border-orange-200 bg-orange-200 py-2 px-8 rounded-md overflow-hidden">
                <span className="inline-block absolute left-0 top-0 h-0 w-full group-hover:h-full transition-all duration-300 bg-blue-950"></span>
                <span className="relative z-10 group-hover:text-white duration-300 transition-all">
                  Schedule A Visit
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
