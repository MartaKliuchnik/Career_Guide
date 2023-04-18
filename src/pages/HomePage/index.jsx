import React from 'react';
import s from './index.module.css';
import SearchBar from '../../components/SearchBar';


export default function HomePage() {
    return (
        <div className={s.container}>
            <SearchBar type='homePage' />
        </div>
    )
}
