import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const SingleStudent = ({ auth, dataStudent }) => {
    // console.log(dataStudent);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">The student</h2>}
        >
            <Head title="Laravel" />
            <div className=' w-1/2 mx-auto mt-3'>
                <ul className=' border border-red-400 rounded-md p-2'>
                    <li><span className=' font-bold'>Id:</span> {dataStudent.id}</li>
                    <li><span className=' font-bold'>Name:</span> {dataStudent.name}</li>
                    <li><span className=' font-bold'>Class Id:</span> {dataStudent.class_id}</li>
                    <li><span className=' font-bold'>Roll:</span> {dataStudent.roll}</li>
                    <li><span className=' font-bold'>Email:</span> {dataStudent.email}</li>
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default SingleStudent;