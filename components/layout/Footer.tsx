import Link from 'next/link';
import { Facebook, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Produits: [
      { name: 'Online courses', href: '/courses' },
      { name: 'Software', href: '/software' },
      { name: 'API Services', href: '/services' },
      { name: 'Pricing', href: '/pricing' },
    ],
    Ressources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'FAQ', href: '/faq' },
    ],
    Société: [
      { name: 'About', href: '/about' },
      { name: 'Carreers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Légal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Conditions', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Mentions légales', href: '/legal' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              Expert<span className="text-blue-400"> Academy</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-400">
              Votre partenaire pour l'apprentissage du développement et les solutions logicielles professionnelles.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Expert Academy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}