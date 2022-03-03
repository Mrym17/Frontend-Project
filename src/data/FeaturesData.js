import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Web Development',
		description: 'We provide the development by using latest technologies.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'one',
	},
	{
		name: 'Frontent Design',
		description: 'We provide the most innovative designs.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Graphic Design',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Security',
		description: 'Our team takes care of your security.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'four',
	},
	{
		name: 'Reliability',
		description: 'We develope our software with high quality code which is bug free.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'five',
	},
	{
		name: 'Scalable',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'six',
	},
];
