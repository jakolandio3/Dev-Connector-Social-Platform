import { addComment } from '@/actions/post';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CommentForm({ postId }: { postId: string }) {
	const dispatch = useDispatch<any>();
	const [text, setText] = useState<string>('');
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(addComment({ text }, postId));
		setText('');
	}
	return (
		<div className='mt-8'>
			<div className='bg-primary p-1 rounded-md'>
				<h3>Leave A Comment</h3>
			</div>
			<form
				className='w-full  italic  mt-2 rounded-md'
				onSubmit={(e) => onSubmit(e)}
			>
				<textarea
					name='text'
					className='w-full border border-primary italic p-4 rounded-md'
					cols={30}
					rows={5}
					placeholder='Comment on this post'
					required
					value={text}
					onChange={(e) => setText(e.target.value)}
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
