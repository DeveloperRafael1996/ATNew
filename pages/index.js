import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useEffect } from 'react'
import useGeolocation from 'hooks/useGeolocation'
import { Banner, BoardBanner, Games, Lore } from 'components/HomeLayout'
import { Layout } from 'components/Layout'

export default function Home() {
  const { getDepartments, departments } = useGeolocation()

  useEffect(() => {
    getDepartments().then(
      (res) => {
        console.log('Get Departments success.')
      },
      (err) => {
        console.warn({ message: 'Get Departments failed.', error: err })
      }
    )
  }, [])

  useEffect(() => {
    console.log('useGeolocation', departments)
  }, [departments])

  return (
    <div className={styles.container}>
      <Head>
        <title>ApuestaTotal</title>
        <meta name="description" content="ApuestaTotal description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="mb-2 w-full">
        <Layout>
          <Banner />
          <Games />
          <BoardBanner />
          <Lore />
        </Layout>
      </div>
    </div>
  )
}
