import React from 'react';

// Types pour nos services
type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  type: 'course' | 'api';
};

// Données fictives (Mock data)
const services: Service[] = [
  {
    id: '1',
    title: 'Masterclass Next.js 15',
    description: 'Apprenez à bâtir des applications SaaS modernes de A à Z.',
    price: '49.99 $',
    type: 'course'
  },
  {
    id: '2',
    title: 'API Météo Premium',
    description: 'Accès illimité à nos données météo haute précision.',
    price: '19.99 $ / mois',
    type: 'api'
  },
  {
    id: '3',
    title: 'Formation Python Débutant',
    description: 'Les bases de la programmation avec le langage le plus populaire.',
    price: '29.99 $',
    type: 'course'
  }
];

export default function TechStore() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="py-16 px-4 text-center bg-white">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl">
          Expert <span className="text-blue-600">Academy</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Cours de programmation et accès API premium pour développeurs ambitieux.
        </p>
      </header>

      {/* Grille de produits */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    service.type === 'course' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {service.type === 'course' ? 'Cours' : 'Abonnement API'}
                  </span>
                  <span className="text-lg font-bold text-slate-900">{service.price}</span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
                <p className="text-slate-600 mb-6 text-sm line-clamp-2">
                  {service.description}
                </p>

                <button className="w-full bg-slate-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                  Acheter maintenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
