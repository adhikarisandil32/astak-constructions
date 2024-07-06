import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "../modal/Modal"
import { AnimatePresence } from "framer-motion"

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className="group rounded-lg border border-gray-600/25 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.mainImg}
            alt="project-image"
            className="absolute left-0 top-0 h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-300"
          />
        </div>

        <div className="p-4 text-center space-y-2">
          <p className="font-bold">{project.title}</p>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>

      {ReactDOM.createPortal(
        <AnimatePresence>
          {showModal && <Modal imagesUrl={project.images} setShowModal={setShowModal} />}
        </AnimatePresence>,
        document.getElementById("portal")
      )}
    </>
  )
}
