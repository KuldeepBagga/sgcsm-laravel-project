export default function SelectInput({
    className = '',
    options = [],
    placeholder = '-- Select --',
    ...props
}) {
    return (
        <select
            {...props}
            className={
                'w-full rounded-md border-gray-300 text-gray-100 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 ' +
                className
            }
        >
            <option value="">{placeholder}</option>

            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}