import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const Wallet = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wallet</h2>}
        >
            <Head title="Wallet" />
            <div className='ml-5 mt-5'>
                <h2>This is Wallet page</h2>
                <button className='btn ml-5 mt-2'> <a href={route('send.id', '1')}>Submit</a> </button>
            </div>
        </AuthenticatedLayout>
    );
};

export default Wallet;
