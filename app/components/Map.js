'use client';

import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = (props) => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [0, 0],
			zoom: 3,
		});

		if (props.pickupCoordinates) {
			addToMap(map, props.pickupCoordinates);
		}

		if (props.dropOffCoordinates) {
			addToMap(map, props.dropOffCoordinates);
		}

		if (props.pickupCoordinates && props.dropOffCoordinates) {
			map.fitBounds([props.dropOffCoordinates, props.pickupCoordinates], { padding: 60 });
		}
	}, [props.pickupCoordinates, props.dropOffCoordinates]);

	const addToMap = (map, coordinates) => {
		const markerOne = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

	return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
	flex-1 h-1/2
`;
