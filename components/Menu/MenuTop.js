import ExternalLink from './ExternalLink'
import LoginLink from './LoginLink'

const MenuTop = () => {
  return (
    <div
      className="w-full flex items-center justify-between"
      style={{ height: '40px' }}
    >
      <ExternalLink />
      <LoginLink />
    </div>
  )
}

export default MenuTop
