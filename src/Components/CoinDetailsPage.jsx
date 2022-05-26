import React from "react";
import './CoinDetailsPage.css';
import Navbar from '../Components/Navbar';
import { useParams } from "react-router"
import { useState, useEffect } from "react";
const CoinDetailsPage = () => {

    const [item, setItem] = useState(null);

    const { id } = useParams()
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/" + id).then(res => res.json()
        ).then(coin => {
            // console.log(coin);
            setItem(coin);
        }, (error) => {
            if (error) {

            }
        }
        );
    })

    return (
        <div >

            <Navbar class="header" />
            {item == null ? null : <div class="details-page-parent">
                <div class="container" style={{

                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap-reverse'
                }}>
                    <div class="image"><img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" /></div>
                    <div> <h1>{item.id}</h1></div>

                    <div class="description" dangerouslySetInnerHTML={{ __html: item.description.en }}>
                    </div>
                    <h3>Rank:<span>{item.market_cap_rank} </span></h3 >
                    <h3>Current Price:<span> {item.market_data.current_price.usd}</span></h3 >
                    <h3>Market Cap:<span> {(
                        item.market_data.market_cap.usd /
                        1_000_000
                    ).toFixed(2)}</span></h3 >
                </div>

            </div>}

        </div>
    );
}


export default CoinDetailsPage;
