'use client';

import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Home() {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [0, 0],
			zoom: 3,
		});
	}, []);

	// const map = new mapboxgl.Map({
	// 	container: 'map',
	// 	style: 'mapbox://styles/mapbox/streets-v11',
	// });

	return (
		<Wrapper>
			<Map id='map'></Map>
			<ActionItems>Map</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.main`
	flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
flex-1 bg-red-500
`;

const ActionItems = tw.div`
flex-1
`;
