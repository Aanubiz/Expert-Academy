/*-----------------------------------------------------------------------------------------------
   Page not found qui est un autre composants special react. j'ajoute just eun fichier minimal
------------------------------------------------------------------------------------------------*/
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h2 className="text-4xl font-bold text-gray-900">404 - Page introuvable</h2>
            <p className="mt-4 text-gray-600">Désolé, nous n'avons pas trouvé la page que vous cherchez.</p>
            <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Retourner à l'accueil </Link>
        </div>
    )
}