import Link from 'next/link'
import { useEffect, useState } from 'react'

const SharedLinks = (props) => {
  const [selectStyle, setSelectStyle] = useState('')

  useEffect(() => {
    const { variant } = props
    switch (variant) {
      case 'primary':
        setSelectStyle('text-7 text-gray-500 font-600')
        break
      case 'secondary':
        setSelectStyle('secondary')
        break
      case 'tertiary':
        setSelectStyle('tertiary')
        break
      default:
        setSelectStyle('text-7 text-gray-500 font-600')
        break
    }
  }, [props])

  return (
    <Link href={props.url}>
      <a className={`${selectStyle} ${props.styles} block`}>{props.name}</a>
    </Link>
  )
}

export default SharedLinks
