import React from "react";
import './SearchPage.css';
import Navbar from '../Components/Navbar';

const SearchPage = () => {
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
                                                    <img src="" alt="" />
                                                </div>
                                                <div class="coin-details">
                                                    <div class="coin-abbr-name">
                                                        BTC
                                                    </div>
                                                    <div class="coin-full-name">
                                                        Bitcoin
                                                    </div>
                                                </div>
                                            </div>
                                       
                                    </div>
                                </div>
                                <div class="price-field">$23424.234</div>
                                <div class="change24-field">-2.83%</div>
                                <div class="market-cap-field">$23424.234</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}


export default SearchPage;
