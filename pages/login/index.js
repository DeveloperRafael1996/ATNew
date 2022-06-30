import LoginHead from 'components/Login/LoginHead'
import LoginForm from 'components/Login/LoginForm'
import LoginCreateAccount from 'components/Login/LoginCreateAccount'
import Head from 'next/head'

const Index = () => {
  return (
    <div
      className="mx-auto text-center grid grid-cols-1"
      style={{ margin: '4rem 2.5rem 0', gridTemplateRows: '1fr' }}
    >
      <Head>
        <title>ApuestaTotal - Login</title>
        <meta name="description" content="ApuestaTotal description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="mb-2 space-y-16">
        <LoginHead />
        <LoginForm />
        <LoginCreateAccount />
      </div>
    </div>
  )
}

export default Index
