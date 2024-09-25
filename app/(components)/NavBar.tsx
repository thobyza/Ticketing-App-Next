import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-surface-600 border border-border-custom text-white custom-padding py-2 ">
      <div className="flex items-center gap-6">
        <Link href="/">
          <span className="text-[13px]">Home</span>
        </Link> 
        <Link href="/TicketPage/New">
          <span className="text-[13px]">Tickets</span>
        </Link>
      </div>
      <div>
        <p className="text-[13px]">mike@mail.com</p>
      </div>
    </nav>
  )
}

export default NavBar
