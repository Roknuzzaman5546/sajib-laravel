import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'
import Swal from 'sweetalert2';

const ChangePassword = ({ auth }) => {

    const { data, setData, processing, errors, put, sucsess } = useForm({
        current_password: undefined,
        password: undefined,
        password_confirmation: undefined,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.visit(route('dashboard'))
            },
            onError: (errors) => {
                console.log(errors)
                if (errors) {
                    Swal.fire({
                        title: 'Error!',
                        text: {errors},
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wallet</h2>}
        >
            <Head title="Wallet" />
            <h2 className=' text-gray-600 mt-3 text-center text-2xl font-semibold'>Hey {auth.user.name} Change your name</h2>
            {
                sucsess ?
                    <h2>password change successfully</h2> : ""
            }
            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-lime-400 rounded-md mt-10'>
                    <div>
                        <InputLabel htmlFor="current_password" value="Current_password" />
                        <TextInput
                            id="current_password"
                            type="password"
                            name="current_password"
                            value={data.current_password}
                            placeholder={'Current_password'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="current_password"
                            isFocused={true}
                            onChange={(e) => setData('current_password', e.target.value)}
                        />
                        <InputError message={errors.current_password} className="mt-2" />
                    </div>
                    <div className=' my-2'>
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder={'Your password'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder={'Confirmation password'}
                            className="mt-1 block w-full p-2 text-black bg-blue-600"
                            autoComplete="password_confirmation"
                            isFocused={true}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Change
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}

export default ChangePassword
