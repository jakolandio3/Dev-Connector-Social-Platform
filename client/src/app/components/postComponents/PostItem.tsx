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
						className='flex w-full gap-8  bg-light border border-primary rounded-md p-4 my-4'
						key={post._id}
					>
						<div className='flex'>
							<Link className='' href={`/profile/${post.user}`}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className='rounded-full'
									src={`https:${post.avatar}`}
									alt='avatar'
								/>
								<h4 className='font-extrabold text-center text-primary'>
									<code>
										{'<'}
										{post.name}
										{'/>'}
									</code>
								</h4>
							</Link>
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
										{!auth.loading && post.user === (auth.user as any)._id && (
											<button
												type='button'
												onClick={() => dispatchFunction(deletePost(post._id))}
												className='hidden md:inline-block text-xl p-1 px-3 text-center m-1 hover:opacity-80 border bg-red-800 rounded-md text-white'
											>
												<i className='fas fa-times'></i>
											</button>
										)}
										<div className='md:hidden dropdown'>
											<div
												tabIndex={0}
												role='button'
												className=' bg-[cornsilk] hover:opacity-80 text-xl py-1 border-black text-black font-extrabold  m-1  px-3 rounded-md'
											>
												<i className='fa-solid fa-bars'></i>
											</div>
											<ul
												tabIndex={0}
												className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-30'
											>
												<li>
													<Link
														href={`/post/${post._id}`}
														className='text-sm p-2 text-center m-1 border hover:opacity-80  bg-primary rounded-md text-white'
													>
														Comments{' '}
													</Link>
												</li>
												<li>
													{!auth.loading &&
														post.user === (auth.user as any)._id && (
															<button
																type='button'
																onClick={() =>
																	dispatchFunction(deletePost(post._id))
																}
																className='text-sm p-1 px-3 text-center m-1 hover:opacity-80 border bg-red-800 rounded-md text-white'
															>
																<span>DELETE</span>{' '}
																<i className='fas fa-times'></i>
															</button>
														)}
												</li>
											</ul>
										</div>
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
