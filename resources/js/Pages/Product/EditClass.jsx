import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';

const EditClass = ({auth, editData}) => {
    // console.log(editData);

    const { data, setData, processing, errors, post } = useForm({
        classes_name: undefined,
        email: undefined,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('class.store'), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your data is Updated",
                    showConfirmButton: false,
                    timer: 2000
                });
            },
            onError: (errors) => {
                console.log(errors)
                if (errors) {
                    Swal.fire({
                        title: 'Error!',
                        text: errors.classes_name ? errors.classes_name : errors.email,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Class edit</h2>}
        >
            <Head title="Edit" />
            <h2 className=' text-2xl text-center font-semibold mt-2'>This is AddClass page here we can class add</h2>
            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-lime-400 rounded-md mt-10'>
                    <div>
                        <InputLabel htmlFor="classes_name" value="Name" />
                        <TextInput
                            id="classes_name"
                            type="text"
                            name="classes_name"
                            value={data.classes_name}
                            placeholder={'Class Name'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="classes_name"
                            isFocused={true}
                            onChange={(e) => setData('classes_name', e.target.value)}
                        />
                        <InputError message={errors.classes_name} className="mt-2" />
                    </div>
                    <div className=' my-2'>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="text"
                            name="email"
                            value={data.email}
                            placeholder={'Your email'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="email"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Add
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default EditClass;