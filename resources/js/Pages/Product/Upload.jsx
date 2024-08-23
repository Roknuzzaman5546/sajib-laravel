import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const Upload = ({ auth, status }) => {
    const { data, setData, processing, post } = useForm({
        name: undefined,
        brand: undefined,
        country: undefined,
    });


    const submit = (e) => {
        e.preventDefault();
        post(route('product.post'));
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Upload</h2>}
        >
            <Head title="Upload" />
            <div>
                {status && (
                    <div className="alert alert-success">
                        {status}
                    </div>
                )}
            </div>
            <h2 className=' text-2xl font-bold mt-5 mb-5 text-center text-blue-600 font-serif'>This is product upload file</h2>

            <form onSubmit={submit}>
                <div className=' w-1/2 p-10 mx-auto bg-white rounded-md mt-10'>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="Text"
                            name="name"
                            value={data.name}
                            placeholder={'name'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="brand" value="Brand" />
                        <TextInput
                            id="brand"
                            type="text"
                            name="brand"
                            value={data.brand}
                            placeholder={'Product brand'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('brand', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="country" value="Brand" />
                        <TextInput
                            id="country"
                            type="text"
                            name="country"
                            value={data.country}
                            placeholder={'Product country'}
                            className="mt-1 block w-full p-2 text-black bg-gray-100"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('country', e.target.value)}
                        />
                    </div>
                    <div>
                        <PrimaryButton className="mt-4 mx-auto" disabled={processing}>
                            Upload
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Upload;
