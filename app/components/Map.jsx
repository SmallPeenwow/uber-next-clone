'use client';

import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [0, 0],
			zoom: 3,
		});
	}, []);

	return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
	flex-1
`;
