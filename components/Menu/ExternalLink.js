import Link from 'next/link'
import { BsTelegram } from 'react-icons/bs'
import { EXTERNAL_LINKS } from 'utils/urls'

const ExternalLink = () => {
  return (
    <div className="flex items-center space-x-8 text-6 text-gray-500 font-600">
      {EXTERNAL_LINKS.map((link) => (
        <Link href={link.url} key={link.name}>
          <a>{link.name}</a>
        </Link>
      ))}
      <Link href="/">
        <a>
          <BsTelegram size="20px" color="#06B6D4" />
        </a>
      </Link>
    </div>
  )
}

export default ExternalLink
