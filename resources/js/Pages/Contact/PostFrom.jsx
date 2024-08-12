import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'

const PostFrom = () => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <Head title="Laravel" />
            <h1 className=' text-2xl font-bold'>This is laravel page welcome </h1>
        </AuthenticatedLayout>
    )
}

export default PostFrom
