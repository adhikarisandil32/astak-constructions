import { faCircleXmark, faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { register } from "swiper/element/bundle"

register()

export default function Modal({ setShowModal, imagesUrl }) {
  let swiper
  const swiperRef = useRef()
  const prevButtonRef = useRef()
  const nextButtonRef = useRef()

  const slidePrev = () => swiperRef.current.swiper.slidePrev()
  const slideNext = () => swiperRef.current.swiper.slideNext()

  useEffect(() => {
    // swiperRef.current.swiper.navigation.nextEl = nextButtonRef.current
    // swiperRef.current.swiper.navigation.prevEl = prevButtonRef.current

    swiper = swiperRef.current.swiper

    const eventHandler = (e) => {
      if (e.key === "Escape") {
        return setShowModal(false)
      }

      return
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", eventHandler)

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("keydown", eventHandler)
    }
  })

  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.75, opacity: 0 }}
      className="fixed top-0 left-0 h-screen w-full text-white flex justify-center items-center"
    >
      <div className="absolute -z-10 h-full w-full" onClick={() => setShowModal(false)}></div>

      <div className="p-4 h-full w-full md:w-[90%] space-y-4 rounded-lg bg-black/90">
        <div className="text-right">
          <button onClick={() => setShowModal(false)}>
            <FontAwesomeIcon icon={faCircleXmark} className="text-3xl" />
          </button>
        </div>

        <div className="flex justify-center w-3/4 mx-auto items-center gap-4">
          <div>
            <button ref={prevButtonRef} onClick={slidePrev}>
              <FontAwesomeIcon icon={faSquareCaretLeft} className="text-6xl cursor-pointer" />
            </button>
          </div>

          <swiper-container class="w-full" loop="true" ref={swiperRef}>
            {imagesUrl?.map((imageUrl, idx) => (
              <swiper-slide key={idx}>
                <div className="relative md:h-[600px]">
                  <img
                    src={imageUrl}
                    alt="project-image"
                    className="absolute w-full h-full object-cover object-center"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>

          <div>
            <button ref={nextButtonRef} onClick={slideNext}>
              <FontAwesomeIcon icon={faSquareCaretRight} className="text-6xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
