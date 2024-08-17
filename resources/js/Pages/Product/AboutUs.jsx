import About from '@/Components/About';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const AboutUs = ({auth}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About</h2>}
        >
            <Head title="About" />
            <div>
                {/* header part */}
                <div className=" mt-12 ml-10 mb-16">
                    <h2 className=" text-3xl font-bold font-serif mb-3">IT tech bd</h2>
                    <p className=" text-xl font-thin">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
                </div>
                <div className=" ml-20">
                    <img className="h-[700px] w-full" src='./assets/aboutUs.jpg' alt="" />
                </div>
                <div>
                    <About></About>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AboutUs;
