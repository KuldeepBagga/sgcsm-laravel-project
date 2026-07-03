import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import TextInput from '@/Components/TextInput'

function List() {
  const { banner, auth, flash } = usePage().props;

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
        router.delete(route("admin.banner.destroy", id));
      }
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Banner
        </h2>
      }
    >
      <Head title="Banner" />

      <Toast message={flash.success} type="success" />
      <Toast message={flash.error} type="error" />

      <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Banner List
              </h2>
              {auth.user.permissions.includes('gallery.create') &&
                <Link href={route("admin.banner.create")}>
                  <PrimaryButton>Create</PrimaryButton>
                </Link>
              }
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Type
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                      Actions
                    </th>
                  </tr>

                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                  {banner?.data?.length > 0 ? (
                    banner.data.map((item, index) => (
                      <tr
                        key={item.id || index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                          {index + 1}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                          <img src={`/storage/${item.image}`} className='h-20 w-20 border border-gray-400 rounded-md' />
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                          {
                            {
                              publication: 'PUBLICATION',
                              gallery: 'GALLERY',
                              banner_1: '1ST BANNER',
                              banner_2: '2ND BANNER',
                              linkage: 'LINKAGE'
                            }[item.type] || item.type
                          }
                        </td>

                        <td className="px-6 py-4 text-right space-x-2">
                          {auth.user.permissions.includes('gallery.update') &&
                            <Link
                              href={route(
                                "admin.banner.edit",
                                item.id,
                              )}
                            >
                              <PrimaryButton size="sm">
                                Edit
                              </PrimaryButton>
                            </Link>
                          }

                          {auth.user.permissions.includes('gallery.delete') &&
                            <DangerButton size="sm"
                              onClick={() => handleDelete(item.id,)}
                            >
                              Delete
                            </DangerButton>
                          }
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="10"
                        className="px-6 py-6 text-center text-gray-500 dark:text-gray-400"
                      >
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <Pagination
              links={banner.links}
              from={banner.from}
              to={banner.to}
              total={banner.total}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default List;
