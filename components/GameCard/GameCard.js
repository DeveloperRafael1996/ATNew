const GameCard = ({ title, description, img, type, lore, variant }) => {
  return (
    <div
      className="flex flex-col space-y-4 w-full"
      // style={{ width: '210px', height: '260px' }}
      style={{ height: '260px' }}
    >
      <div className="h-3/4 bg-gray-600 rounded-8 flex items-center justify-center">
        {img}
      </div>
      <div className="h-1/4">
        <p className="text-9 font-600">{lore}</p>
        <p className="text-7 font-400">{description}</p>
      </div>
    </div>
  )
}

export default GameCard
