import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import Icon from '../../icons/telegram.png';
import icon_title from '../../icons/telegram_icon.png';

export default function Header() {
	return (
		<div className={s.navBar} id='header'>
			<Link to='/' className={s.title}>
				<img src={icon_title} alt="title_icon" />
				<h1>PreJob</h1>
			</Link>
			<div className={s.telega}>
				<a href='#footer'>
					<img src={Icon} alt='icon' />
				</a>
			</div>
			</div>
		);
}
