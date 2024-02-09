'use client';
import { addPost } from '@/actions/post';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PostForm() {
	const dispatch = useDispatch<any>();
	const [text, setText] = useState<string>('');
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(addPost({ text }));
		setText('');
	}
	return (
		<div className='mt-8'>
			<div className='bg-primary p rounded-md'>
				<h3 className='p-2 font-bold'>Say Something...</h3>
			</div>
			<form className=' my-4' onSubmit={(e) => onSubmit(e)}>
				<textarea
					className='w-full border border-primary italic p-4 rounded-md'
					name='text'
					cols={30}
					rows={5}
					placeholder='Create a post'
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				></textarea>
				<input
					type='submit'
					className='text-xl p-2 text-center m-1 my-4 border cursor-pointer hover:opacity-80  bg-primary rounded-md text-white'
					value='Submit'
				/>
			</form>
		</div>
	);
}
