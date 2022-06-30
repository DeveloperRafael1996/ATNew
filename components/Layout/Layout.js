import { useEffect } from 'react'
import { MenuTop, MenuPage } from '../Menu'
import PaymentMethods from './Footer/PaymentMethods'
import FooterLinks from './Footer/FooterLinks'

const Layout = ({ children }) => {
  useEffect(() => {
    document.title = 'ApuestaTotal'
  }, [])

  return (
    <>
      <div
        className="grid grid-cols-1"
        style={{
          margin: '0',
          gridTemplateRows: '80px 1fr 120px',
        }}
      >
        <div className="bg-gray-400 border-1 border-red-600 flex items-center justify-center">
          {/* <MenuTop /> */}
          {/* <MenuPage /> */}
          menu
        </div>
        <div>{children}</div>
        <footer className="w-full space-y-4">
          {/* <PaymentMethods /> */}
          {/* <div */}
          {/*  className="w-full bg-red-700 text-red-700" */}
          {/*  style={{ height: '32px' }} */}
          {/* > */}
          {/*  . */}
          {/* </div> */}
          {/* <div className="w-full pb-12"> */}
          {/*  <FooterLinks /> */}
          {/* </div> */}
        </footer>
      </div>
    </>
  )
}

export default Layout
