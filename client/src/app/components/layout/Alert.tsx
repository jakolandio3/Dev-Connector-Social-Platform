import React from 'react';
import clsx from 'clsx';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { alerts } from '@/reducers/alert';
export default function Alert() {
	const alerts: alerts[] | unknown[] | [] = useTypedSelector(
		(store) => store.alert
	);
	if (alerts.length === 0 || alerts === null) return;
	return (
		<>
			{alerts.map((alert) => (
				<div
					key={(alert as alerts).id}
					className={clsx(
						(alert as alerts).alertType === 'danger' && 'bg-danger',
						(alert as alerts).alertType === 'success' && 'bg-success',
						' p-3 my-4 opacity-90 text-white'
					)}
				>
					{(alert as alerts).msg}
				</div>
			))}
		</>
	);
}
