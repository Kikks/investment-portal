import { Icon } from "@iconify/react";

const Login = () => {
	return (
		<main className='flex h-screen w-screen items-center justify-center'>
			<aside className='login-bg hidden h-full w-[50%] p-10 lg:flex'>
				<div className='h-16 w-32 bg-red-500' />
			</aside>

			<div className='mx-auto flex h-full w-full max-w-[800px] flex-col items-center justify-center gap-10 p-10 lg:w-[50%] lg:p-20 2xl:gap-20'>
				<div className='flex w-full items-center justify-end gap-3 pr-10'>
					<h1 className='text-right text-2xl font-black uppercase lg:text-3xl'>
						Investment <br /> Portal
					</h1>

					<div className='h-full w-1 bg-yellow-600' />
				</div>

				<form className='grid w-full gap-10'>
					<div className='grid w-full gap-1'>
						<label htmlFor='email' className='text-xxs uppercase lg:text-xs'>
							Investment ID/Email
						</label>
						<input className='border-b border-gray-800 py-3 focus:outline-none' />
					</div>

					<div className='grid w-full gap-1'>
						<label htmlFor='email' className='text-xxs uppercase lg:text-xs'>
							Password
						</label>
						<input className='border-b border-gray-800 py-3 focus:outline-none' />
					</div>

					<button className='my-5 self-end justify-self-end'>
						<Icon
							icon='bi:arrow-right'
							className='text-4xl text-yellow-600 lg:text-5xl'
						/>
					</button>
				</form>

				<span className='text-center text-xxs font-bold uppercase lg:text-xs'>
					Swift & Allieed Partners 2022
				</span>
			</div>
		</main>
	);
};

export default Login;
