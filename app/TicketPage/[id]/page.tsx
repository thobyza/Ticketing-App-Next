import React from 'react'

interface ParamsProps {
  // params: number;
  params: {
    id: number; // assuming 'id' is a dynamic route parameter of type number
  };
}

const TicketPage = ({ params }: ParamsProps) => {
  return (
    <section className="custom-padding text-white  my-5">
      TicketPage {params.id}
    </section>
  )
}

export default TicketPage
