import { NAVBAR_LINKS } from 'utils/urls'
import Link from 'next/link'

const NavbarPage = () => {
  return (
    <div className="flex items-center space-x-12 text-7 font-600 text-gray-900">
      {NAVBAR_LINKS.map((item) => (
        <Link href={item.url} key={item.name}>
          <a>{item.name}</a>
        </Link>
      ))}
    </div>
  )
}

export default NavbarPage
