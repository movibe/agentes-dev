import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentes Dev - Templates de Projetos</title>
        <meta name="description" content="Sistema para cadastro de templates de projetos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Bem-vindo ao Agentes Dev
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Selecione diferentes editores de código e tecnologias para criar seus agentes personalizados.
          </p>
        </div>
      </main>
    </>
  )
} 