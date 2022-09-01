import Button from "../../components/Button";

const CreateInvestor = () => {
	return (
		<main className='p-5 lg:p-10'>
			<div className='mx-auto flex w-full max-w-[1500px] flex-col gap-10'>
				<nav>
					<div className='h-16 w-32 bg-red-500' />
				</nav>

				<div className='mx-auto mt-16 grid w-full max-w-[700px] gap-5'>
					<div className='flex w-full items-end gap-5'>
						<div className='flex w-full flex-1 flex-col gap-2'>
							<h2 className='mb-5 flex-1 text-right text-xl font-extrabold uppercase text-blue-900 lg:text-3xl'>
								Create a new
								<br />
								investor
							</h2>
							<label
								htmlFor='investor'
								className='text-xxs uppercase text-gray-400 lg:text-xs'
							>
								Full Name
							</label>
							<input
								type='text'
								className='flex-1 rounded-md border border-black px-7 py-4 text-lg font-extrabold'
							/>
						</div>

						<Button className='mb-1 border-red-600'>create investor</Button>
					</div>

					<div className='flex justify-between gap-5'>
						<div className='flex flex-col gap-5'>
							<span className='text-xxs uppercase text-gray-400 lg:text-xs'>
								investor's id
							</span>

							<div className='flex items-center gap-5'>
								<span className='text-lg font-bold text-gray-400 lg:text-2xl'>
									SA-INV 02393 FD
								</span>

								<span className='text-xxs uppercase text-gray-400 lg:text-xs'>
									(auto generated)
								</span>
							</div>
						</div>

						<div className='flex flex-col gap-5'>
							<span className='text-xxs uppercase text-gray-400 lg:text-xs'>
								Password
							</span>

							<div className='flex items-center gap-5'>
								<span className='text-lg font-bold text-gray-400 lg:text-2xl'>
									VC9iKKSN(sISH?
								</span>

								<span className='text-xxs uppercase text-gray-400 lg:text-xs'>
									(auto generated)
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='mx-auto mt-10 flex w-full max-w-[1000px] justify-end'>
					<Button className='border-red-600'>Lopgout</Button>
				</div>

				<div className='mt-10 flex w-full justify-end'>
					<span className='text-xs font-bold lg:text-sm'>Copyright 2022</span>
				</div>
			</div>
		</main>
	);
};

export default CreateInvestor;
