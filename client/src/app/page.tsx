'use client';
import { redirect } from 'next/navigation';
import Landing from './components/layout/Landing';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function Home() {
	const { isAuthenticated } = useTypedSelector((state) => state.auth);

	if (isAuthenticated) {
		return redirect('/dashboard');
	}

	return <Landing />;
}
