import React from 'react';
import Items from '../Items/Items';
import Banner from './Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import HomeBanner from './HomeBanner/HomeBanner';
import Info from './Info/Info';
import Repair from './Repair/Repair';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Repair></Repair>
            <CustomerReview></CustomerReview>
            <HomeBanner></HomeBanner>
            <Info></Info>
        </div>
    );
};

export default Home;