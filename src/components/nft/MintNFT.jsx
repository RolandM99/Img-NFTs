import React, { useRef } from 'react';
import getContract from '../../packages/core/Contract';

const MintNFT = (props) => {
	const contract = getContract()

	const tokenIdRef = useRef(null)
	const toRef = useRef(null)
	const imageRef = useRef(null)

	const mint = async () => {

		if(!tokenIdRef.current.value){
			console.log('No tokenId, please add a tokenID');
		}

		if(!toRef.current.value){
			console.log('No to address, Kindly add it');
		}

		if(!imageRef.current.value){
			console.log('No image added');
		}
		
		try {
			await contract.mint(toRef.current.value, tokenIdRef.current.value, imageRef.current.value )
			console.log('Minted successfully');
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<div className='flex flex-col space-y-2 w-full'>
			<input ref={toRef} type="text" placeholder='Enter address' className='form-control bg-gray-50 border border-gray-300 ' required/>
			<input ref={tokenIdRef} type="text" placeholder='Enter img URL' className='form-control bg-gray-50 border border-gray-300 ' required/>
			<input ref={imageRef} type="text" placeholder='Enter TokenID' className='form-control bg-gray-50 border border-gray-300 '/>
			<div className="flex justify-center space-x-2">
			<button onClick={()=>mint()} className='btn btn-warning font-medium text-sm px-5 py-2.5 text-center'>CREATE</button>
			<button onClick={props.close} className='btn btn-danger font-medium text-sm px-5 py-2.5 text-center'>CLOSE</button>
			</div>
		</div>
	)
}

export default MintNFT;
