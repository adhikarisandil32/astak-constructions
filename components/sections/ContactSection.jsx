import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import ButtonSecondary from "../buttons/ButtonSecondary"
import { useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import toast from "react-hot-toast"
import ButtonSpinner from "../buttons/ButtonSpinner"

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm()
  const [submitClicked, setSubmitClicked] = useState(false)

  const submitFn = async (rawData) => {
    const readyData = {
      name: rawData.name.trim(),
      email: rawData.email.trim(),
      message: rawData.message.trim(),
      ...rawData,
    }

    setSubmitClicked(true)

    try {
      const response = await fetch("http://localhost:3000/client-info", {
        method: "POST",
        body: JSON.stringify(readyData),
      })
      if (!response.ok) throw new Error("Error Sending Message")

      reset()
      setSubmitClicked(false)
      toast.success("Message Sent Successfully")
    } catch (error) {
      setSubmitClicked(false)
      toast.error(error.message)
    }
  }

  return (
    <div id="contact" className="bg-radial">
      <div className="container">
        <div className="py-16 space-y-8">
          <div>
            <span className="text-sm tracking-widest">GET IN TOUCH</span>
          </div>

          <div>
            <p className="w-[min(100%,400px)] mx-auto font-semibold text-center text-lg">
              Contact Us For a Quote or to Discuss a Project
            </p>
          </div>

          <div>
            <div className="p-2 w-[min(600px,100%)] mx-auto flex xl:flex-nowrap flex-wrap gap-2 justify-between">
              <div className="p-4 xl:w-1/3 text-center space-y-2 break-words hover:bg-blue-300 transition-all duration-300 rounded-md cursor-pointer">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-950 text-2xl" />
                </p>

                <p>
                  <span>Pokhara, Kaski </span>
                  <br />
                  <span>Gandaki, Nepal</span>
                </p>
              </div>

              <div className="p-4 xl:w-1/3 text-center space-y-2 break-words hover:bg-blue-300 transition-all duration-300 rounded-md cursor-pointer">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="text-blue-950 text-2xl" />
                </p>

                <p>
                  <span>+977 9812345678</span>
                  <br />
                  <span> +977 9842123456</span>
                </p>
              </div>

              <div className="p-4 xl:w-1/3 mx-auto text-center space-y-2 break-words hover:bg-blue-300 transition-all duration-300 rounded-md cursor-pointer">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-950 text-2xl" />
                </p>

                <p>astakconstructions@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <form
              className="relative p-8 w-[min(600px,100%)] space-y-8 mx-auto border-2 border-blue-950 rounded-lg backdrop-blur-2xl"
              onSubmit={handleSubmit(submitFn)}
            >
              <div>
                <label className="font-bold">
                  Full Name*:{" "}
                  {errors.name ? <span className="text-xs font-normal text-red-600">{errors.name.message}</span> : null}
                </label>

                <input
                  {...register("name", {
                    required: "name field is required",
                    validate: {
                      validateName: (value) => {
                        return value.trim() ? true : "name field is required"
                      },
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Full Name"
                  className={twMerge(
                    "w-full bg-transparent border-b-2 outline-none resize-none",
                    errors.name ? "border-red-600" : "border-black"
                  )}
                />
              </div>

              <div>
                <label className="font-bold">
                  Email*:{" "}
                  {errors.email ? (
                    <span className="text-xs font-normal text-red-600">{errors.email.message}</span>
                  ) : null}
                </label>

                <input
                  {...register("email", {
                    required: "email field is required",
                    minLength: { value: 5, message: "minimum 5 characters long" },
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className={twMerge(
                    "w-full bg-transparent border-b-2 outline-none resize-none",
                    errors.email ? "border-red-600" : "border-black"
                  )}
                />
              </div>

              <div>
                <label className="font-bold">
                  Phone Number*:{" "}
                  {errors.phoneNumber ? (
                    <span className="text-xs font-normal text-red-600">{errors.phoneNumber.message}</span>
                  ) : null}
                </label>

                <input
                  {...register("phoneNumber", {
                    required: "phone number field is required",
                    maxLength: { value: 10, message: "maximum 10 digits long" },
                    minLength: { value: 9, message: "minimum 9 digits long" },
                  })}
                  type="number"
                  placeholder="Enter Phone Number"
                  className={twMerge(
                    "w-full bg-transparent border-b-2 outline-none resize-none",
                    errors.phoneNumber ? "border-red-600" : "border-black"
                  )}
                />
              </div>

              <div>
                <label className="font-bold">
                  Message*:{" "}
                  {errors.message ? (
                    <span className="text-xs font-normal text-red-600">{errors.message.message}</span>
                  ) : null}
                </label>

                <textarea
                  {...register("message", {
                    required: "message field is required",
                    validate: {
                      validateTextOnTrim: (value) => {
                        const valueLength = value.trim().length

                        if (valueLength < 10 || valueLength > 500) return "between 10 and 500 characters"

                        return true
                      },
                    },
                  })}
                  rows="5"
                  placeholder="Your Message"
                  className={twMerge(
                    "w-full bg-transparent border-b-2 outline-none resize-none",
                    errors.message ? "border-red-600" : "border-black"
                  )}
                />
              </div>

              <div className="text-center">
                {!submitClicked ? (
                  <ButtonSecondary className="px-8" text="Submit" />
                ) : (
                  <ButtonSpinner className="px-8 min-w-28" />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
