import { FC, PropsWithChildren, ReactNode } from "react";

interface ButtonProps {
	className?: string;
	icon?: ReactNode;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	className,
	children,
	icon
}) => (
	<button
		className={`flex items-center justify-center gap-5 rounded-md border-2 py-4 px-7 text-xs font-bold uppercase shadow-md lg:text-sm ${
			className || ""
		}`}
	>
		{icon && icon}
		{children}
	</button>
);

export default Button;
