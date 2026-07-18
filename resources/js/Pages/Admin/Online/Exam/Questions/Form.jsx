import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { STATES } from '@/data/RawData'
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
    const { question, exam_id } = usePage().props;

    const { data, setData, post, processing, errors, reset, put } = useForm({
        question: question?.question || "",
        exam_id: question?.exam_id || exam_id,
        modules:
            question?.answers?.map((answer) => ({
                answer: answer.answer,
                correct_answer: Boolean(answer.correct_answer),
            })) ?? [
                {
                    answer: "",
                    correct_answer: false,
                },
            ],
    });

    const appendForm = (e) => {
        e.preventDefault();
        setData("modules", [
            ...data.modules, {
                answer: "",
                correct_answer: false,
            },
        ]);
    };

    const removeForm = (index) => {
        if (data.modules.length === 1) return;

        setData(
            "modules",
            data.modules.filter((_, i) => i !== index)
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        if (question) {
            put(route('admin.online-exam-questions.update', question.id));
        } else {
            post(route('admin.online-exam-questions.store'), {
                forceFormData: true,
                onFinish: () => reset('name'),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {question ? 'Questions Edit' : 'Questions Create'}
                </h2>
            }
        >
            <Head title={question ? 'Questions Edit' : 'Questions Create'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {question ? 'Questions Edit' : 'Questions Create'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <InputLabel htmlFor="question" value="Question" />
                                    <TextInput
                                        id="question"
                                        type="text"
                                        value={data.question}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('question', e.target.value)}
                                    />
                                    <InputError message={errors.question} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <button
                                        type="button"
                                        onClick={appendForm}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                                    >
                                        +
                                    </button>
                                </div>


                                {data.modules.map((module, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 rounded-xl border border-gray-900 bg-gray-900 p-4 shadow-sm"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-sm font-semibold text-gray-100">
                                                Option {index + 1}
                                            </h3>

                                            <button
                                                type="button"
                                                onClick={() => removeForm(index)}
                                                disabled={data.modules.length === 1}
                                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-12 gap-4 items-center">
                                            {/* Answer */}
                                            <div className="col-span-12 md:col-span-9">
                                                <input
                                                    type="text"
                                                    placeholder={`Answer ${index + 1}`}
                                                    value={module.answer}
                                                    onChange={(e) => {
                                                        const modules = [...data.modules];
                                                        modules[index].answer = e.target.value;
                                                        setData("modules", modules);
                                                    }}
                                                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                                />

                                                <InputError message={errors[`modules.${index}.answer`]} className="mt-2" />
                                            </div>

                                            {/* Correct Answer */}
                                            <div className="col-span-12 md:col-span-3">
                                                <label className="items-center gap-3 border px-4 py-2.5 cursor-pointer hover:bg-slate-950
                                                rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full">
                                                    <input
                                                        type="checkbox"
                                                        checked={module.correct_answer}
                                                        onChange={(e) => {
                                                            const modules = [...data.modules];
                                                            modules[index].correct_answer = e.target.checked;
                                                            setData("modules", modules);
                                                        }}
                                                        className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                    />

                                                    <span className="text-sm font-medium text-gray-100 px-3">
                                                        Correct Answer
                                                    </span>
                                                </label>

                                                <InputError message={errors.modules} className="mt-2" />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {question ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.online-exam-questions.index', { exam_id })}>
                                    <DangerButton className='mx-3' size='md'>
                                        Cancel
                                    </DangerButton>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}