import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div>
                        <ul className='flex justify-around items-center'>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
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
                                            <img src="/assets/icons/sidebar/profile-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                            <span className='text-sm font-normal'>
                                                Profile
                                            </span>
                                        </NavLink>
                                        <Link
                                            className="flex justify-between items-center gap-2 px-2 py-1 rounded-lg mt-1"
                                        >
                                            <div
                                                className="flex items-center gap-1"
                                            >
                                                <img src="/assets/icons/sidebar/Balance.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                                <span className='text-sm font-normal'>
                                                    Balance
                                                </span>
                                            </div>
                                            <p className='text-xs'>
                                                <span className='font-semibold text-black'>{user?.wallet?.balance ?? 0}</span><span> OZTG</span>
                                            </p>
                                        </Link>
                                        <NavLink
                                            href={route('activities')}
                                            active={route().current('activities')}
                                        >
                                            <img src="/assets/icons/sidebar/Activities.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
                                            <span className='text-sm font-normal'>
                                                Activities
                                            </span>
                                        </NavLink>
                                        <Link
                                            href={route('logout')} method="post" as="button"
                                            className="flex items-center gap-1 hover:bg-[#EDEFF1] px-2 py-1 rounded-lg mt-1"
                                        >
                                            <img src="/assets/icons/sidebar/sign-out-drop.png" className='w-[14.5px] h-[14.5px]' alt="dashbord icons" />
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
                    <main>{children}</main>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-lime-500 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

            {/* 
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('wallet')} active={route().current('wallet')}>
                                    Wallet
                                </NavLink>
                                <NavLink href={route('product.upload')} active={route().current('product.upload')}>
                                    Upload Product
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main> */}
        </div>
    );
}
