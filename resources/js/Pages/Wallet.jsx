import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const Wallet = ({ auth, dataClass }) => {
    console.log(dataClass);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wallet</h2>}
        >
            <Head title="Wallet" />
            <div className=' p-5'>
                <div className='overflow-auto whitespace-nowrap card-shadow-2 border card-shadow-2 border-[#919EAB33] border-b-0 rounded-b-none rounded-xl'>
                    <table className='w-full text-[#333333]'>
                        <thead className=' bg-[#F1F3F7]'>
                            <tr className='text-left p-4 justify-between ml-5'>
                                <th className='px-3 py-4'>Id</th>
                                <th className='px-3 py-4'>Class</th>
                                <th className='px-3 py-4'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataClass?.map((item) => (
                                    <tr key={item.id} className='text-left p-4 border-dotted border-b border-[#919EAB]'>
                                        <td className='px-3 py-4'>{item.id}</td>
                                        <td className='px-3 py-4'>{item.class}</td>
                                        <td className='px-3 py-4'>{item.email}</td>
                                        <td className='px-3 py-4'>Edit</td>
                                        <td className='px-3 py-4'>Delete</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Wallet;
