import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Toast({ message, type = 'success' }) {
    useEffect(() => {
        if (message) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: type,
                title: message,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    }, [message]);

    return null;
}