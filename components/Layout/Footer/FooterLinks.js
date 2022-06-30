import Links from './Links'
import Captions from './Captions'

const FooterLinks = () => {
  return (
    <>
      <div className="flex mt-8">
        <div className="w-3/5 flex divide-x-1 divide-gray-600">
          <Links />
        </div>
        <div className="w-2/5">
          <Captions />
        </div>
      </div>
    </>
  )
}

export default FooterLinks
