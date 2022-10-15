import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                "py-3 px-4 bg-gradient-to-r from-green-500 to-green-300 rounded-full font-semibold text-gray-800 text-sm w-full hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 focus:ring-2 ring-white", className,
                )}
                {...props}
            >
                {children}
            </Comp>
    )
}