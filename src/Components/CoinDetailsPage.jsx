import React from "react";
import './CoinDetailsPage.css';
import Navbar from '../Components/Navbar';

const CoinDetailsPage = () => {
    return (
        <div >
            <Navbar class="header" />
            <div class="details-page-parent">
                <div class="container" style={{

                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap-reverse'
                }}>
                    <div class="image"><img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" /></div>
                    <div> <h1>Bitcoin</h1></div>

                    <div class="description">
                        test test test test test test test test test test test test test test test test test test test test test test test test test testtest testtest testtest test test testtest testtest testtest testtest testtest testtest testtest testtest testtest test test test test test test testtest test test test test test test test test testtest testtest test test testtest testtest test test testtest test
                    </div>
                    <h3>Bitcoin:<span> $ 557,123M</span></h3 >
                    <h3>Current Price:<span> $ 557,123M</span></h3 >
                    <h3>Market Cap:<span> $ 557,123M</span></h3 >
                </div>

            </div>
        </div>
    );
}


export default CoinDetailsPage;
