import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const AllStudents = ({ auth, dataStudents }) => {
    // console.log(dataStudents)

    const { delete: destroy, processing } = useForm();

    const handleDelete = (id) => {
        destroy(route('students.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Student deleted successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            },
            onError: (errors) => {
                console.log(errors);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while deleting the student.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Students</h2>}
        >
            <Head title="Laravel" />
            <div className=' p-5'>
                <div className='overflow-auto whitespace-nowrap card-shadow-2 border card-shadow-2 border-[#919EAB33] border-b-0 rounded-b-none rounded-xl'>
                    <table className='w-full text-[#333333]'>
                        <thead className=' bg-[#F1F3F7]'>
                            <tr className='text-left p-4 justify-between ml-5'>
                                <th className='px-3 py-4'>Id</th>
                                <th className='px-3 py-4'>Class id</th>
                                <th className='px-3 py-4'>Name</th>
                                <th className='px-3 py-4'>Roll</th>
                                <th className='px-3 py-4'>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataStudents?.map((item) => (
                                    <tr key={item.id} className='text-left p-4 border-dotted border-b border-[#919EAB]'>
                                        <td className='px-3 py-4'>{item.id}</td>
                                        <td className='px-3 py-4'>{item.class_id}</td>
                                        <td className='px-3 py-4'>{item.name}</td>
                                        <td className='px-3 py-4'>{item.roll}</td>
                                        <td className='px-3 py-4'>{item.email}</td>
                                        <td className='px-3 py-4 btn btn-success'><a href={route('students.edit', item.id)}>Edit</a></td>
                                        <td className='px-3 py-4 btn btn-info' onClick={() => handleDelete(item.id)}><a>Delete</a></td>
                                        <td className='px-3 py-4 btn btn-ghost'><a href={route('students.show', item.id)}>View</a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default AllStudents
