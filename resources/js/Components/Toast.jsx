import { useEffect, useState } from "react";

export default function Toast({ message, type = "success" }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!visible) return null;

    return (
        <div className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white transition-all
            ${type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {message}
        </div>
    );
}