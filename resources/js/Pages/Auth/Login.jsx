import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MainLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}


            <main className="bg-slate-50">
                <div className="min-h-screen--0 py-20 bg-gradient-to-br flex items-center justify-center">
                    <div className="w-full max-w-6xl bg-white rounded-[35px] shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Left Section */}
                            <div className="hidden lg:flex relative items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 p-14 overflow-hidden">

                                <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>

                                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-24 translate-y-24"></div>

                                <div className="relative z-10 text-center text-white">

                                    <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-8 shadow-lg">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-14 h-14"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                                            />
                                        </svg>

                                    </div>

                                    <h1 className="text-5xl font-bold leading-tight">
                                        Login Portal
                                    </h1>

                                    <p className="text-blue-100 text-lg mt-6 leading-relaxed max-w-md mx-auto">
                                        Access your student dashboard, courses, certificates,
                                        results, and learning materials securely.
                                    </p>

                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="p-8 md:p-14 flex items-center">
                                <div className="w-full">

                                    {/* Mobile Header */}
                                    <div className="lg:hidden text-center mb-10">

                                        <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-10"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                                                />
                                            </svg>

                                        </div>

                                        <h2 className="text-3xl font-bold text-gray-900 mt-5">
                                            Student Login
                                        </h2>

                                    </div>

                                    {/* Desktop Header */}
                                    <div className="hidden lg:block mb-10">

                                        <h2 className="text-4xl font-bold text-gray-900">
                                            Welcome Back 👋
                                        </h2>

                                        <p className="text-gray-500 mt-3 text-lg">
                                            Login to continue.
                                        </p>

                                    </div>

                                    {/* Form */}
                                    <form className="space-y-6" onSubmit={submit}>

                                        {/* Student ID */}
                                        <div>

                                            <label className="block text-gray-700 font-semibold mb-3">
                                                Email
                                            </label>

                                            <div className="relative">

                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    autoComplete="username"
                                                    autoFocus
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 pl-14 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                                />

                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>

                                                </div>
                                            </div>
                                            <InputError message={errors.email} className="mt-2" />

                                        </div>

                                        {/* Password */}
                                        <div>

                                            <label className="block text-gray-700 font-semibold mb-3">
                                                Password
                                            </label>

                                            <div className="relative">

                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    autoComplete="current-password"
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 pl-14 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                                />

                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v6a2 2 0 002 2zm3-10V9a3 3 0 016 0v2H9z"
                                                        />
                                                    </svg>

                                                </div>

                                            </div>
                                            <InputError message={errors.password} className="mt-2" />
                                        </div>

                                        {/* Remember Me */}
                                        <div className="flex items-center justify-between">

                                            <label className="flex items-center gap-3 text-gray-600">

                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded text-blue-600"
                                                    name="remember"
                                                    checked={data.remember}
                                                    onChange={(e) =>
                                                        setData('remember', e.target.checked)
                                                    }
                                                />



                                                Remember Me

                                            </label>

                                            {canResetPassword && (
                                                <Link
                                                    href={route('password.request')}
                                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}



                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300"
                                        >
                                            Login Now
                                        </button>

                                    </form>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
