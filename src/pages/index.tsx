import { useState } from 'react'
import { FilterSidebar } from '../components/Sidebar/FilterSidebar'
import { TemplateCard } from '../components/Templates/TemplateCard'
import { ThemeToggle } from '../components/ThemeToggle'
import { z } from 'zod'

const FilterSchema = z.object({
  technologies: z.array(z.string()),
  search: z.string(),
})

type FilterType = z.infer<typeof FilterSchema>

const exampleTemplates = [
  {
    title: 'Next.js + Tailwind',
    description: 'Template moderno para aplicações web com Next.js e Tailwind CSS',
    editor: 'VS Code',
    technologies: [
      { name: 'Next.js', color: '#0070f3' },
      { name: 'Tailwind', color: '#06b6d4' },
      { name: 'TypeScript', color: '#3178c6' },
    ],
    likes: 42,
    isLiked: false,
  },
  {
    title: 'React Native Expo',
    description: 'Template para desenvolvimento mobile com React Native e Expo',
    editor: 'VS Code',
    technologies: [
      { name: 'React Native', color: '#61dafb' },
      { name: 'Expo', color: '#000020' },
      { name: 'TypeScript', color: '#3178c6' },
    ],
    likes: 35,
    isLiked: true,
  },
  {
    title: 'Node.js API',
    description: 'Template para APIs RESTful com Node.js e Express',
    editor: 'WebStorm',
    technologies: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#000000' },
      { name: 'TypeScript', color: '#3178c6' },
    ],
    likes: 28,
    isLiked: false,
  },
]

export default function Home() {
  const [filters, setFilters] = useState<FilterType>({
    technologies: [],
    search: '',
  })

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Agentes.dev</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Blog
              </a>
              <a href="/rules" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Rules
              </a>
              <a href="/cheat-sheet" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Cheat Sheet
              </a>
              <ThemeToggle />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 mb-8">
          <span className="text-sm font-medium text-green-800 dark:text-green-200">
            Built for and by Cursor enthusiasts
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-600">.agentesdev</span> for your framework
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          and language for Cursor AI
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12">
          Agentes.dev para customizar comportamento da IA, agilizar o desenvolvimento e adaptar
          geração de código, sugestões e consultas para seu framework e linguagem.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Browse Rules
          </button>
          <button className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
            Submit Rule
          </button>
        </div>
      </div>

      {/* Top AdSense Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
          AdSense Banner - Horizontal
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar onFilterChange={handleFilterChange} />
          
          {/* Content */}
          <main className="flex-1">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Most Liked
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {filters.technologies.length > 0
                    ? `Filtros ativos: ${filters.technologies.join(', ')}`
                    : 'Nenhum filtro ativo'}
                </p>
              </div>
            </div>

            {/* Right Side AdSense */}
            <div className="float-right ml-6 mb-6">
              <div className="w-64 h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                AdSense Banner - Vertical
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {exampleTemplates.map((template) => (
                <TemplateCard
                  key={template.title}
                  {...template}
                  onLike={() => console.log(`Like template: ${template.title}`)}
                />
              ))}
            </div>

            {/* Bottom AdSense Banner */}
            <div className="mt-12">
              <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                AdSense Banner - Horizontal
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 