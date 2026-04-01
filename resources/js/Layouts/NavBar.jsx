import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const menuItems = [
    {
        name: "Dashboard",
        route: "dashboard",
        icon: "📊",
    },
    {
        name: "Role & Permission",
        icon: "⚙️",
        children: [
            {
                name: "Permission",
                route: "permission.index",
            },
            {
                name: "Role",
                route: "role.index",
            },
        ],
    },
    {
        name: "Users",
        route: "user.index",
        icon: "📊",
    },
    {
        name: "Institute",
        route: "institute.index",
        icon: "📊",
    },
    {
        name: "Student",
        route: "student.index",
        icon: "📊",
    },
];

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(null);
    useEffect(() => {
        menuItems.forEach((item, index) => {
            if (item.children) {
                const isChildActive = item.children.some(child =>
                    route().current(child.route.replace('.index', '.*'))
                );

                if (isChildActive) {
                    setOpenMenu(index);
                }
            }
        });
    }, []);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <nav className="mt-6 px-4">
            <ul className="space-y-2">

                {menuItems.map((item, index) => {

                    const isActive = item.route
                        ? route().current(item.route)
                        : item.children?.some(child =>
                            route().current(child.route.replace('.index', '.*'))
                        );

                    return (
                        <li key={index} className="relative">

                            {/* Parent */}
                            {item.route ? (
                                <Link
                                    href={route(item.route)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                                    ${isActive
                                            ? 'bg-indigo-600/20 text-white'
                                            : 'hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    {item.name}
                                </Link>
                            ) : (
                                <button
                                    onClick={() => toggleMenu(index)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition
                                    ${isActive
                                            ? 'bg-indigo-600/20 text-white'
                                            : 'hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        {item.icon} {item.name}
                                    </span>

                                    <span className={`transition-transform ${openMenu === index ? 'rotate-180' : ''
                                        }`}>
                                        ⌄
                                    </span>
                                </button>
                            )}

                            {/* Dropdown */}
                            {item.children && openMenu === index && (
                                <ul className="ml-6 mt-2 space-y-1">

                                    {item.children.map((child, i) => {
                                        const isChildActive = route().current(child.route);

                                        return (
                                            <li key={i}>
                                                <Link
                                                    href={route(child.route)}
                                                    className={`block px-4 py-2 rounded-lg text-sm transition
                                                    ${isChildActive
                                                            ? 'bg-indigo-500 text-white'
                                                            : 'hover:bg-white/5'
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            )}

                        </li>
                    );
                })}

            </ul>
        </nav>
    );
}