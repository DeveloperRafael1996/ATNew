import { SharedButton } from '../../shared_components'

const BoardBanner = () => {
  return (
    <div
      className="pt-8 space-y-12 rounded-8 bg-gray-600 flex flex-col justify-center"
      style={{ margin: '0 0.8rem', height: '250px' }}
    >
      <p className="text-center h-1/2">board banner total</p>
      <div className="ml-8 h-1/2 flex items-end pb-12">
        <div>
          <SharedButton text="Ingresa aquí" variant="outlined" />
        </div>
      </div>
    </div>
  )
}

export default BoardBanner
