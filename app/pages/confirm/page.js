'use client';

import Map from '@/components/Map';
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useSearchParams } from 'next/navigation';

const Confirm = () => {
	const searchParams = useSearchParams();

	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [dropOffCoordinates, setDropOffCoordinates] = useState();

	const getPickupCoordinates = (pickup) => {
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
				new URLSearchParams({ access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN, limit: 1 })
		)
			.then((response) => response.json())
			.then((data) => {
				setPickupCoordinates(data.features[0].center);
			});
	};

	const getDropOffCoordinates = (dropOff) => {
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
				new URLSearchParams({ access_token: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN, limit: 1 })
		)
			.then((response) => response.json())
			.then((data) => {
				setDropOffCoordinates(data.features[0].center);
			});
	};

	useEffect(() => {
		getPickupCoordinates(searchParams.get('pickup'));
		getDropOffCoordinates(searchParams.get('dropOff'));
	}, []);

	return (
		<Wrapper>
			<Map pickupCoordinates={pickupCoordinates} dropOffCoordinates={dropOffCoordinates} />

			<RideContainer>
				Ride Selector Confirm Button {pickupCoordinates} {dropOffCoordinates}
			</RideContainer>
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
