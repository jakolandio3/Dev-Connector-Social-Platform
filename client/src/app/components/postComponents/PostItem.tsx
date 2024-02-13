import { addLike, deletePost, removeLike } from '@/actions/post';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { postState } from '@/reducers/post';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';

export default function PostItem({
	dispatchFunction,
	post,
	showActions = true,
}: {
	dispatchFunction?: any;
	post: any;
	showActions?: boolean;
}) {
	const auth = useTypedSelector((state) => state.auth);

	return (
		<div className='grid grid-cols-1'>
			{(post as Array<postState>).map((post) => {
				return (
					<div
						className='flex flex-col w-full gap-2  bg-light border border-primary rounded-md p-4 my-4'
						key={post._id}
					>
						<div className='flex items-center gap-2'>
							<Link className='' href={`/profile/${post.user}`}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className='rounded-full w-[48px]'
									src={`https:${post.avatar}`}
									alt='avatar'
								/>
							</Link>
							<h4 className='font-extrabold text-left w-full text-primary '>
								<code>
									-{'<'}
									{post.name}
									{'/>'}
								</code>
							</h4>
							<div className='flex w-full justify-end'>
								{!auth.loading && post.user === (auth.user as any)._id && (
									<button
										type='button'
										onClick={() => dispatchFunction(deletePost(post._id))}
										className='text-sm  px-1 text-center hover:opacity-80'
									>
										❌
									</button>
								)}
							</div>
						</div>
						<div className='flex flex-col justify-between items-center w-[90%]'>
							<div className='text-left w-full pl-5 italic font-bold'>
								<p className='my-4'>
									{'"'}
									{post.text}
									{'"'}
								</p>
							</div>
							<div className=''>
								<p className='text-[#aaa] text-md italic mb-3 text-center'>
									Posted on <Moment format='DD/MM/YYYY'>{post.date}</Moment>
								</p>
								{showActions && (
									<>
										<button
											onClick={() => {
												dispatchFunction(addLike(post._id));
											}}
											type='button'
											className='text-xl p-1 text-center m-1 border hover:opacity-80  bg-primary rounded-md text-white'
										>
											<i className='fas fa-thumbs-up'></i>
											<span>
												{post.likes.length > 0 ? post.likes.length : ' '}
											</span>
										</button>
										<button
											onClick={() => dispatchFunction(removeLike(post._id))}
											type='button'
											className='text-xl p-1 text-center m-1 hover:opacity-80 px-2 border text-[#333] bg-red-600 rounded-md'
										>
											<i className='fas fa-thumbs-down'></i>
										</button>

										<Link
											href={`/post/${post._id}`}
											className='text-xl p-1 text-black text-center m-1 border hover:opacity-80  bg-[cornsilk] hidden  md:inline-block rounded-md'
										>
											Comments{' '}
											<span className='comment-count'>
												{'['}
												{post.comments.length > 0 ? post.comments.length : '0'}
												{']'}
											</span>
										</Link>

										<Link
											href={`/post/${post._id}`}
											className='text-xl p-1 px-3 text-center m-1 border md:hidden hover:opacity-80  bg-[cornsilk] rounded-md text-black'
										>
											<i className='fa-solid fa-comments'></i>
										</Link>
									</>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
