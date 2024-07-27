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
            <h2>This is product upload file</h2>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="brand" value="Name" />
                    <TextInput
                        id="brand"
                        type="brand"
                        name="brand"
                        value={data.brand}
                        className="mt-1 block w-full"
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
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('country', e.target.value)}
                    />
                </div>
                <PrimaryButton className="ms-4" disabled={processing}>
                    Upload
                </PrimaryButton>
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