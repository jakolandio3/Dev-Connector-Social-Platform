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
		<div className='flex flex-row bg-light border-dashed border border-primary rounded-md gap-12  w-full  p-4 my-4'>
			<div className='flex text-center'>
				<Link href={`/profile/${user}`}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img className='rounded-full' src={`https:${avatar}`} alt='' />
					<h4 className='font-extrabold text-center text-primary'>
						<code>
							{'<'}
							{name}
							{'/>'}
						</code>
					</h4>
				</Link>
			</div>
			<div className='flex flex-col w-full justify-between'>
				<div className='flex flex-row w-full gap-12 justify-between'>
					<div className='text-left w-full pl-5 italic font-bold'>
						<p className='my-4'>
							{'"'}
							{text}
							{'"'}
						</p>
					</div>
					<div className=''>
						{!auth.loading && user === auth.user._id && (
							<button
								className='text-center'
								onClick={() => dispatch(deleteComment(_id, postId))}
							>
								❌
							</button>
						)}
					</div>
				</div>
				<p className='text-sm italic text-[#aaa] text-center'>
					Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
				</p>
			</div>
		</div>
	);
}
