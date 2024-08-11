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
            <h1 className=' text-2xl font-bold'>This is laravel page welcome {name}</h1>
        </AuthenticatedLayout>
    )
}

export default Laravel;
