import { Link } from "@inertiajs/react";

export default function Pagination({ links, from, to, total }) {

    if (!links || links.length <= 3) return null;

    return (
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Showing Text */}
            <div className="text-sm text-gray-400">
                Showing {from} to {to} of {total} results
            </div>

            {/* Pagination Links */}
            <div className="flex items-center space-x-1">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || ""}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-3 py-1 text-sm rounded-md transition
                            ${link.active
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"}
                            ${!link.url && "opacity-40 cursor-not-allowed"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}