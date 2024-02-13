import { deleteComment } from '@/actions/post';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';

export default function CommentItem({
	comment: { user, text, name, avatar, _id, date },
	postId,
}: {
	comment: {
		user: string;
		text: string;
		name: string;
		avatar: string;
		_id: string;
		date: string;
	};
	postId: string;
}) {
	const dispatch = useDispatch<any>();
	const auth = useTypedSelector((state) => state.auth);
	return (
		<div className='flex flex-col w-[80%]   rounded-xl p-1 my-4'>
			<div className='flex text-center items-center border rounded-t-xl p-1 border-[cornsilk]'>
				<Link href={`/profile/${user}`}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className='rounded-full w-[48px]'
						src={`https:${avatar}`}
						alt=''
					/>
				</Link>
				<h4 className='font-extrabold text-center text-xs w-full text-primary'>
					<code>
						-{'<'}
						{name}
						{'/>'}
					</code>
				</h4>
				<div className='flex w-full justify-end'>
					{!auth.loading && user === (auth.user as any)._id && (
						<button
							type='button'
							onClick={() => dispatch(deleteComment(_id, postId))}
							className='text-sm  px-1 text-center hover:opacity-80'
						>
							❌
						</button>
					)}
				</div>
			</div>
			<div className='flex flex-col w-full justify-between'>
				<div className='flex flex-row w-full gap-12 justify-between'>
					<div className='text-left w-full pl-5 italic bg-light rounded-b-xl '>
						<p className='my-4'>
							{'"'}
							{text}
							{'"'}
						</p>
					</div>
				</div>
				<p className='text-xs italic text-[#aaa] text-center'>
					Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
				</p>
			</div>
		</div>
	);
}
