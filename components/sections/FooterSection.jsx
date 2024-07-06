import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function FooterSection() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container">
        <div className="py-16 flex justify-between">
          <div>
            <div>Logo</div>
            <div>
              <p>Copyright © 2024. All Rights Reserved.</p>
            </div>
            <div>
              <p>
                Developed by{" "}
                <a href="https://sandil-adhikari.vercel.app/" target="_blank" className="group text-blue-400">
                  <span className="inline-block relative">
                    <span>
                      Sandil Adhikari <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>

                    <span className="absolute left-0 inline-block h-full w-0 group-hover:w-full transition-all duration-300 border-b-2 border-blue-400"></span>
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p>Follow Us On:</p>

            <p className="space-x-2">
              <a href="https://www.facebook.com/" target="_blank" className="group">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl group-hover:text-gray-400 transition-all duration-300"
                />
              </a>

              <a href="https://instagram.com/" target="_blank" className="group">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl group-hover:text-gray-400 transition-all duration-300"
                />
              </a>

              <a href="https://x.com/" target="_blank" className="group">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-2xl group-hover:text-gray-400 transition-all duration-300"
                />
              </a>

              <a href="https://www.linkedin.com/" target="_blank" className="group">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl group-hover:text-gray-400 transition-all duration-300"
                />
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <div>
              <p>Contact Us At:</p>
            </div>

            <div>
              <p className="space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="fa-fw" /> <span>astakconstructions@gmail.com</span>
              </p>

              <p className="space-x-2">
                <FontAwesomeIcon icon={faPhone} className="fa-fw" />
                <span>+977 9812345678 / +977 9842123456</span>
              </p>

              <p className="space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />{" "}
                <span>Pokhara, Kaski, Gandaki Province, Nepal</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
