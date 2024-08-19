import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const StudentsCreate = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student add</h2>}
        >
            <Head title="Laravel" />
        </AuthenticatedLayout>
    )
}

export default StudentsCreate
