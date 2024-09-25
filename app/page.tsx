import React from 'react'
import TicketCard from './(components)/TicketCard'

const Dashboard = () => {
  return (
    <div className="custom-padding my-1 text-white ">
      <h3 className="py-3 font-bold text-[19px]">Dashboard</h3>
      <section className="grid grid-cols-3 gap-4">
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
      </section>
    </div>
  )
}

export default Dashboard
