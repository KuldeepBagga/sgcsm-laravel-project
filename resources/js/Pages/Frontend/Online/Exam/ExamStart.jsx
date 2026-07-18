import { Head, Link, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function ExamStart() {
    const { assign_exam, auth } = usePage().props;

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = assign_exam?.questions ?? [];
    const current = questions[currentQuestion] ?? null;

    const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

    console.log("assign", assign_exam);

    const [timeLeft, setTimeLeft] = useState(assign_exam?.exam_time * 60);

    console.log(selectedAnswers);

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };


    const handleAnswer = (questionId, answerId) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerId,
        }));
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // submitExam();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hrs).padStart(2, "0")} : ${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
    };

    const submitExam = () => {
        // post(route("student.exam.submit"), {
        //     answers: selectedAnswers,
        //     exam_id: assign_exam?.exam_id,
        // });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    SGCSM | EXAMINATION CENTER
                </h2>
            }
        >
            <Head title="EXAMINATION CENTER" />

            <div className="min-h-screen bg-gray-100 py-10 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">
                        <div className="flex flex-col lg:flex-row">

                            {/* Left Profile Card */}
                            {assign_exam &&
                                <div className="w-full border-b bg-gradient-to-b from-indigo-600 to-indigo-700 p-8 text-white lg:w-80 lg:border-b-0 lg:border-r border-indigo-500">

                                    <div className="flex flex-col items-center">

                                        <img
                                            src={`/storage/${assign_exam?.student.image}`}
                                            alt="Student"
                                            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                                        />

                                        <h2 className="mt-5 text-2xl font-bold">
                                            {assign_exam?.student.name}
                                        </h2>

                                        <p className="mt-1 text-indigo-100">
                                            Student Profile
                                        </p>
                                    </div>

                                    <div className="mt-8 space-y-4">

                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                                            <p className="text-xs uppercase tracking-wider text-indigo-200">
                                                Enrollment No.
                                            </p>
                                            <p className="mt-1 font-semibold">
                                                {assign_exam?.student?.registration_no}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                                            <p className="text-xs uppercase tracking-wider text-indigo-200">
                                                Center Code
                                            </p>
                                            <p className="mt-1 font-semibold">
                                                {assign_exam?.student?.center_code}
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                                            <p className="text-xs uppercase tracking-wider text-indigo-200">
                                                Center Name
                                            </p>
                                            <p className="mt-1 font-semibold">
                                                {assign_exam?.student?.center_name}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            }

                            {/* Right Content */}
                            <div className="flex-1">

                                <div className="grid gap-6 md:grid-cols">
                                    {!assign_exam ?
                                        <div className="overflow-hidden rounded-2xl333 border333 border-gray3-200333 bg-white shadow-lg33 dark:border-gray-700 dark:bg-gray-800">

                                            <div className="flex flex-col items-center justify-center px-8 py-16 text-center">

                                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-12 w-12 text-red-500"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 12h6m-6 4h6M9 8h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                                                        />
                                                    </svg>
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                                    Question Paper Not Available
                                                </h3>

                                                <p className="mt-3 max-w-lg text-gray-500 dark:text-gray-400">
                                                    Your question paper has not been assigned yet. Please contact
                                                    your institute administrator or check back later.
                                                </p>

                                                <Link
                                                    href={route('admin.dashboard')}
                                                    className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                                                >
                                                    Dashboard
                                                </Link>

                                            </div>

                                        </div>
                                        :
                                        <div className="border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">

                                            {/* Header */}

                                            <div className="sticky top-0 z-20 rounded-t-2xl border-b border-gray-200 bg-white px-6 py-5 dark:border-gray-700 dark:bg-gray-800">

                                                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                                                    <div>
                                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                                                            Online Examination
                                                        </h2>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4">

                                                        {/* Progress */}
                                                        <div className="rounded-xl bg-blue-50 px-4 py-3 dark:bg-blue-900/20">
                                                            <p className="text-xs uppercase text-blue-600 dark:text-blue-400">
                                                                Progress
                                                            </p>

                                                            <p className="font-bold text-blue-700 dark:text-blue-300">
                                                                Question {currentQuestion + 1} / {questions.length}
                                                            </p>
                                                        </div>

                                                        {/* Timer */}
                                                        <div className="rounded-xl bg-red-50 px-5 py-3 dark:bg-red-900/20">

                                                            <p className="text-xs uppercase text-red-600 dark:text-red-400">
                                                                Time Remaining
                                                            </p>

                                                            <div className="flex items-center gap-2">

                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6 text-red-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>

                                                                <span
                                                                    className={`text-2xl font-bold tracking-widest ${timeLeft <= 60
                                                                        ? "text-red-600 animate-pulse"
                                                                        : timeLeft <= 300
                                                                            ? "text-orange-500"
                                                                            : "text-green-600"
                                                                        }`}
                                                                >
                                                                    {formatTime(timeLeft)}
                                                                </span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                                {questions.map((question, index) => {
                                                    const isCurrent = currentQuestion === index;
                                                    const isAnswered = !!selectedAnswers[question.id];

                                                    return (
                                                        <button
                                                            key={question.id}
                                                            onClick={() => setCurrentQuestion(index)}
                                                            className={`flex h-6 w-6 items-center justify-center rounded-md text-sm font-semibold transition-all duration-200 ${isCurrent ? "bg-indigo-600 text-white ring-2 ring-indigo-300 shadow" : isAnswered ? "bg-green-500 text-white hover:bg-green-600" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"}`}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    );
                                                })}
                                            </div>



                                            <div className="p-6">
                                                <div className="mb-8 rounded-xl bg-blue-50 p-5 dark:bg-gray-900">
                                                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                                                        Question {currentQuestion + 1}
                                                    </p>

                                                    <h3 className="text-xl font-semibold leading-8 text-gray-50 dark:text-white">
                                                        {current.question}
                                                    </h3>
                                                </div>

                                                <div className="space-y-4">
                                                    {current.answers.map((answer, index) => (
                                                        <label
                                                            key={answer.id}
                                                            className={`flex cursor-pointer items-center rounded-xl border p-4 transition ${selectedAnswers[current.id] === answer.id ? "border-indigo-600 bg-indigo-700" : "border-gray-200 hover:border-indigo-400"}`}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={`question-${current.id}`}
                                                                className="hidden"
                                                                checked={selectedAnswers[current.id] === answer.id}
                                                                onChange={() => handleAnswer(current.id, answer.id)}
                                                            />

                                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-bold text-indigo-700">
                                                                {optionLabels[index]}
                                                            </div>

                                                            <span className={`ml-4 text-lg text-slate-100`}>
                                                                {answer.answer}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>

                                                {/* Footer */}

                                                <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-700">

                                                    <button
                                                        onClick={previousQuestion}
                                                        disabled={currentQuestion === 0}
                                                        className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    >
                                                        Previous
                                                    </button>

                                                    {currentQuestion === questions.length - 1 ? (
                                                        <button
                                                            onClick={submitExam}
                                                            className="rounded-xl bg-green-600 px-8 py-3 text-white"
                                                        >
                                                            Submit Exam
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={nextQuestion}
                                                            className="rounded-xl bg-indigo-600 px-8 py-3 text-white"
                                                        >
                                                            Save & Next →
                                                        </button>
                                                    )}

                                                </div>

                                            </div>

                                        </div>
                                    }


                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default ExamStart