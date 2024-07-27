import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const Upload = ({ auth }) => {
    const [initialData, setInitialData] = useState([]);
    const {
        setData,
        post,
        data,
        processing
    } = useForm({
        name: '',
        brand: '',
        country: '',
    });

    console.log(data);
    console.log(initialData);
    const submit = (e) => {
        e.preventDefault();
        post(route('product.post'));
    };
    const handleCheck = () => {
        const ora = {
            name: 'toya',
            roll: 'hasib'
        }
        setInitialData(ora)
    }

    useEffect(() => {
        const ora = {
            name: 'abir',
            brand: 'toyta',
            country: 'usa'
        }
        if (initialData.name === 'toya') {
            setInitialData(ora)
            setData(ora)
        }
    }, []
    )

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <h2 className=' text-2xl font-bold mt-5 mb-5 text-center'>This is product upload file</h2>

            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-lime-400 rounded-md'>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="name"
                            name="name"
                            value={data.name}
                            placeholder={'Product Name'}
                            className="mt-1 block w-full p-2 bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>
                    <div className=' my-2'>
                        <InputLabel htmlFor="brand" value="Brand" />
                        <TextInput
                            id="brand"
                            type="brand"
                            name="brand"
                            value={data.brand}
                            placeholder={'Product Brand'}
                            className="mt-1 block w-full p-2 bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('brand', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="country" value="Name" />
                        <TextInput
                            id="country"
                            type="country"
                            name="country"
                            value={data.country}
                            placeholder={'Product Country'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('country', e.target.value)}
                        />
                    </div>
                    <PrimaryButton className="ms-4 mt-4 mx-auto" disabled={processing}>
                        Upload
                    </PrimaryButton>
                </div>
            </form>
            <div onClick={handleCheck} className=' my-5'>
                <PrimaryButton className="ms-4" disabled={processing}>
                    check
                </PrimaryButton>
            </div>
            <button><a href={`uploadId/${auth?.user?.id}`}>click</a></button>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
};

export default Upload;