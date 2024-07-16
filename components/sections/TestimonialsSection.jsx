import { faCaretLeft, faCaretRight, faQuoteLeft, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

register()

const testimonials = [
  {
    name: "Alex Johnson",
    rating: 5,
    profileImgUrl: "assets/testimonial-user-1.jpg",
    message:
      "Exceptional work! The team completed our project ahead of schedule, with outstanding quality and attention to detail.",
  },
  {
    name: "Maria Garcia",
    rating: 5,
    profileImgUrl: "assets/testimonial-user-2.jpg",
    message:
      "Highly professional team. They communicated clearly throughout and the craftsmanship exceeded all our expectations!",
  },
  {
    name: "Liam Brown",
    rating: 4,
    profileImgUrl: "assets/testimonial-user-3.jpg",
    message:
      "Reliable and efficient. Delivered exactly what we envisioned for our renovation. Couldn’t be happier with the result!",
  },
  {
    name: "Sophia Martinez",
    rating: 5,
    profileImgUrl: "assets/testimonial-user-4.jpg",
    message:
      "Great communication and top-notch construction. The entire process was seamless, and we love our beautifully finished home!",
  },
  {
    name: "Olivia Wilson",
    rating: 4,
    profileImgUrl: "assets/testimonial-user-5.jpg",
    message:
      "Fantastic experience! The team was skilled, courteous, and meticulous. Our new space is exactly what we hoped for.",
  },
  {
    name: "Emma Thompson",
    rating: 4,
    profileImgUrl: "assets/testimonial-user-6.jpg",
    message:
      "Impressed by their attention to detail and commitment to quality. The project was completed on time and within budget.",
  },
]

export default function TestimonialsSection() {
  const swiperRef = useRef()

  const swiperPrev = () => swiperRef.current.swiper.slidePrev()
  const swiperNext = () => swiperRef.current.swiper.slideNext()

  useEffect(() => {
    swiperRef.current.swiper.autoplay.pause()
  })

  return (
    <div id="testimonials" className="bg-orange-200">
      <div className="container">
        <div className="py-16 space-y-8">
          <div>
            <span className="tracking-widest text-sm">WHAT CLIENTS SAY ABOUT US</span>
          </div>

          <div>
            <p className="w-[min(400px,100%)] mx-auto font-semibold text-center xl:text-xl text-lg">
              Don't just take our word for it. <br />
              See what clients' have to say about us.
            </p>
          </div>

          <div className="w-[min(100%,600px)] mx-auto flex items-center">
            <div className="">
              <FontAwesomeIcon
                icon={faCaretLeft}
                onClick={swiperPrev}
                className="cursor-pointer text-6xl text-blue-950"
              />
            </div>

            <swiper-container loop="true" class="xl:w-[85%] w-[80%]" ref={swiperRef}>
              {testimonials.map((testimonial, idx) => (
                <swiper-slide key={idx}>
                  <div className="flex flex-col xl:flex-row items-center xl:gap-8">
                    <div className="relative h-[125px] xl:w-[350px] w-[125px] rounded-full overflow-hidden">
                      <img
                        src={testimonial.profileImgUrl}
                        alt="testimonial-user-pic"
                        className="absolute top-0 left-0 h-full w-full object-top object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="text-justify xl:text-left text-last-center xl:text-last-left">
                        <FontAwesomeIcon icon={faQuoteLeft} className="pr-2 xl:text-5xl text-3xl text-gray-700" />
                        <span className="font-semibold xl:text-lg text-base">{testimonial.message}</span>
                      </div>

                      <div>
                        <p className="text-center xl:text-left">
                          {Array.from({ length: testimonial.rating }, (_, idx) => (
                            <FontAwesomeIcon key={idx} icon={faStarSolid} className="text-orange-600" />
                          ))}

                          {Array.from({ length: 5 - testimonial.rating }, (_, idx) => (
                            <FontAwesomeIcon key={idx} icon={faStarRegular} className="text-orange-600" />
                          ))}
                        </p>

                        <p className="text-center xl:text-left">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>

            <div className="">
              <FontAwesomeIcon
                icon={faCaretRight}
                onClick={swiperNext}
                className="cursor-pointer text-6xl text-blue-950"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
