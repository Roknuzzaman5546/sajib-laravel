import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

const PostFrom = ({ auth }) => {

    const { data, setData, processing, errors, post } = useForm({
        name: undefined,
        email: undefined,
        password: undefined,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.post'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <Head title="Laravel" />
            <h2 className=' text-2xl my-5 text-center'>This page is PostFrom page</h2>
            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-white rounded-md mt-10'>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="Text"
                            name="name"
                            value={data.name}
                            placeholder={'username'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className=' my-2'>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="text"
                            name="email"
                            value={data.email}
                            placeholder={'Your email'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder={'Product password'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}

export default PostFrom
