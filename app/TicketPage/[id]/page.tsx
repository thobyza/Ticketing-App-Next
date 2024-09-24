import React from 'react'

interface ParamsProps {
  // params: number;
  params: {
    id: number; // assuming 'id' is a dynamic route parameter of type number
  };
}

const TicketPage = ({ params }: ParamsProps) => {
  return (
    <div>
      TicketPage {params.id}
    </div>
  )
}

export default TicketPage
