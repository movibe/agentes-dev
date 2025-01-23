import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Sobre
            </h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
              Sistema para cadastro de templates de projetos, permitindo que os usuários selecionem diferentes editores de código e tecnologias.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Links Úteis
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/templates" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/editores" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Editores
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://github.com/seu-usuario/agentes-dev" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Agentes Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 