import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
  const { result, id, update } = usePage().props;

  const createInput = {
    id: id ?? '',
    file: null,
  }

  const updateInput = {
    id: id ?? '',
    subject: result?.subject || '',
    min_marks: result?.min_marks || '',
    max_marks: result?.max_marks || '',
    obtained_marks: result?.obtained_marks || ''
  }

  const { data, setData, post, put, processing, errors, reset } = useForm(update ? updateInput : createInput);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (result) {
      put(route("admin.result.update", result.id), {
        forceFormData: true,
      });
    } else {
      post(route("admin.result.store"), {
        forceFormData: true,
        onSuccess: () => reset(),
      });
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {result ? "Edit Result" : "Create Result"}
        </h2>
      }
    >
      <Head title={result ? "Edit Result" : "Create Result"} />

      <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {result ? "Edit Result" : "Create Result"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">


                {update ?
                  (
                    <>
                      <div>
                        <InputLabel htmlFor="subject" value="Subject" />
                        <TextInput
                          id="subject"
                          type="text"
                          value={data.subject}
                          className="mt-1 block w-full"
                          onChange={(e) =>
                            setData("subject", e.target.value)
                          }
                        />
                        <InputError
                          message={errors.subject}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <InputLabel htmlFor="min_marks" value="Min Marks" />
                        <TextInput
                          id="min_marks"
                          type="text"
                          value={data.min_marks}
                          className="mt-1 block w-full"
                          onChange={(e) =>
                            setData("min_marks", e.target.value)
                          }
                        />
                        <InputError
                          message={errors.min_marks}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <InputLabel htmlFor="max_marks" value="Max Marks" />
                        <TextInput
                          id="max_marks"
                          type="text"
                          value={data.max_marks}
                          className="mt-1 block w-full"
                          onChange={(e) =>
                            setData("max_marks", e.target.value)
                          }
                        />
                        <InputError
                          message={errors.max_marks}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <InputLabel htmlFor="obtained_marks" value="Marks Obtained" />
                        <TextInput
                          id="obtained_marks"
                          type="text"
                          value={data.obtained_marks}
                          className="mt-1 block w-full"
                          onChange={(e) =>
                            setData("obtained_marks", e.target.value)
                          }
                        />
                        <InputError
                          message={errors.obtained_marks}
                          className="mt-2"
                        />
                      </div>
                    </>
                  )
                  :

                  (
                    <div>
                      <InputLabel htmlFor='file' value="Upload File Supports [ Xlsx , Xls ]" />
                      <input
                        id="file"
                        type="file"
                        accept=".xlsx,.xls"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                        onChange={(e) => setData('file', e.target.files[0])}
                      />
                      <InputError
                        message={errors.file}
                        className="mt-2"
                      />
                    </div>
                  )

                }




              </div>

              <div className="mt-6">
                <PrimaryButton disabled={processing} size="md">
                  {result ? "Update" : "Save"}
                </PrimaryButton>
                <Link href={route("admin.result.index", { id: id })}>
                  <DangerButton className="mx-3" size="md">
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
