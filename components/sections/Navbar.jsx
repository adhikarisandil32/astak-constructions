import React, { useEffect, useRef } from "react"
import Menu from "../Menu"
import ButtonHamBurger from "../buttons/ButtonHamBurger"

const menuItems = [
  { text: "Home", link: "#" },
  { text: "About Us", link: "#about" },
  { text: "Projects", link: "#projects" },
  { text: "Services", link: "#services" },
  { text: "Testimonials", link: "#testimonials" },
  { text: "Contact", link: "#contact" },
]

export default function Navbar() {
  const menuRef = useRef()
  const navbarRef = useRef()

  const clickAction = () => {
    const menuClassLists = menuRef.current.classList

    if (menuClassLists.contains("grid-rows-0")) {
      menuClassLists.remove("grid-rows-0")
      menuClassLists.add("grid-rows-1fr")
    } else {
      menuClassLists.remove("grid-rows-1fr")
      menuClassLists.add("grid-rows-0")
    }
  }

  useEffect(() => {
    console.log(navbarRef.current.clientHeight)
  }, [])

  return (
    <div className="bg-red-950 sticky top-0 z-50" ref={navbarRef}>
      <div className="container">
        <div className="py-2 flex xl:flex-row flex-col xl:items-center justify-between">
          <div className="relative">
            <a href="#" className="block relative h-24 w-24">
              <img src="/assets/logo.png" alt="logo" className="absolute h-full w-full object-contain object-center" />
            </a>

            <div className="block xl:hidden absolute right-0 top-1/2 -translate-y-1/2">
              <ButtonHamBurger action={clickAction} />
            </div>
          </div>

          <div className="xl:block grid grid-rows-0 transition-all duration-300" ref={menuRef}>
            <Menu menuItems={menuItems} onClick={clickAction} />
          </div>

          <div className="xl:block hidden">
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
