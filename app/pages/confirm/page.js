'use client';

import Map from '@/components/Map';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';

const Confirm = () => {
	const getPickupCoordinates = () => {
		const pickup = 'Santa Monica';

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
				new URLSearchParams({ access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN, limit: 1 })
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.features[0].center);
			});
	};

	const getDropOffCoordinates = () => {
		const dropOff = 'Los Angeles';

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
				new URLSearchParams({ access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN, limit: 1 })
		)
			.then((response) => response.json())
			.then((data) => {
				console.log('DropOff');
				console.log(data.features[0].center);
			});
	};

	useEffect(() => {
		getPickupCoordinates();
		getDropOffCoordinates();
	}, []);

	return (
		<Wrapper>
			<Map />

			<RideContainer>Ride Selector Confirm Button</RideContainer>
		</Wrapper>
	);
};

export default Confirm;

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
	flex-1
`;
