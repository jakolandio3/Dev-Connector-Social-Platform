'use client';
import { getPosts } from '@/actions/post';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from '../components/routing/PrivateRoute';
import { postState } from '@/reducers/post';
import PostItem from '../components/postComponents/PostItem';
import Alert from '../components/layout/Alert';
import PostForm from '../components/postComponents/PostForm';

export default function Posts() {
	const dispatch = useDispatch<any>();
	const { posts, loading } = useTypedSelector((state) => state.post);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<PrivateRoute>
			<Alert />
			{loading ? (
				<span className='loading loading-spinner loading-lg'></span>
			) : (
				<>
					<h1 className=' text-primary text-4xl '>Posts</h1>
					<p className='text-2xl'>
						<i className='fas fa-user mt-4'></i>Welcome to the community
					</p>
					<PostForm />
					<PostItem post={posts} dispatchFunction={dispatch} />
				</>
			)}
		</PrivateRoute>
	);
}
