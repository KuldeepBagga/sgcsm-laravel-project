import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NavBar() {
    const { auth } = usePage().props;
    const permissions = auth?.user?.permissions || [];
    const can = (permission) => {
        if (!permission) return true;
        return permissions.includes(permission);
    };

    const menuItems = [
        {
            name: "Dashboard",
            route: "admin.dashboard",
            icon: "📊",
        },
        {
            name: "Users & Roles",
            icon: "⚙️",
            children: [
                {
                    name: "Roles",
                    route: "admin.role.index",
                    permission: "role.view",
                },
                {
                    name: "Users",
                    route: "admin.user.index",
                    permission: "user.view",
                },
            ],
        },
        {
            name: "Course",
            route: "admin.course.index",
            icon: "📚",
            permission: "course.view",
        },
        {
            name: "Institute",
            route: "admin.institute.index",
            icon: "🏫",
            permission: "institute.view",
        },
        {
            name: "Student",
            route: "admin.student.index",
            icon: "🎓",
            permission: "student.view",
        },
        {
            name: "Franchise",
            route: "admin.franchise.index",
            icon: "🏢",
            permission: "franchise.view",
        },
        {
            name: "Center Affiliation",
            route: "admin.center_affiliation.index",
            icon: "📄",
            permission: "center_affiliation.view",
        },
        {
            name: "Our Team",
            route: "admin.ourteam.index",
            icon: "👥",
            permission: "ourteam.view",
        },
        {
            name: "Payment Record",
            route: "admin.payment_record.index",
            icon: "💳",
            permission: "payment_record.view",
        },
        {
            name: "Certificate",
            route: "admin.certificate.index",
            icon: "📜",
            permission: "certificate.view",
        },
        {
            name: "Testimonial",
            route: "admin.testimonial.index",
            icon: "📜",
            permission: "testimonial.view",
        },
        {
            name: "Result",
            route: "admin.result_details.index",
            icon: "📜",
            permission: "result_details.view",
        },
        {
            name: "Content",
            icon: "📜",
            children: [
                {
                    name: "Gallery",
                    route: "admin.banner.index",
                },
                {
                    name: "Notice",
                    route: "admin.notice.index",
                },
                {
                    name: "Top Institute",
                    route: "admin.top_institute.index",
                }
            ]
        }
    ];

    const filteredMenuItems = menuItems
        .map((item) => {
            if (item.children) {
                const children = item.children.filter((child) =>
                    can(child.permission)
                );

                return children.length
                    ? { ...item, children }
                    : null;
            }

            return can(item.permission) ? item : null;
        })
        .filter(Boolean);

    const [openMenu, setOpenMenu] = useState(null);

    useEffect(() => {
        filteredMenuItems.forEach((item, index) => {
            if (item.children) {
                const isChildActive = item.children.some((child) =>
                    route().current(
                        child.route.replace(".index", ".*")
                    )
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
                {filteredMenuItems.map((item, index) => {
                    const isActive = item.route
                        ? route().current(
                            item.route.replace(".index", ".*")
                        )
                        : item.children?.some((child) =>
                            route().current(
                                child.route.replace(
                                    ".index",
                                    ".*"
                                )
                            )
                        );

                    return (
                        <li key={index} className="relative">
                            {item.route ? (
                                <Link
                                    href={route(item.route)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${isActive
                                        ? "bg-indigo-600/20 text-white"
                                        : "hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ) : (
                                <>
                                    <button
                                        onClick={() =>
                                            toggleMenu(index)
                                        }
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${isActive
                                            ? "bg-indigo-600/20 text-white"
                                            : "hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </span>

                                        <span
                                            className={`transition-transform ${openMenu === index
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        >
                                            ⌄
                                        </span>
                                    </button>

                                    {openMenu === index && (
                                        <ul className="ml-6 mt-2 space-y-1">
                                            {item.children.map(
                                                (child, i) => {
                                                    const isChildActive =
                                                        route().current(
                                                            child.route.replace(
                                                                ".index",
                                                                ".*"
                                                            )
                                                        );

                                                    return (
                                                        <li key={i}>
                                                            <Link
                                                                href={route(
                                                                    child.route
                                                                )}
                                                                className={`block px-4 py-2 rounded-lg text-sm transition ${isChildActive
                                                                    ? "bg-indigo-500 text-white"
                                                                    : "hover:bg-white/5"
                                                                    }`}
                                                            >
                                                                {
                                                                    child.name
                                                                }
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}