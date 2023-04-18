import React from 'react';
import s from './index.module.css';
import QRcode from '../../icons/qrcode.jpg';

export default function Footer() {
	return (
		<div className={s.footer} id='footer'>
			<div className={s.qr_code}>
				<img src={QRcode} alt='code' />
			</div>
			<a href='https://t.me/+QLDLvXyOn0VkZjM6' >
				<button className={s.btn}>Leave your feedback</button>
			</a>
			
		</div>
	);
}
