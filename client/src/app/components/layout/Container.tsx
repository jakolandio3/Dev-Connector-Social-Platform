import React, { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
	return (
		<section className=' max-w-[1100px] m-auto  overflow-hidden px-4 mt-24 mb-12'>
			{children}
		</section>
	);
}
