import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react'
import React from 'react'

const ChangePassword = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wallet</h2>}
        >
            <Head title="Wallet" />
            <h2 className=' text-gray-600 mt-3 text-center'>Hey {auth.user.name} Change your name</h2>
        </AuthenticatedLayout>
    )
}

export default ChangePassword
