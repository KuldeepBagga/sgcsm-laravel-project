import { useForm, usePage, Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileDropzone from "@/Components/FileDropzone";

function Form() {

  const { banner } = usePage().props;
  const [preview, setPreview] = useState(null);
  const { data, setData, post, put, processing, errors, reset, progress } = useForm({
    type: banner?.type || '',
    image: null || ''
  });

  const handleFile = (files) => {
    const file = files[0];
    if (file) {
      setData("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.image) {
      delete data.image;
    }
    if (banner) {
      put(route('admin.banner.update', banner.id));
    } else {
      post(route('admin.banner.store'), {
        onSuccess: () => reset(),
      });
    }
  }

  useEffect(() => {
    if (banner?.image) {
      setPreview(`/storage/${banner.image}`);
    }
  }, [banner]);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {banner ? 'Edit Banner' : 'Create Banner'}
        </h2>
      }
    >
      <Head title={banner ? 'Edit Banner' : 'Create Banner'} />


      <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {banner ? 'Edit Banner' : 'Create Banner'}
            </h2>

            <form onSubmit={handleSubmit}>

              <div className='mt-3'>
                <div>
                  <InputLabel htmlFor="image" value="Photo" className='mb-2' />

                  {!preview && <FileDropzone onFileSelect={handleFile} />}

                  {preview &&
                    <>
                      <img src={preview} className="w-32 mt-2 rounded" />
                      <DangerButton
                        size='sm'
                        className='mt-3'
                        onClick={() => {
                          setPreview(null);
                          setData('image', null);
                        }}
                      >
                        Remove
                      </DangerButton>
                    </>
                  }

                  {progress && (
                    <div className="w-full bg-gray-200 rounded">
                      <div
                        className="bg-indigo-600 text-xs text-white p-1 rounded"
                        style={{ width: `${progress.percentage}%` }}
                      >
                        {progress.percentage}%
                      </div>
                    </div>
                  )}

                  <InputError message={errors.image} className='mt-2' />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-2 mt-3'>
                <div>
                  <InputLabel htmlFor="type" value="Type" />
                  <select
                    value={data.type}
                    onChange={(e) => setData('type', e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                  >
                    <option value="">SELECT TYPE</option>

                    {[
                      { label: 'LINKAGE', value: 'linkage' },
                      { label: '1ST BANNER', value: 'banner_1' },
                      { label: '2ND BANNER', value: 'banner_2' },
                      { label: 'GALLERY', value: 'gallery' },
                      { label: 'PUBLICATION', value: 'publication' }
                    ].map((type) => (
                      <option key={type.label} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>

                  <InputError message={errors.type} className='mt-2' />

                </div>
              </div>

              <div className="mt-6">
                <PrimaryButton disabled={processing} size='md'>
                  {banner ? 'Update' : 'Save'}
                </PrimaryButton>
                <Link href={route('admin.banner.index')}>
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
  )
}

export default Form