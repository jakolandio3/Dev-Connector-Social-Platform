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
import LoadingScreen from '../components/layout/LoadingScreen';

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
				<LoadingScreen />
			) : (
				<>
					<code className=' text-primary text-4xl font-extrabold '>
						{'<'}Posts{'>'}
					</code>
					<p className='text-2xl text-[cornsilk]'>
						<i className='fas fa-signs-post mt-4'></i> {'<'}Welcome to the
						community{'/>'}
					</p>
					<PostForm />
					<PostItem post={posts} dispatchFunction={dispatch} />
					<code className=' text-primary text-4xl font-extrabold '>
						{'</'}Posts{'>'}
					</code>
				</>
			)}
		</PrivateRoute>
	);
}
