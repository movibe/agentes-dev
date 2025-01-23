import Layout from '@/components/Layout/Layout'
import TemplateCard from '@/components/Templates/TemplateCard'

const featuredTemplates = [
  {
    title: 'Next.js + Tailwind',
    description: 'Template moderno para aplicações web com Next.js e Tailwind CSS',
    editor: 'VS Code',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    likes: 42,
    imageUrl: '/templates/nextjs.png'
  },
  {
    title: 'React Native Expo',
    description: 'Template para desenvolvimento mobile com React Native e Expo',
    editor: 'VS Code',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    likes: 35,
    imageUrl: '/templates/react-native.png'
  },
  {
    title: 'Node.js API',
    description: 'Template para APIs RESTful com Node.js e Express',
    editor: 'VS Code',
    technologies: ['Node.js', 'Express', 'TypeScript'],
    likes: 28,
    imageUrl: '/templates/nodejs.png'
  }
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Crie seus projetos com</span>
              <span className="block text-primary">Templates Personalizados</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Selecione diferentes editores de código e tecnologias para criar seus agentes personalizados.
              Comece seus projetos mais rápido com templates pré-configurados.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/templates"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                >
                  Ver Templates
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/editores"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Explorar Editores
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Templates em Destaque
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Explore nossos templates mais populares e comece seu projeto agora mesmo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTemplates.map((template) => (
              <TemplateCard
                key={template.title}
                {...template}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 