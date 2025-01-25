import { useState } from 'react'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { z } from 'zod'

const FilterSchema = z.object({
  technologies: z.array(z.string()),
  search: z.string(),
})

type FilterType = z.infer<typeof FilterSchema>

interface FilterSidebarProps {
  onFilterChange: (filters: FilterType) => void
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterType>({
    technologies: [],
    search: '',
  })

  const technologies = [
    { name: 'NextJS', count: 3 },
    { name: 'React', count: 1 },
    { name: 'React Native', count: 1 },
    { name: 'Expo', count: 1 },
    { name: 'Laravel', count: 1 },
    { name: 'Vue', count: 3 },
    { name: 'Angular', count: 1 },
    { name: 'Flutter', count: 2 },
    { name: 'Django', count: 1 },
    { name: 'AutoHotkey', count: 1 },
    { name: 'AutoHotkey V2', count: 1 },
    { name: 'NuxtJS', count: 2 },
    { name: 'C++', count: 1 },
    { name: 'DearImgui', count: 1 },
    { name: 'Functional', count: 1 },
    { name: 'TypeScript', count: 5 },
  ]

  const handleTechnologyChange = (tech: string) => {
    const newTechnologies = filters.technologies.includes(tech)
      ? filters.technologies.filter(t => t !== tech)
      : [...filters.technologies, tech]

    const newFilters = { ...filters, technologies: newTechnologies }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSearchChange = (search: string) => {
    const newFilters = { ...filters, search }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    const newFilters: FilterType = {
      technologies: [],
      search: '',
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800">
      <div className="p-4">
        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        {/* Technologies */}
        <div className="space-y-1">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => handleTechnologyChange(tech.name)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                filters.technologies.includes(tech.name)
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <span>{tech.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                filters.technologies.includes(tech.name)
                  ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {tech.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reset Button */}
        {(filters.technologies.length > 0 || filters.search) && (
          <button
            onClick={resetFilters}
            className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
          >
            <XMarkIcon className="w-4 h-4 mr-2" />
            Limpar filtros
          </button>
        )}

        {/* AdSense Banner */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
            AdSense Banner
          </div>
        </div>
      </div>
    </aside>
  )
} 