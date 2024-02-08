'use client';
import { getGithubRepos } from '@/actions/profile';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ProfileGithub({ username }: { username: string }) {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(getGithubRepos(username));
	}, [dispatch, username]);
	const { repos } = useTypedSelector((state) => state.profile);
	return (
		<div>
			<h2 className='text-primary text-2xl text-center font-bold mt-6'>
				Github Repos
			</h2>
			{repos === null && (
				<span className='loading loading-spinner loading-lg'></span>
			)}
			{(repos as any[]).map((repo, index) => (
				<div
					key={index}
					className='border-b border-dashed  m-4 p-4 border-primary flex flex-row gap-4 justify-between'
				>
					<div className='w-[50%]'>
						<h4>
							<Link
								href={repo.html_url}
								target='_blank'
								className='inline-block bg-dark text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1 text-center'
							>
								{repo.name}
							</Link>
						</h4>
						<p className='italic'>{repo.description}</p>
					</div>
					<div className=''>
						<ul className='min-w-fit'>
							<li className='text-xl p-1 text-center m-1 border text-[#333] bg-primary rounded-md text-white'>
								Stars: {repo.stargazers_count}
							</li>
							<li className='text-xl p-1 m-1 border text-[#333] bg-dark rounded-md text-white'>
								Watchers: {repo.watchers}
							</li>
							<li className='text-xl p-1 text-center m-1 border text-[#333] bg-white rounded-md'>
								Forks: {repo.forks}
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
