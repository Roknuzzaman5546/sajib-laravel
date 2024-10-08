import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export const Laravel = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <Head title="Laravel" />
            <div className=' w-[15%] mx-auto flex flex-col justify-center items-center mt-12'>
                <div className=' flex justify-center items-center gap-2'>
                    <button className=' btn btn-neutral w-full'><a href={route('class.creat')}>Add class</a></button>
                    <button className=' btn btn-neutral w-full'><a href={route('students.create')}>Add Student</a></button>
                </div>
                <div className=' text-center'>
                    <button className=' btn mr-2 mt-2 btn-primary'><a href={route('class')}>Class</a></button>
                    <button className=' btn btn-error'><a href={route('students.index')}>Student</a></button>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Laravel;
