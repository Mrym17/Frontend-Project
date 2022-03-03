export const data = [
	{
		title: 'Bid Data Projects',
		description:
			'Helping and assiting in tackling a variety of big data projects.',
		image: './assets/data1.jpeg',
	},
	{
		title: 'Cyber Security Project ',
		description: 'Associated with multiple tech companies with their cyber security projects.',
		image: './assets/secure.jpg',
	},
	{
		title: 'Web Development',
		description: 'We have THE BEST web developing team to develop and design innovative websites for you.',
		image: './assets/web.jpg',
	},
	{
		title: 'UI/UX Designs',
		description: 'Explore about the latest UI/UX techniques by our team out there.s',
		image: './assets/ui.jpg',
	},
	{
		title: 'Latest technologies',
		description: 'Explore about the latest technologies that we use...',
		image: './assets/robo.jpg',
	},

];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
