import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';

import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import NavBar from './NavBar';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex">

                {/* ===== LEFT SIDEBAR ===== */}
                <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300 border-r border-slate-700">

                    <div className="p-6 flex items-center gap-3">
                        <Link href="/">
                            <ApplicationLogo className="h-10 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </Link>
                    </div>

                    <NavBar />

                </aside>

                {/* ===== RIGHT CONTENT AREA ===== */}
                <div className="flex-1 flex flex-col">



                    {header && (
                        <header className="bg-white shadow dark:bg-gray-800">
                            <div className="px-6 py-4 flex justify-between items-center">

                                {/* Left Side (Page Title) */}
                                <div>
                                    {header}
                                </div>

                                {/* Right Side (User Dropdown) */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none transition"
                                        >
                                            {user.name}

                                            <svg
                                                className="ml-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content align="right" width="48">
                                        <Dropdown.Link href={route('profile.edit')}>
                                            Profile
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

                            </div>
                        </header>
                    )}

                    {/* ===== MAIN CONTENT ===== */}
                    <main className="p-6 flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
