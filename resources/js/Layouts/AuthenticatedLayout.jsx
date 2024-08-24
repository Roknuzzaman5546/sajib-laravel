import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { LuBell, LuLayoutDashboard } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-[#f3f1f6]">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='flex items-center justify-between border-b-2 border-gray-300 py-3 text-black px-4 z-10'>
                        <ul className='flex justify-center items-center gap-5 text-xl font-bold'>
                            Dashboard
                        </ul>
                        <div className='flex items-center gap-5 md:gap-9'>
                            <div className='relative notifications z-10'>
                                <LuBell className='text-lg md:text-xl' />
                            </div>
                            <div className='flex items-center gap-2 relative profile z-10'>
                                <img src={user?.profile_image ?? "/assets/user.png"} className='w-8 h-8 md:w-10 md:h-10' alt="user avater" />
                                <div className='text-xs md:text-sm'>
                                    <p className='font-semibold'>{user?.name}</p>
                                    <p> <span className='font-bold'>{user?.balance ?? 0}</span><span className='font-normal'> OZTG</span></p>
                                </div>
                                <div className='absolute top-10 right-0 profile-info'>
                                    <div className='w-[249px] rounded-md shadow-card-shadow-2 border-t-[3px] border-t-[#822DFF] py-3 px-2  text-[#333333BF] bg-white mt-2'>
                                        <NavLink
                                            href={route('profile.edit')}
                                            active={route().current('profile.edit')}
                                        >
                                            <img src="/assets/profile-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                            <span className='ml-1'>
                                                Profile
                                            </span>
                                        </NavLink>
                                        <Link
                                            href={route('password.change')}
                                            active={route().current('password.change')}
                                            className="flex items-center gap-1 hover:bg-[#EDEFF1] px-2 py-1 rounded-lg mt-1"
                                        >
                                            <img src="/assets/sign-out-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                            <span className='text-sm font-normal'>
                                                Change password
                                            </span>
                                        </Link>
                                        <Link
                                            className="flex justify-between items-center gap-2 px-2 py-1 rounded-lg mt-1"
                                        >
                                            <div
                                                className="flex items-center gap-1"
                                            >
                                                <img src="/assets/Balance.png" className='w-[14.5px] h-[14.5px]' alt="dashboard icons" />
                                                <span className='text-sm font-normal'>
                                                    Balance
                                                </span>
                                            </div>
                                            <p className='text-xs'>
                                                <span className='font-semibold text-black'>{user?.wallet?.balance ?? 0}</span><span> OZTG</span>
                                            </p>
                                        </Link>
                                        <Link
                                            href={route('logout')} method="post" as="button"
                                            className="flex items-center gap-1 hover:bg-[#EDEFF1] px-2 py-1 rounded-lg mt-1"
                                        >
                                            <img src="/assets/sign-out-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                            <span className='text-sm font-normal'>
                                                Sign Out
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <main >{children}</main>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className='bg-white border-r-2 border-gray-300 min-h-full w-60 p-4'>
                        <Link href="/">
                            <div className=' flex items-center justify-center gap-2 border border-gray-300 rounded-md py-[6px]'>
                                <ApplicationLogo className="block h-5 w-auto fill-current text-gray-800" />
                                <h2 className='font-bold text-black uppercase'>Re<span className=' text-red-600'>Chart</span>shop</h2>
                            </div>
                        </Link>
                        <ul className="menu text-base-content mt-5">
                            {/* Sidebar content here */}
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                <LuLayoutDashboard />
                                <span className=' ml-1'>
                                    Dashboard
                                </span>
                            </NavLink>
                            <NavLink href={route('wallet')} active={route().current('wallet')}>
                                <IoWalletOutline />
                                <span className=' ml-1'>
                                    Wallet
                                </span>
                            </NavLink>
                            <NavLink href={route('contact')} active={route().current('contact')}>
                                <IoIosContact />
                                <span className=' ml-1'>
                                    Contact
                                </span>
                            </NavLink>
                            <NavLink href={route('laravel')} active={route().current('laravel')}>
                                Laravel Query
                            </NavLink>
                            <NavLink href={route('about.us')} active={route().current('about.us')}>
                                About US
                            </NavLink>
                            <NavLink
                                href={route('profile.edit')}
                                active={route().current('profile.edit')}
                            >
                                <img src="/assets/profile-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                <span className=' ml-1'>
                                    Profile
                                </span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
