import React from "react";
import './SearchPage.css';
import Navbar from '../Components/Navbar';
import {
    Link
} from "react-router-dom";
import { useState } from "react";

import { connect } from "react-redux";
import {
    addToCarrentsList,
    //   changeTheme,
} from "../redux/searchPanel/searchingPanel-actions";

const SearchPage = ({ addToCarrentsList }) => {
    const [items, setItems] = useState(null);

    const getInputValue = (event) => {
        var userValue = event.target.value;
        userValue = userValue.replace(",", "%2C")
        console.log(userValue);
        if (userValue != "") {
            loadItem(userValue);
        }

    };

    const loadItem = (listOFCoins) => {
        console.log(listOFCoins);
        // axios.get('`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${listOFCoins}&order=market_cap_desc&per_page=100&page=1&sparkline=false`')
        //     .then(response => {
        //         console.log(response);
        //     });
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${listOFCoins}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res => res.json()
        ).then(coins => {
            setItems(coins);
            addToCarrentsList(coins);
            console.log(coins);
        }, (error) => {
            if (error) {
                console.log(error);
                setItems(null);
            }
        }
        );
    }

    return (
        <div >
            <Navbar class="header" />
            <div class="details-page-parent">
                <div class="container" style={{

                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap-reverse'
                }}>
                    <div class="title-container" style={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'column',

                    }}>
                        <div> <h1>Search  Coin</h1></div>
                        <small>Get Information From Here</small>

                    </div>

                    <div className="search-list" style={{

                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'column',

                    }}>
                        <div class="search-list-title">Cryptocurrency Price By Market Cap</div>

                        <div class="list" style={{

                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column',

                        }}>
                            <div class="form-container" >
                                <form class="search-form" method="get" action="" style={{

                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',

                                }}>

                                    <input type="text" name="form-input" class="form-input" placeholder="Search for a crypto currency" onChange={getInputValue} />
                                    <input type="submit" name="form-btn" class="form-btn" value="Search" />

                                </form>
                            </div>

                            <div class="list-header"
                                style={{

                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',

                                }}>
                                <div class="coin-field" >Coin</div>
                                <div class="price-field">Price</div>
                                <div class="change24-field">24 Change</div>
                                <div class="market-cap-field">Market Cap</div>
                            </div>
                            {
                                items == null ? null :

                                    items.map(coin =>
                                        <Link to={"/CoinDetailsPage/" + coin.id} class="list-item" >
                                            <div class="list-item"
                                                style={{

                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexDirection: 'row',

                                                }}>
                                                <div class="coin-field" >
                                                    <div class="box"  >

                                                        <div class="coin-item" style={{

                                                            display: 'flex',
                                                            justifyContent: 'space-around',
                                                            alignItems: 'center',
                                                            flexDirection: 'row',

                                                        }}>
                                                            <div class="coin-image">
                                                                <img src={coin.image} alt="" />
                                                            </div>
                                                            <div class="coin-details">
                                                                <div class="coin-abbr-name">
                                                                    {coin.symbol}
                                                                </div>
                                                                <div class="coin-full-name">
                                                                    {coin.id}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="price-field">{coin.current_price}</div>
                                                {coin.price_change_24h > 0 ?
                                                    <div class="green-24change-field">{coin.price_change_24h}</div> :
                                                    <div class="red-24change-field">{coin.price_change_24h}</div>
                                                }

                                                <div class="market-cap-field">{coin.market_cap}</div>
                                            </div>
                                        </Link>
                                    )
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCarrentsList: (items) => dispatch(addToCarrentsList(items)),
    };
};

export default connect(null, mapDispatchToProps)(SearchPage);
