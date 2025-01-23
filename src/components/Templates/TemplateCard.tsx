import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface TemplateCardProps {
  title: string
  description: string
  editor: string
  technologies: string[]
  likes: number
  isLiked?: boolean
  onLike?: () => void
  imageUrl?: string
}

export default function TemplateCard({
  title,
  description,
  editor,
  technologies,
  likes,
  isLiked = false,
  onLike,
  imageUrl = '/placeholder.png',
}: TemplateCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          <button
            onClick={onLike}
            className="flex items-center space-x-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            {isLiked ? (
              <HeartSolidIcon className="h-6 w-6 text-red-500" />
            ) : (
              <HeartIcon className="h-6 w-6" />
            )}
            <span>{likes}</span>
          </button>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Editor: {editor}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 