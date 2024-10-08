import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import Swal from 'sweetalert2';

const EditStudents = ({ auth, dataStudents, dataClasses }) => {
    const { data, setData, processing, errors, patch } = useForm({
        name: undefined,
        class_id: undefined,
        email: undefined,
        phone: undefined,
        roll: undefined
    });

    console.log(data)
    const submit = (e) => {
        e.preventDefault();
        patch(route('students.update', dataStudents.id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your data is post",
                    showConfirmButton: false,
                    timer: 2000
                });
                // reset();
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
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Student add</h2>}
        >
            <Head title="Laravel" />
            <h2 className=' text-2xl text-center font-semibold mt-2'>This is AddClass page here we can class add</h2>
            <form onSubmit={submit}>
                <div className=' w-[80%] p-10 mx-auto bg-white rounded-md mt-5 mb-5'>
                    <div className=' flex items-center gap-1'>
                        <div className=' w-1/2'>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name ? data.name : dataStudents.name}
                                defaultValue={dataStudents.name}
                                placeholder={'Class Name'}
                                className="mt-1 block w-full p-2 text-black bg-gray-100"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className=' w-1/2'>
                            <InputLabel htmlFor="name" value="Which class" />
                            <select
                                className="select select-bordered w-full max-w-xs mt-1 block p-2 text-black bg-gray-100"
                                onChange={(e) => setData('class_id', e.target.value)}
                            >
                                {dataClasses.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                        selected={dataStudents.class_id === item.id}
                                    >
                                        {item.classes_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className=' flex items-center gap-1'>
                        <div className=' my-2 w-1/2'>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email ? data.email : dataStudents.email}
                                defaultValue={dataStudents.email}
                                placeholder={'Your email'}
                                className="mt-1 block w-full p-2 text-black bg-gray-100"
                                autoComplete="email"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                            <InputLabel htmlFor="roll" value="Roll" />

                        <div className=' my-2 w-1/2'>
                        <TextInput
                                id="roll"
                                type="text"
                                name="roll"
                                value={data.roll ? data.roll : dataStudents.roll}
                                defaultValue={dataStudents.roll}
                                placeholder={'Your roll'}
                                className="mt-1 block w-full p-2 text-black bg-gray-100"
                                autoComplete="roll" 
                                isFocused={true}
                                onChange={(e) => setData('roll', e.target.value)}
                            />
                            <InputError message={errors.roll} className="mt-2" />
                        </div>
                    </div>
                    <div className=' my-2'>
                        <InputLabel htmlFor="phone" value="Phone" />
                        <TextInput
                            id="phone"
                            type="text"
                            name="phone"
                            value={data.phone ? data.phone : dataStudents.phone}
                            defaultValue={dataStudents.phone}
                            placeholder={'Your phone'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="phone"
                            isFocused={true}
                            onChange={(e) => setData('phone', e.target.value)}
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
    )
}

export default EditStudents
