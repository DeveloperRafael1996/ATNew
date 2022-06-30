import Link from 'next/link'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai'
import Image from 'next/image'
import { BsBook } from 'react-icons/bs'

const Captions = () => {
  return (
    <div className="w-full space-y-12">
      <div className="w-full flex items-center justify-center">
        <div className="w-1/3 flex justify-center">
          <div className="bg-gray-800 rounded-8 text-white p-4 max-w-max">
            <span className="text-4xl font-300">18</span>
            <span className="text-xl font-400">+</span>
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-center">
          <p className="mx-auto text-7 font-600 text-gray-700 pb-8">SÍGUENOS</p>
          <div className="w-full flex items-center justify-center space-x-12">
            <Link href="/">
              <a>
                <AiOutlineFacebook size="30px" color="#757575" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiOutlineTwitter size="30px" color="#757575" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiOutlineInstagram size="30px" color="#757575" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiOutlineYoutube size="30px" color="#757575" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-1/3 flex justify-center">
          <p>imagen</p>
        </div>
        <div className="w-2/3 flex flex-col items-center">
          <p className="mx-auto text-7 font-600 text-gray-700 pb-8">
            LIBRO DE RECLAMACIONES
          </p>
          <div>
            <BsBook size="30px" color="#757575" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Captions
