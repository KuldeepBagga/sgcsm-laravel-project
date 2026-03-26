export default function DangerButton({
    className = '',
    size = 'md', // sm | md | lg
    disabled,
    children,
    ...props
}) {
    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-3 text-base',
    };

    return (
        <button
            {...props}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center rounded-md border border-transparent 
                bg-red-600 text-white font-semibold uppercase tracking-widest 
                transition duration-150 ease-in-out
                hover:bg-red-500 active:bg-red-700
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                dark:focus:ring-offset-gray-800
                ${sizes[size]}
                ${disabled ? 'opacity-25 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {children}
        </button>
    );
}