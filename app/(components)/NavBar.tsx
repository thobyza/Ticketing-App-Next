import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full bg-surface-100 text-white px-[128px] py-1">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="text-[15px]">Home</span>
        </Link>
        <Link href="/TicketPage/New">
          <span className="text-[15px]">Tickets</span>
        </Link>
      </div>
      <div>
        <p className="">mike@mail.com</p>
      </div>
    </nav>
  )
}

export default NavBar
