'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setUpProviders()
    }, [])

    return (
        <nav className=" flex-between w-full mb-16 pt-3 ">
            <Link href='/' className="flex flex-center gap-2 ">
                <Image src='/icon.png' width={40} height={40} alt="logo" className=" object-contain " />
                <p className=" logo_text ">Music World</p>
            </Link>
            {session?.user ? <div className=" flex flex-center  ">
                <Link href='/search' className=" mr-5 ">Search</Link>
                <button
                    type="button"
                    onClick={signOut} 
                    className='outline_btn'
                >
                    Sign Out
                </button>
                <Link href='/profile' className=" pl-5 ">
                    <Image src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' alt='profile' />
                </Link>
            </div> :
                <>
                    {providers &&
                        Object.values(providers).map((provider) => {
                            return <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)} className='black_bnt'
                            >
                                Sign In
                            </button>
                        })
                    }
                </>
            }
        </nav>
    )
}

export default Nav