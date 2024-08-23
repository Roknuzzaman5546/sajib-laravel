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
                <div className='overflow-auto whitespace-nowrap border border-[#919EAB33] rounded-b-none rounded-xl'>
                    <table className='w-full text-[#333333]'>
                        <thead className=' bg-white'>
                            <tr className='text-left p-4 justify-between ml-5'>
                                <th className='px-3 py-4'>Id</th>
                                <th className='px-3 py-4'>Class</th>
                                <th className='px-3 py-4'>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataClass?.data.map((item) => (
                                    <tr key={item.id} className='text-left p-4 border-dotted border-b border-[#919EAB]'>
                                        <td className='px-3 py-4'>{item.id}</td>
                                        <td className='px-3 py-4'>{item.classes_name}</td>
                                        <td className='px-3 py-4'>{item.email}</td>
                                        <td className='px-3 py-4 btn btn-success'><a href={route('class.updateRoute', item.id)}>Edit</a></td>
                                        <td className='px-3 py-4 btn btn-info'><a href={route('class.delte', item.id)}>Delete</a></td>
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
