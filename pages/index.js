import {
	useEffect
} from 'react';
import { useRouter } from 'next/router';

import ContainerFullscreen from '../src/components/container/fullscreen';
import Head from '../src/components/head/index';
import Logo from '../src/components/icon/logo';

const Home = () => {
	const router = useRouter();

	useEffect (function () {
		const timeoutReference = setInterval(function () {
			router.push(`/home`);
		}, 2000);
		return () => clearTimeout(timeoutReference);
	}, []);

	return (
		<ContainerFullscreen>
			<Head />
			<Logo />
		</ContainerFullscreen>
	);
};

export default Home;
