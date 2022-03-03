import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [

	{
		title: 'Ask Us',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Contact',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Know More',
		links: ['Social', 'Events', 'Stories', 'Office'],
	},

	
];
