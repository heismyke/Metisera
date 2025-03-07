import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'

type NavLinks = {
  title: string
  href: string
  button?: React.ReactNode
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const Links: NavLinks[] = [
    { title: 'About us', href: '#About' },
    { title: 'Metisera FAQs', href: '#Metisera' },
    { title: 'Terms and Conditions', href: '#Terms' },
    { title: 'Contacts', href: '#Contacts' },
    {
      title: 'Sign Up',
      href: '#SignUp',
      button: (
        <button
          className="relative bg-gradient-to-b from-[#c86400] to-[#e47403] text-white shadow-lg p-2 rounded-lg
                   before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/40 before:via-transparent before:to-transparent
                   before:rounded-lg before:pointer-events-none hover:shadow-xl"
        >
          Get Started
        </button>
      ),
    },
  ]

  return (
    <nav className="w-full bg-white border border-[#C0E8EB] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <h1 className="text-[#EA7929] text-5xl font-bold">
            Meti<span className="text-[#2F505A]">sera</span>
          </h1>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {Links.map((link, index) => (
            <div key={index} className="flex items-center">
              {!link.button ? (
                <a href={link.href} className="hover:text-[#EA7929] transition-colors">
                  {link.title}
                </a>
              ) : (
                link.button
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#2F505A]">
            <CiMenuFries />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {Links.map((link, index) => (
              <li key={index}>
                {!link.button ? (
                  <a href={link.href} className="block py-2 hover:text-[#EA7929]">
                    {link.title}
                  </a>
                ) : (
                  <div className="py-2">{link.button}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
