import React from "react"

export default function Banner() {
  return (
    <div className="bg-blue-950 text-white">
      <div className="container">
        <div className="py-16 grid xl:grid-cols-4 grid-cols-2 gap-y-8 xl:justify-between xl:items-center">
          <div className="text-center space-y-2">
            <p>
              <span className="text-4xl font-bold">5+</span>
            </p>
            <p className="text-xs">Years in the industry</p>
          </div>

          <div className="text-center space-y-2">
            <p>
              <span className="text-4xl font-bold">90%+</span>
            </p>
            <p className="text-xs">Customer Satisfaction</p>
          </div>

          <div className="text-center space-y-2">
            <p>
              <span className="text-4xl font-bold">20+</span>
            </p>
            <p className="text-xs">Projects Completed</p>
          </div>

          <div className="text-center space-y-2">
            <p>
              <span className="text-4xl font-bold">12+</span>
            </p>
            <p className="text-xs">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  )
}
