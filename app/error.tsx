/*-----------------------------------  ---------------------------------------------
   Page d'erreur qui est un composant react special. Ceci est juste le code minimal
---------------------------------------  -------------------------------------------*/

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Zut ! Quelque chose s'est mal passé.</h2>
      <button
        onClick={() => reset()} // Permet de tenter de recharger la page
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Réessayer
      </button>
    </div>
  );
}