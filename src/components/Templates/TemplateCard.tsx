import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface Technology {
  name: string
  color: string
}

interface TemplateCardProps {
  title: string
  description: string
  editor: string
  technologies: Technology[]
  likes: number
  isLiked?: boolean
  onLike?: () => void
}

export function TemplateCard({
  title,
  description,
  editor,
  technologies,
  likes,
  isLiked = false,
  onLike
}: TemplateCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      {/* Discount Badge - Pode ser adaptado para outras informações */}
      <div className="absolute top-4 left-4 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full">
        Novo
      </div>

      {/* Like Button */}
      <button
        onClick={onLike}
        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
      >
        {isLiked ? (
          <HeartSolidIcon className="w-5 h-5 text-red-500" />
        ) : (
          <HeartIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />
        )}
      </button>

      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Editor */}
        <div className="mb-4">
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
            Editor
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {editor}
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Tecnologias
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
                style={{ backgroundColor: tech.color + '15', color: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {likes}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                curtidas
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Ver detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 