'use client';

import Map from '@/components/Map';
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useSearchParams } from 'next/navigation';
import RideSelector from '@/components/RideSelector';
import Link from 'next/link';

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
			<BackButtonContainer>
				<div className='w-9 bg-white rounded-full hover:scale-95 transition'>
					<Link href='/pages/search'>
						<BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
					</Link>
				</div>
			</BackButtonContainer>

			<Map pickupCoordinates={pickupCoordinates} dropOffCoordinates={dropOffCoordinates} />

			<RideContainer>
				<RideSelector />

				<ConfirmButtonContainer>
					<ConfirmButton>Confirm UberX</ConfirmButton>
				</ConfirmButtonContainer>
			</RideContainer>
		</Wrapper>
	);
};

export default Confirm;

const Wrapper = tw.div`
    flex flex-col h-screen relative
`;

const RideContainer = tw.div`
	flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
	border-t-2 
`;

const ConfirmButton = tw.div`
	bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer hover:scale-95 transition
`;

const BackButtonContainer = tw.div`
	absolute top-3 left-3 flex items center z-[90]
`;

const BackButton = tw.img`
	h-9 w-9 cursor-pointer 
`;
