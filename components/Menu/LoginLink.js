import Link from 'next/link'
import { BiUserCircle } from 'react-icons/bi'

const LoginLink = () => {
  return (
    <div className="flex items-center space-x-4 text-6 font-600 text-gray-900">
      <div>
        <BiUserCircle size="26px" color="#757575" />
      </div>
      <Link href="/">
        <a>INGRESA</a>
      </Link>
      <span className="text-gray-600">/</span>
      <Link href="/">
        <a>REGISTRATE</a>
      </Link>
      <Link href="/">
        <a className="px-14 py-2 bg-amber-400 rounded-8">RECARGA</a>
      </Link>
    </div>
  )
}

export default LoginLink
