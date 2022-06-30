import GameCard from '../GameCard/GameCard'

const listGames = [
  {
    id: 1,
    lore: 'Clasificación Qatar 2022',
    type: 'UEFA',
    title: 'UEFA CLASIFICACIÓN',
    description: 'Qatar 2022 / Fútbol',
    variant: 'primary',
    img: 'img',
  },
  {
    id: 2,
    lore: 'Clasificación Qatar 2022',
    type: 'CONMEBOL',
    title: 'CONMEBOL CLASIFICACIÓN',
    description: 'Qatar 2022 / Fútbol',
    variant: 'secondary',
    img: 'img',
  },
  {
    id: 3,
    lore: 'Clasificación Qatar 2022',
    type: 'CONCACAF',
    title: 'CONCACAF CLASIFICACIÓN',
    description: 'Qatar 2022 / Fútbol',
    variant: 'primary',
    img: 'img',
  },
  {
    id: 4,
    lore: 'Fútbol Americano',
    type: 'NFL',
    title: 'NFL',
    description: 'Fútbol americano',
    variant: 'secondary',
    img: 'img',
  },
  {
    id: 5,
    lore: 'The International',
    type: 'DOTA',
    title: 'DOTA 2',
    description: 'THE INTERNATIONAL',
    variant: 'primary',
    img: 'img',
  },
]

const Games = () => {
  return (
    <div className="pt-8 space-y-4" style={{ margin: '0 0.8rem' }}>
      <p className="text-gray-700 font-600 text-9">
        <span className="font-300">APUESTAS</span>{' '}
        <span className="text-gray-900">DEPORTIVAS</span>
      </p>
      {/* <div className="w-full flex flex-col flex-wrap items-center justify-between"> */}
      <div className="w-full grid grid-cols-2 gap-4">
        {listGames.map((game) => (
          <div className="w-full" key={game.id}>
            <GameCard
              lore={game.lore}
              type={game.type}
              title={game.title}
              description={game.description}
              variant={game.description}
              img={game.img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games
