import React, { useState, useEffect } from 'react';

import BetterBookkeeping from '../components/BetterBookkeeping.component'

const HomePage: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = useState('rgb(28, 23, 28)');

    return (


        <div >
            <BetterBookkeeping id="betterbookkeeping" />


        </div >


    );


}


export default HomePage;