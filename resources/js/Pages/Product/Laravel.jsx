import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export const Laravel = ({ auth, name }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <Head title="Laravel" />
            <h1 className=' text-2xl font-bold'>This is users Data</h1>
            <ul className=' ml-5 mt-5'>
                <li><span className=' font-bold'>Id:</span> {name?.id}</li>
                <li><span className=' font-bold'>Name:</span> {name?.name}</li>
                <li><span className=' font-bold'>Email:</span> {name?.email}</li>
            </ul>
        </AuthenticatedLayout>
    )
}

export default Laravel;
