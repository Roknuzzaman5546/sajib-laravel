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
            <div>
                <div className=' text-center'>
                    <button className=' btn mr-2 mt-2 btn-primary'><a href={route('class')}>Class</a></button>
                    <button className=' btn btn-error'><a href="">Student</a></button>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Laravel;
