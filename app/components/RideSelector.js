'use client';

import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '@/data/carList';

const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {
	const [rideDuration, setRideDuration] = useState(0);

	useEffect(() => {
		fetch(
			`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?overview=false&alternatives=false&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
		)
			.then((res) => res.json())
			.then((data) => {
				setRideDuration(data.routes[0]?.duration / 100);
			});
	}, [pickUpCoordinates, dropOffCoordinates]);

	return (
		<Wrapper>
			<Title>Choose a ride, or swipe up for more</Title>

			<CarList>
				{carList.map((car, index) => (
					<Car key={index}>
						<CarImage src={car.imgUrl} />
						<CarDetails>
							<Service>{car.service}</Service>
							<Time>5 min away</Time>
						</CarDetails>
						<Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
					</Car>
				))}
			</CarList>
		</Wrapper>
	);
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1 overflow-y-hidden flex flex-col
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
    overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const Price = tw.div`
    text-sm
`;
