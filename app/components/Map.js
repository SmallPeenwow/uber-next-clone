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

		addToMap(map);
	}, []);

	const addToMap = (map) => {
		const markerOne = new mapboxgl.Marker().setLngLat([12.554729, 55.70651]).addTo(map);
	};

	return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
	flex-1
`;
