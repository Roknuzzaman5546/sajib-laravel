import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const Upload = ({ auth }) => {
    const [initialData, setInitialData] = useState([]);

    const { data, setData, post, processing } = useForm({
        id_front: undefined,
        id_back: undefined,
    });

    const handleIdentifyVerify = () => {
        post(route('id.verify'), {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    id_front: undefined,
                    id_back: undefined,
                });
                router.visit(route('marchant'));
            }
        });
    };

    // console.log(data);
    // console.log(initialData);
    const submit = (e) => {
        e.preventDefault();
        post(route('product.post'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <h2 className=' text-2xl font-bold mt-5 mb-5 text-center text-blue-600 font-serif'>This is product upload file</h2>

            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-lime-400 rounded-md mt-10'>
                    <div>
                        <InputLabel htmlFor="id_front" value="id_front" />
                        <TextInput
                            id="id_front"
                            type="file"
                            name="id_front"
                            value={data.id_front}
                            placeholder={'id_front'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('id_front', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="id_back" value="id_back" />
                        <TextInput
                            id="id_back"
                            type="file"
                            name="id_back"
                            value={data.id_back}
                            placeholder={'Product id_back'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('id_back', e.target.value)}
                        />
                    </div>
                    <div onClick={handleIdentifyVerify}>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Upload
                        </PrimaryButton>
                    </div>
                </div>
            </form>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
};

export default Upload;