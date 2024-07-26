import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import TextInput from '@/Components/TextInput';

const Upload = ({ auth }) => {

    const {
        get,
    } = useForm({
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        > 
            <h2>This is product upload file</h2>
            <TextInput />
            <button><a href={`uploadId/${auth?.user?.id}`}>click</a></button>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
};

export default Upload;