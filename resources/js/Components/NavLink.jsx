import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pl-3 pt-1 mt-2 text-center ' +
                (active
                    ? ' border border-gray-300 rounded-md py-[6px] font-extrabold bg-[#f3f1f6]'
                    : '  ') +
                className
            }
        >
            {children}
        </Link>
    );
}
