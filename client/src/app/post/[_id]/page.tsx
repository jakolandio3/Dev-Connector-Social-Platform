'use client';
import { getPost } from '@/actions/post';
import PrivateRoute from '@/app/components/routing/PrivateRoute';
import { postState } from '@/reducers/post';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'react-moment';
import Alert from '@/app/components/layout/Alert';

import CommentForm from '@/app/components/postComponents/CommentForm';
import CommentItem from '@/app/components/postComponents/CommentItem';
import LoadingScreen from '@/app/components/layout/LoadingScreen';

export default function PostPage({ params }: { params: { _id: string } }) {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(getPost(params._id));
	}, [params._id, dispatch]);
	const profile = useTypedSelector((state) => state.profile);
	const { loading, post } = useTypedSelector((state) => state.post);
	return loading || post === null ? (
		<PrivateRoute>
			<LoadingScreen />
		</PrivateRoute>
	) : (
		<PrivateRoute>
			<Alert />
			<Link
				href={'/posts'}
				className='inline-block bg-primary text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
			>
				Back to Posts
			</Link>
			<div
				className='flex w-full gap-8  bg-light border border-primary rounded-md p-4 my-4'
				key={(post as postState)._id}
			>
				<div className='flex'>
					<Link className='' href={`/profile/${(post as postState).user}`}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className='rounded-full'
							src={`https:${(post as postState).avatar}`}
							alt='avatar'
						/>

						<h4 className='font-extrabold text-center text-primary'>
							<code>
								{'<'}
								{(post as postState).name}
								{'/>'}
							</code>
						</h4>
					</Link>
				</div>
				<div className='flex flex-col justify-between items-center w-[90%]'>
					<div className='text-center w-full text-xl pl-5 italic font-bold'>
						<p className='my-4'>
							{'"'}
							{(post as postState).text}
							{'"'}
						</p>
					</div>
					<div className=''>
						<p className='text-[#aaa] text-md italic mb-3 text-center'>
							Posted on{' '}
							<Moment format='DD/MM/YYYY'>{(post as postState).date}</Moment>
						</p>
					</div>
				</div>
			</div>
			<CommentForm postId={params._id} />
			<div>
				{(post as postState).comments.map((comment) => (
					<CommentItem
						key={comment._id}
						comment={comment}
						postId={params._id}
					></CommentItem>
				))}
			</div>
		</PrivateRoute>
	);
}
