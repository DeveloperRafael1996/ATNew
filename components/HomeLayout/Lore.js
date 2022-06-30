import { SharedButton } from '../../shared_components'

const Lore = () => {
  return (
    <div className="pt-8 space-y-12" style={{ margin: '0 0.8rem' }}>
      <h2 className="text-center text-28">
        <span className="text-red-700">apuesta</span>total
      </h2>
      <p className="text-center text-16">es entretenimiento</p>
      <p className="text-12 font-400 leading-relaxed">
        <span className="block text-gray-700 font-700">
          Apuesta Total ¡Para ganar, hay que creer!
        </span>
        Juega y gana mientras disfrutas de tus deportes favoritos. Todas las
        ligas y eventos deportivos más importantes del mundo, los mejores
        mercados de apuestas y ofertas de cuotas, apuestas prematch y en vivo,
        juegos virtuales, casino online y en vivo, y mucho más.
      </p>
      <div className="w-full flex items-center justify-center">
        <SharedButton
          text="Conocemos más"
          color="primary"
          variant="outlined"
          full={false}
        />
      </div>
    </div>
  )
}

export default Lore
