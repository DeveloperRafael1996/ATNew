import { FOOTER_LINKS } from '../../../utils/urls'
import { CustomLink } from '../../../shared_components'

const Links = () => {
  return (
    <>
      <div className="w-1/3">
        <p className="text-8 font-600 pt-4">APUESTA TOTAL</p>
        <div className="">
          {FOOTER_LINKS.APUESTA_TOTAL_LINKS.map((link) => (
            <div className="w-full" key={link.name}>
              <CustomLink
                url={link.url}
                variant="primary"
                styles="w-full"
                name={link.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-8">
        <p className="text-8 font-600 py-4">PRODUCTOS</p>
        <div className="">
          {FOOTER_LINKS.PRODUCTS_LINKS.map((link) => (
            <div className="w-full" key={link.name}>
              <CustomLink
                url={link.url}
                variant="primary"
                styles="w-full"
                name={link.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-8">
        <p className="text-8 font-600 py-4">AYUDA</p>
        <div className="">
          {FOOTER_LINKS.HELP_LINKS.map((link) => (
            <div className="w-full" key={link.name}>
              <CustomLink
                url={link.url}
                variant="primary"
                styles="w-full"
                name={link.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Links
