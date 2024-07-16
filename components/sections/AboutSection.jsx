import React from "react"
import MemberCard from "../member-card/MemberCard"

const members = [
  {
    title: "Mr.",
    name: "Alex Johnson",
    profileImgUrl: "assets/testimonial-user-1.jpg",
    position: "Chief Executing Officer",
  },
  {
    title: "Er.",
    name: "Maria Garcia",
    profileImgUrl: "assets/testimonial-user-2.jpg",
    position: "Chief Executing Officer",
  },
  {
    title: "Er.",
    name: "Liam Brown",
    profileImgUrl: "assets/testimonial-user-3.jpg",
    position: "Chief Executing Officer",
  },
  {
    title: "Ms.",
    name: "Sophia Martinez",
    profileImgUrl: "assets/testimonial-user-4.jpg",
    position: "Chief Executing Officer",
  },
  {
    title: "Er.",
    name: "Olivia Wilson",
    profileImgUrl: "assets/testimonial-user-5.jpg",
    position: "Chief Executing Officer",
  },
  {
    title: "Ms.",
    name: "Emma Thompson",
    profileImgUrl: "assets/testimonial-user-6.jpg",
    position: "Chief Executing Officer",
  },
]

export default function AboutSection() {
  return (
    <div id="about" className="bg-radial">
      <div className="container">
        <div className="py-16 space-y-8">
          <div>
            <span className="tracking-widest text-sm">ABOUT US</span>
          </div>

          <div className="flex xl:flex-row flex-col-reverse gap-8">
            <div className="xl:w-1/2 space-y-4">
              <p className="font-bold text-xl">WHO ARE WE ?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa distinctio commodi sit possimus
                repellendus alias ipsam. Nesciunt id, fuga libero voluptas iure provident, quos et nobis dolorem, cumque
                praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam sapiente ipsa
                illo quidem consequuntur harum quae voluptatem excepturi cumque. Beatae recusandae sequi dolor sed, fuga
                eos eveniet impedit harum!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa distinctio commodi sit possimus
                repellendus alias ipsam. Nesciunt id, fuga libero voluptas iure provident, quos et nobis dolorem, cumque
                praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam sapiente ipsa
                illo quidem consequuntur harum quae voluptatem excepturi cumque. Beatae recusandae sequi dolor sed, fuga
                eos eveniet impedit harum!
              </p>
            </div>

            <div className="xl:w-1/2 space-y-4">
              <p className="font-bold text-xl">OUR TEAM</p>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
                {members.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
