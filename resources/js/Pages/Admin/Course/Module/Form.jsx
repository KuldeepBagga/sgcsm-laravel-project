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
  const { module, course_id } = usePage().props;

  const { data, setData, post, put, processing, errors, reset, progress } = useForm({
    title: module?.title || '',
    course_id: module?.course_id || course_id
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (module) {
      put(route('admin.course-module.update', module.id));
    } else {
      post(route('admin.course-module.store'), {
        onFinish: () => reset(),
      });
    }
  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {module ? 'Edit Modules' : 'Create Modules'}
        </h2>
      }
    >
      <Head title={module ? 'Edit Modules' : 'Create Modules'} />

      <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {module ? 'Edit Modules' : 'Create Modules'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">

                <div>
                  <InputLabel htmlFor="title" value="Title" />
                  <TextInput
                    id="title"
                    type="text"
                    value={data.title}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('title', e.target.value)}
                  />
                  <InputError message={errors.title} className="mt-2" />
                </div>

              </div>

              <div className="mt-6">
                <PrimaryButton disabled={processing} size='md'>
                  {module ? 'Update' : 'Save'}
                </PrimaryButton>
                <Link href={route('admin.course-module.index', { id: module?.course_id ?? course_id })}>
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