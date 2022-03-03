import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import {hero1, hero2 } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Content {...hero1} />
			<Content {...hero2} />
			<Carousel />
		</>
	);
};

export default Home;
