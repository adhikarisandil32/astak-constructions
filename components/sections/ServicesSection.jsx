import React from "react"
import ServicesCard from "../services-card/ServicesCard"

const services = [
  {
    title: "Project Management",
    imgUrl: "/assets/icon-project-management.png",
    description: {
      overview: "Coordinate all aspects of a construction project, from inception to completion",
      responsibility: "Planning, scheduling, budgeting, and supervising the construction process",
    },
  },
  {
    title: "Design and Engineering",
    imgUrl: "/assets/icon-engineering-and-design.png",
    description: {
      overview: "Develop architectural and engineering designs",
      responsibility: "Provide detailed plans, specifications, and technical expertise",
    },
  },
  {
    title: "Feasibility Studies",
    imgUrl: "/assets/icon-feasibility.png",
    description: {
      overview: "Assess the viability of projects before initiation",
      responsibility: "Conduct site analysis, cost estimation, and risk assessment",
    },
  },
  {
    title: "Regulatory Compliance",
    imgUrl: "/assets/icon-regulatiory-compliance.png",
    description: {
      overview: "Ensure projects adhere to local, state, and federal regulations",
      responsibility: "Manage permits, zoning laws, and safety standards",
    },
  },
  {
    title: "Quality Control",
    imgUrl: "/assets/icon-quality-control.png",
    description: {
      overview: "Maintain high standards throughout the construction process",
      responsibility: "Perform inspections, material testing, and adherence to specifications",
    },
  },
  {
    title: "Cost Management",
    imgUrl: "/assets/icon-cost-management.png",
    description: {
      overview: "Oversee project budgets to avoid cost overruns",
      responsibility: "Monitor expenses, negotiate contracts, and manage finances",
    },
  },
  {
    title: "Environmental Impact",
    imgUrl: "/assets/icon-engineering-and-environment.png",
    description: {
      overview: "Incorporate eco-friendly practices and assess environmental impacts",
      responsibility: "Implement sustainable designs, manage waste, and ensure environmental compliance",
    },
  },
  {
    title: "Risk Management",
    imgUrl: "/assets/icon-risk-management.png",
    description: {
      overview: "Identify and mitigate potential project risks",
      responsibility: "Develop risk management plans and implement contingency strategies",
    },
  },
  {
    title: "Client Communication",
    imgUrl: "/assets/icon-client-communication.png",
    description: {
      overview: "Maintain effective communication with clients",
      responsibility: "Provide regular updates, manage expectations, and address concerns promptly",
    },
  },
]

export default function ServicesSection() {
  return (
    <div id="services" className="bg-radial">
      <div className="container">
        <div className="py-16 space-y-8">
          <div>
            <span className="tracking-widest text-sm">SERVICES WE OFFER</span>
          </div>

          <div className="w-[600px] font-semibold mx-auto text-center text-lg">
            We provide a comprehensive selection of expertly designed construction services to meet various project
            requirements and client goals. Some of our key services include:
          </div>

          <div className="grid grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServicesCard service={service} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
