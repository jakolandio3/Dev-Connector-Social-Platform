import React from 'react';
import Container from './Container';

export default function LoadingScreen() {
	return (
		<Container>
			<div className='bg-gray-600 absolute top-0 left-0 w-[100vw] flex justify-center h-full text-primary text-center items-center flex-col italic'>
				<span className='loading loading-ring w-[8rem]'></span>
				..Loading
			</div>
		</Container>
	);
}
