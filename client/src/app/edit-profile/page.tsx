'use client';
import React, { useEffect, useState } from 'react';
import PrivateRoute from '../components/routing/PrivateRoute';
import { useDispatch } from 'react-redux';
import { createProfile, getCurrentProfile } from '@/actions/profile';
import { useRouter } from 'next/navigation';
import Alert from '../components/layout/Alert';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';

export default function EditProfile() {
	const { profile, loading } = useTypedSelector((state) => state.profile);
	const [showSocialInputs, setShowSocialInputs] = useState(false);
	const dispatch = useDispatch<any>();
	const router = useRouter();
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	});
	useEffect(() => {
		dispatch(getCurrentProfile());
		setFormData({
			company:
				loading || !(profile as any).company ? '' : (profile as any).company,
			website:
				loading || !(profile as any).website ? '' : (profile as any).website,
			location:
				loading || !(profile as any).location ? '' : (profile as any).location,
			status:
				loading || !(profile as any).status ? '' : (profile as any).status,
			skills:
				loading || !(profile as any).skills
					? ''
					: (profile as any).skills.join(','),
			githubusername:
				loading || !(profile as any).githubusername
					? ''
					: (profile as any).githubusername,
			bio: loading || !(profile as any).bio ? '' : (profile as any).bio,
			twitter:
				loading || !(profile as any).social
					? ''
					: (profile as any).social.twitter,
			facebook:
				loading || !(profile as any).social
					? ''
					: (profile as any).social.facebook,
			linkedin:
				loading || !(profile as any).social
					? ''
					: (profile as any).social.linkedin,
			youtube:
				loading || !(profile as any).social
					? ''
					: (profile as any).social.youtube,
			instagram:
				loading || !(profile as any).social ? '' : (profile as any).instagram,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);
	function onChange(
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	): void {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		dispatch(createProfile(formData, router, true));
	}

	function toggleSocialInput() {
		setShowSocialInputs((showSocialInputs) => !showSocialInputs);
	}
	return (
		<PrivateRoute>
			<Alert />
			<code>
				<h1 className='text-3xl text-primary'>
					{'<'}Edit Your Profile{'>'}
				</h1>
			</code>
			<p className='text-lg my-4 text-[cornsilk]'>
				<i className='fas fa-user'></i> Let{"'"}s get some information to make
				your profile stand out
			</p>
			<small>* = required field</small>
			<form className='my-5' onSubmit={(e) => onSubmit(e)}>
				<div className='my-2 '>
					<select
						value={formData.status}
						onChange={(e) => onChange(e)}
						name='status'
						className='block w-full p-2 text-lg border border-gray-400 rounded-lg '
					>
						<option value='0'>* Select Professional Status</option>
						<option value='Developer'>Developer</option>
						<option value='Junior Developer'>Junior Developer</option>
						<option value='Senior Developer'>Senior Developer</option>
						<option value='Manager'>Manager</option>
						<option value='Student or Learning'>Student or Learning</option>
						<option value='Instructor'>Instructor or Teacher</option>
						<option value='Intern'>Intern</option>
						<option value='Other'>Other</option>
					</select>
					<small className='block mt-1 text-[#888]'>
						Give us an idea of where you are at in your career
					</small>
				</div>
				<div className='my-2'>
					<input
						type='text'
						placeholder='Company'
						value={formData.company}
						onChange={(e) => onChange(e)}
						name='company'
						className='block w-full p-2 text-lg border border-gray-400'
					/>
					<small className='block mt-1 text-[#888]'>
						Could be your own company or one you work for
					</small>
				</div>
				<div className='my-2'>
					<input
						type='text'
						placeholder='Website'
						name='website'
						value={formData.website}
						onChange={(e) => onChange(e)}
						className='block w-full p-2 text-lg border border-gray-400 '
					/>
					<small className='block mt-1 text-[#888]'>
						Could be your own or a company website
					</small>
				</div>
				<div className='my-2'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={formData.location}
						onChange={(e) => onChange(e)}
						className='block w-full p-2 text-lg border border-gray-400 '
					/>
					<small className='block mt-1 text-[#888]'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className='my-2'>
					<input
						type='text'
						placeholder='* Skills'
						name='skills'
						value={formData.skills}
						onChange={(e) => onChange(e)}
						className='block w-full p-2 text-lg border border-gray-400 '
					/>
					<small className='block mt-1 text-[#888]'>
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
				</div>
				<div className='my-2'>
					<input
						type='text'
						placeholder='Github Username'
						name='githubusername'
						value={formData.githubusername}
						onChange={(e) => onChange(e)}
						className='block w-full p-2 text-lg border border-gray-400 '
					/>
					<small className='block mt-1 text-[#888]'>
						If you want your latest repos and a Github link, include your
						username
					</small>
				</div>
				<div className='my-2'>
					<textarea
						placeholder='A short bio of yourself'
						className='block w-full p-2 text-lg border border-gray-400 '
						name='bio'
						value={formData.bio}
						onChange={(e) => onChange(e)}
					></textarea>
					<small className='block mt-1 text-[#888]'>
						Tell us a little about yourself
					</small>
				</div>

				<div className='my-2'>
					<button
						onClick={toggleSocialInput}
						type='button'
						className='inline-block bg-light text-[#333] mr-2 py-2 px-5 rounded-xl hover:opacity-80 my-1'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>

				{showSocialInputs && (
					<>
						<div className='my-2 flex gap-4'>
							<i className='w-[30px] text-[#38a1f3] fab fa-twitter fa-2x'></i>
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={formData.twitter}
								onChange={(e) => onChange(e)}
								className='block w-full p-2 text-lg border border-gray-400 '
							/>
						</div>
						<div className='my-2 flex gap-4'>
							<i className='w-[30px] fab fa-facebook fa-2x text-[#3b5998]'></i>
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={formData.facebook}
								onChange={(e) => onChange(e)}
								className='block w-full p-2 text-lg border border-gray-400 '
							/>
						</div>
						<div className='my-2 flex gap-4'>
							<i className='w-[30px] fab fa-youtube fa-2x text-[#c4302b]'></i>
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={formData.youtube}
								onChange={(e) => onChange(e)}
								className='block w-full p-2 text-lg border border-gray-400 '
							/>
						</div>
						<div className='my-2 flex gap-4'>
							<i className='w-[30px] fab fa-linkedin fa-2x text-[#0077b5]'></i>
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={formData.linkedin}
								onChange={(e) => onChange(e)}
								className='block w-full p-2 text-lg border border-gray-400 '
							/>
						</div>
						<div className='my-2 flex gap-4'>
							<i className='w-[30px] fab fa-instagram fa-2x text-[#3f729b]'></i>
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={formData.instagram}
								onChange={(e) => onChange(e)}
								className='block w-full p-2 text-lg border border-gray-400 '
							/>
						</div>{' '}
					</>
				)}
				<input
					type='submit'
					className='inline-block bg-primary text-white mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
				/>
				<Link
					className='inline-block bg-light text-[#333] mr-2 py-2 mt-4 px-5 rounded-xl hover:opacity-80 my-1'
					href='/dashboard'
				>
					Go Back
				</Link>
			</form>
			<code>
				<h1 className='text-3xl text-primary'>
					{'</'}Edit Your Profile{'>'}
				</h1>
			</code>
		</PrivateRoute>
	);
}
