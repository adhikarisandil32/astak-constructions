import React from "react"

export default function MemberCard({ member }) {
  return (
    <div className="flex p-4 gap-4 border hover:shadow-lg transition-all duration-300 items-center rounded-md cursor-pointer">
      <div className="relative w-20 h-20 overflow-hidden rounded-full">
        <img
          src={member.profileImgUrl}
          alt="about-img"
          className="absolute left-0 top-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="space-y-1">
        <p className="font-bold">
          {member.title} {member.name}
        </p>
        <p className="text-sm text-gray-600">{member.position}</p>
      </div>
    </div>
  )
}
