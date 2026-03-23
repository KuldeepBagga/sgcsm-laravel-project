import React from 'react'
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

function NavBar() {
    return (
        <nav className="mt-6 px-4">
            <ul className="space-y-2">

                <li
                    className={`relative rounded-xl transition-all duration-300 ${route().current('dashboard')
                        ? 'bg-indigo-600/20 text-white'
                        : 'hover:bg-white/5 hover:text-white'
                        }`}
                >
                    {route().current('dashboard') && (
                        <span className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-500 rounded-r-full"></span>
                    )}

                    <Link
                        href={route('dashboard')}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium"
                    >
                        📊 Dashboard
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar