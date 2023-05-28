'use client'
import Link from "next/link"
import Image from "next/image"

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
        <Link href='/' className="flex flex-center gap-2 ">
            <Image src='/icon.png' width={40} height={40} alt="logo" className=" object-contain " />
            <p className=" logo_text ">Music World</p>
        </Link>
    </nav>
  )
}

export default Nav