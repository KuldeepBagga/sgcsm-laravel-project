import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { COURSE_CATEGORY } from '@/data/RawData'
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
  const { course } = usePage().props;
  const { data, setData, post, put, processing, errors, reset, progress } = useForm({
    name: course?.name || '',
    category: course?.category || '',
    duration: course?.duration || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (course) {
      put(route('course.update', course.id));
    } else {
      post(route('course.store'), {
        onFinish: () => reset(),
      });
    }
  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {course ? 'Edit Course' : 'Create Course'}
        </h2>
      }
    >
      <Head title={course ? 'Edit Course' : 'Create Course'} />

      <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {course ? 'Edit Course' : 'Create Course'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <InputLabel htmlFor="name" value="Course Name" />
                  <TextInput
                    id="name"
                    type="text"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('name', e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="category" value="Category" />
                  <select
                    value={data.category}
                    onChange={(e) => setData('category', e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                  >
                    <option value="">SELECT CATEGORY</option>
                    {COURSE_CATEGORY.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.category} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="duration" value="Duration" />
                  <select
                    value={data.duration}
                    onChange={(e) => setData('duration', e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                  >
                    <option value="">SELECT DURATION</option>
                    {Array.from({ length: 24 }, (_, i) => i + 1).map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.duration} className="mt-2" />
                </div>
              </div>

              <div className="mt-6">
                <PrimaryButton disabled={processing} size='md'>
                  {course ? 'Update' : 'Save'}
                </PrimaryButton>
                <Link href={route('course.index')}>
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