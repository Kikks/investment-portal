import { FC, PropsWithChildren } from "react";
import Button from "../../components/Button";

const Detail: FC<PropsWithChildren> = ({ children }) => (
	<div className='flex min-h-[30px] items-center border-l-4 border-yellow-500 pl-3'>
		<span className='text-xs font-extrabold uppercase lg:text-sm'>
			{children}
		</span>
	</div>
);

const Figure: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => (
	<div className='flex flex-col items-end text-right uppercase'>
		<span className='text-xs text-gray-400 lg:text-sm'>{title}</span>
		<h3 className='text-xl font-extrabold text-blue-900 lg:text-3xl'>
			{children}
		</h3>
	</div>
);

const CustomerDashboard = () => {
	return (
		<main className='p-5 lg:p-10'>
			<div className='mx-auto flex w-full max-w-[1500px] flex-col gap-10'>
				<nav>
					<div className='h-16 w-32 bg-red-500' />
				</nav>

				<div className='flex w-full items-center justify-between'>
					<div className='flex h-full flex-1 flex-col items-end justify-center gap-7  justify-self-stretch  border-r-4 border-blue-900 py-10 px-16'>
						<div className='flex flex-col items-end'>
							<h1 className='text-4xl font-black uppercase text-blue-900 lg:text-6xl'>
								Rotimi Hassan
							</h1>
							<h3 className='text-xl font-black uppercase text-blue-900 lg:text-3xl'>
								Ikechukwu
							</h3>
						</div>

						<div className='rounded-full bg-blue-900/90 px-7 py-2'>
							<span className='uppercase text-white lg:text-xl'>
								inv. id: invXXXXXXXXXXXXX
							</span>
						</div>

						<div className='mt-5 grid w-full grid-cols-2 gap-5'>
							<Detail>Investment start date: may 22, 2022</Detail>
							<Detail>Maturity date: may 23, 2022</Detail>
							<Detail>Currency: Naira</Detail>
							<Detail>Investment type: Fixed Deposit</Detail>
							<Detail>Account Officer: Ginaka Muoma</Detail>
						</div>
					</div>

					<div className='flex flex-1 flex-col items-end gap-5'>
						<Figure title='Rate'>12%</Figure>
						<Figure title='Principal Invested'>2,000,000:00</Figure>
						<Figure title='Interest Payout as at today'>56,875:00</Figure>
						<Figure title='Tenmor (DAYS)'>90</Figure>
						<Figure title='WHT (Witholding tax)'>5,917.81%</Figure>
						<Figure title='Balance as at today'>2,055,000:00</Figure>
						<Figure title='Amount Maturity'>4,000,000,000:00</Figure>
					</div>
				</div>

				<div className='mt-10 flex items-center justify-between gap-10'>
					<Button className='border-yellow-500'>chat with us</Button>

					<div className='flex items-center justify-between gap-3'>
						<Button className='border-blue-900'>Roll over</Button>
						<Button className='border-blue-500'>Print as PDF</Button>
						<Button className='border-red-600'>Logout</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CustomerDashboard;
