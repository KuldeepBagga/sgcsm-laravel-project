import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import Swal from "sweetalert2";
import TextInput from "@/Components/TextInput";
import { useEffect } from "react";
import { QrCode } from "lucide-react";

function List() {
    const { flash, student, auth } = usePage().props;

    const { data, setData, processing } = useForm({
        name: '',
        father_name: '',
        registration_no: '',
        date_of_birth: '',
        course: '',
        scan: '',
        center_code: '',
        certificate_issued: '',
        paid: '',
        certificate_no: ''
    });

    useEffect(() => {
        const hasFilters = Object.values(data).some(value => value);
        if (!hasFilters) return;

        const timeout = setTimeout(() => {
            router.get(route('admin.student.index'), {
                name: data.name,
                father_name: data.father_name,
                registration_no: data.registration_no,
                date_of_birth: data.date_of_birth,
                course: data.course,
                scan: data.scan,
                center_code: data.center_code,
                certificate_issued: data.certificate_issued,
                paid: data.paid,
                certificate_no: data.certificate_no
            }, {
                preserveState: true,
                replace: true
            });
        }, 1000);
        return () => clearTimeout(timeout);
    }, [data]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6366f1",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.student.destroy", id));
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Student
                </h2>
            }
        >
            <Head title="Student" />
            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Student List
                            </h2>
                            {auth.user.permissions.includes(
                                "student.create",
                            ) && (
                                    <Link href={route("admin.student.create")}>
                                        <PrimaryButton>Create</PrimaryButton>
                                    </Link>
                                )}
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                                    <tr>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Father Name
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Registration Id
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Date of Birth
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Course
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Scan
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Code
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Certificate Issued
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Paid
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Certificate No
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            QR Code
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="name"
                                                type="text"
                                                value={data.name}
                                                className="w-full"
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="father_name"
                                                type="text"
                                                value={data.father_name}
                                                className="w-full"
                                                onChange={(e) => setData('father_name', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="registration_no"
                                                type="text"
                                                value={data.registration_no}
                                                className="w-full"
                                                onChange={(e) => setData('registration_no', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="date_of_birth"
                                                type="date"
                                                value={data.date_of_birth}
                                                className="w-full"
                                                onChange={(e) => setData('date_of_birth', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.course}
                                                onChange={(e) => setData('course', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">SELECT COURSE</option>
                                                {[...new Set(student?.data.map(c => c.course))].map((course, i) => (
                                                    <option key={i} value={course.course}>
                                                        {course.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.course}
                                                onChange={(e) => setData('course', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">SELECT COURSE</option>
                                                {[...new Set(student?.data.map(c => c.scan))].map((scan, i) => (
                                                    <option key={i} value={scan}>
                                                        {scan}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="center_code"
                                                type="text"
                                                value={data.center_code}
                                                className="w-full"
                                                onChange={(e) => setData('center_code', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.course}
                                                onChange={(e) => setData('course', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">CERTIFCATE ISSUED..</option>
                                                {[...new Set(student?.data.map(c => c.certificate_issued))].map((certificate_issued, i) => (
                                                    <option key={i} value={certificate_issued}>
                                                        {certificate_issued}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.course}
                                                onChange={(e) => setData('course', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">SELECT PAID</option>
                                                {[...new Set(student?.data.map(c => c.paid))].map((paid, i) => (
                                                    <option key={i} value={paid}>
                                                        {paid}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                name="certificate_no"
                                                type="text"
                                                value={data.certificate_no}
                                                className="w-full"
                                                onChange={(e) => setData('certificate_no', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                                    {student?.data?.length > 0 ? (
                                        student.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.name}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.relation} -{" "}
                                                    {item.father_name}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.registration_no}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.date_of_birth}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.course.name}
                                                </td>

                                                <td className="px-2 py-4 text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-1 py-1 text-white rounded-md text-xs ${item.scan ===
                                                            "SCANNED"
                                                            ? "bg-green-900"
                                                            : "bg-red-900"
                                                            }`}
                                                    >
                                                        {item.scan}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.center_code}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-md text-white text-xs ${item.certificate_issued ===
                                                            "ISSUED"
                                                            ? "bg-green-900"
                                                            : "bg-red-900"
                                                            }`}
                                                    >
                                                        {
                                                            item.certificate_issued
                                                        }
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-md text-white text-xs ${item.paid === "PAID"
                                                            ? "bg-green-900"
                                                            : "bg-red-900"
                                                            }`}
                                                    >
                                                        {item.paid}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.certificate_no}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.qr_code ?
                                                        <QrCode
                                                            className="w-10 h-10 text-green-500 cursor-pointer hover:text-green-700"
                                                            onClick={() => {
                                                                window.open(`/storage/${item.qr_code}`, '_blank', 'noopener,noreferrer');
                                                            }}
                                                        />
                                                        :
                                                        <Link href={route('admin.genereate.qr_code', item.id)}>
                                                            <QrCode className="w-10 h-10 cursor-pointer hover:text-gray-400" />
                                                        </Link>
                                                    }
                                                </td>

                                                <td className="px-2 py-2 text-right space-x-2">
                                                    <div className="flex justify-end gap-2">
                                                        {auth.user.permissions.includes(
                                                            "student.update",
                                                        ) && (
                                                                <Link
                                                                    href={route(
                                                                        "admin.student.edit",
                                                                        item.id,
                                                                    )}
                                                                >
                                                                    <PrimaryButton size="sm">
                                                                        Edit
                                                                    </PrimaryButton>
                                                                </Link>
                                                            )}
                                                        {auth.user.permissions.includes(
                                                            "student.delete",
                                                        ) && (
                                                                <DangerButton
                                                                    size="sm"
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            item.id,
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </DangerButton>
                                                            )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="20"
                                                className="px-6 py-6 text-gray-500 dark:text-gray-400"
                                            >
                                                No data found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <Pagination
                            links={student?.links}
                            from={student?.from}
                            to={student?.to}
                            total={student?.total}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default List;
