import Button from "../../components/Button";

const UploadDocument = () => {
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
								Upload Document
							</h2>
							<label
								htmlFor='investor'
								className='text-xxs uppercase text-gray-400 lg:text-xs'
							>
								Full Name
							</label>
							<div className='flex-1 rounded-md border border-black px-7 py-4 text-lg font-extrabold'>
								<label htmlFor='file' className='cursor-pointer text-gray-300'>
									Click to select a file (.xlsx, .xls only)
									<input
										type='file'
										name='file'
										id='file'
										className='hidden'
										accept='.xlsx,.xls'
									/>
								</label>
							</div>
						</div>

						<Button className='mb-1 border-blue-900'>upload</Button>
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

export default UploadDocument;
