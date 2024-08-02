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
        image: '',
        country: '',
    });

    // console.log(data);
    // console.log(initialData);
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
            <h2 className=' text-2xl font-bold mt-5 mb-5 text-center text-blue-600 font-serif'>This is product upload file</h2>

            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-lime-400 rounded-md mt-10'>
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
                    {/* <div className=' my-2'>
                        <InputLabel htmlFor="image" value="Image" />
                        <TextInput
                            id="image"
                            type="image"
                            name="image"
                            value={data.image}
                            placeholder={'Product image'}
                            className="mt-1 block w-full p-2 bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('image', e.target.value)}
                        />SS
                    </div> */}
                    <div>
                        <InputLabel htmlFor="country" value="Country" />
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
                    <div>
                        <InputLabel htmlFor="image" value="Image" />
                        <TextInput
                            id="image"
                            type="file"
                            name="image"
                            value={data.image}
                            placeholder={'Product Image URL'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('image', e.target.value)}
                        />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Upload
                        </PrimaryButton>
                    </div>
                </div>
            </form>
            <div>
                {
                    data?.image ?
                        <img src={data?.image} alt="" /> :
                        ''
                }
            </div>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
};

export default Upload;