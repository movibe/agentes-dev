import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <div className="mt-1">
          <input
            ref={ref}
            className={`
              block w-full rounded-md border-gray-300 shadow-sm
              focus:border-primary focus:ring-primary sm:text-sm
              dark:bg-gray-800 dark:border-gray-700 dark:text-white
              ${error ? 'border-red-500' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error.message}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input 