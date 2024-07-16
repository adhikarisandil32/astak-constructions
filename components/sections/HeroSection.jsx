import React from "react"
import ButtonPrimary from "../buttons/ButtonPrimary"
import ButtonSecondary from "../buttons/ButtonSecondary"

export default function HeroSection() {
  return (
    <div className="xl:h-[90vh] bg-orange-200">
      <div className="container h-full">
        <div className="h-full flex items-center">
          <div className="w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="tracking-widest text-sm">ASTAK ENGINEERS AND CONSTRUCTIONS</p>
              <h2 className="text-5xl font-bold">We Build Your</h2>
              <h2 className="text-5xl font-bold text-blue-950">Dream House</h2>
            </div>

            <div className="space-y-1 text-lg">
              <p>Are you ready to build your dream house?</p>
              <p>Look No furthur! We are here!!</p>
            </div>

            <div className="space-x-4">
              <a href="#projects">
                <ButtonPrimary text="See Our Projects" />
              </a>

              <a href="#contact">
                <ButtonSecondary text="Contact Us" />
              </a>
            </div>
          </div>

          <div className="w-1/2 h-full">
            <img src="/assets/hero-image.png" alt="hero-image" className="w-full h-full object-contain object-center" />
          </div>
        </div>
      </div>
    </div>
  )
}
