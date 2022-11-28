import React from 'react';

const Modal = (props) => {
	return (
		<div className={`${!props.show && 'hidden'} absolute`}>
			<div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`flex justify-center items-center overflow-y-auto overflow-x-hidden fixed inset-0 z-50 p-4 w-screen md:inset-0 h-modal md:h-full`}>
				<div className='absolute w-full h-full bg-black opacity-25'></div>
				<div className="w-full h-full flex justify-center items-center">
					<div className="relative flex justify-center items-center w-screen max-w-2xl h-full md:h-auto">
						<div className="relative w-full bg-white rounded-3xl shadow dark:bg-gray-700">
							<div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
								{
									props.title && <h3 className="text-2xl font-bold text-blue-500 dark:text-white">
										{props.title}
									</h3>
								}
								<button onClick={props.close} type="button" className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
									<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
								</button>
							</div>
							<div className="p-6 space-y-6 min-w-1/3">
								{props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
