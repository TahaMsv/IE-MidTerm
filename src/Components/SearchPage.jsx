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
    changeTheme,
} from "../redux/searchPanel/searchingPanel-actions";

const SearchPage = ({ addToCarrentsList, isDarkMode }) => {
    const [items, setItems] = useState(null);

    const getInputValue = (event) => {  // تابعی است برای خواندن ورودی ها از اینپوت فیلد
        var userValue = event.target.value;
        userValue = userValue.replace(",", "%2C") // آماده سازی آیدی کوین ها برای فچ کردن و گذاشتن در یو آر ال
        // console.log(userValue);
        if (userValue != "") {
            loadItem(userValue);
        }

    };

    const loadItem = (listOFCoins) => {
        console.log(listOFCoins);
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${listOFCoins}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res => res.json()
        ).then(coins => {  // کوین ها را فچ کرده
            setItems(coins);
            addToCarrentsList(coins);  // سیو در لیست آخرین سرچ ها در ریداکس
            seveInLocalStotrage(coins); // سیو در لوکال استوریج
            
        }, (error) => {
            if (error) {
                console.log(error);
                setItems(null);
            }
        }
        );
    }

   const  seveInLocalStotrage = (coins) => {
        var items = JSON.parse(localStorage.getItem('items'));  // پارس کردن استرینگ درون لوکال استوریج
        if(!items){
            items =[];
        }
        coins.filter(coin => {  // داده های تکراری را از لیست حذف و دوباره اد میکنیم. اگر هم تکراری نبود اد میکنیم مستقیم.
            items = items.filter(item => item.id !== coin.id);
            items.push(coin);
          })
          if (items.length > 3) {  // سه تا سرچ آخر را نگه میداریم
            items = items.slice(-3);
          }
    
          localStorage.setItem('items', JSON.stringify(items)); // ئدر لوکال استوریج ذخیرخ میکنیم
      };

    return (
        <div >
            <Navbar class="header" />
            <div class="page-parent">
                <div class="container" style={{

                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // flexWrap: 'wrap-reverse'
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
<div className="divider"></div>
                    <div
                        class={"search-list" + " " + (isDarkMode ? 'dark-search-list' : 'light-search-list')}
                        style={{

                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column',

                        }}>
                        <div class={"search-list-title" + " " + (isDarkMode ? 'dark-search-list-title' : 'light-search-list-title')}
                        >Cryptocurrency Price By Market Cap</div>

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

                                </form>
                            </div>

                            <div class="list-header"
                                style={{

                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',

                                }}>
                                <div class="coin-field " >Coin</div>
                                <div class="price-field">Price</div>
                                <div class="change24-field">24 Change</div>
                                <div class="market-cap-field">Market Cap</div>
                            </div>
                            {
                                items == null ? null :

                                    items.map(coin =>
                                        <Link to={"/CoinDetailsPage/" + coin.id} class="list-item" >
                                            <div   class={"list-item" + " " + (isDarkMode ? 'dark-border-bottom' : 'light-border-bottom')}
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
                                                            <div  class={"coin-details" + " " + (isDarkMode ? 'dark-coin-details' : 'light-coin-details')}>
                                                                <div class={"coin-abbr-name" + " " + (isDarkMode ? 'dark-coin-abbr-name' : 'light-coin-abbr-name')}>
                                                                    {coin.symbol}
                                                                </div>
                                                                <div class={"coin-full-name" + " " + (isDarkMode ? 'dark-coin-full-name' : 'light-coin-full-name')} >
                                                                    {coin.id}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div  class={"price-field" + " " + (isDarkMode ? 'dark-price-field' : 'light-price-field')}>{coin.current_price}</div>
                                                {coin.price_change_24h > 0 ?
                                                    <div class="green-24change-field">{coin.price_change_24h}</div> :
                                                    <div class="red-24change-field">{coin.price_change_24h.toFixed(2)}</div>
                                                }

                                                <div  class={"market-cap-field" + " " + (isDarkMode ? 'dark-market-cap-field' : 'light-market-cap-field')}>{(coin.market_cap / 1000000).toFixed(2)}</div>
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



const mapStateToProps = (state) => {
    return {
        isDarkMode: state.shop.isDarkMode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCarrentsList: (items) => dispatch(addToCarrentsList(items)),
        changeTheme: () => dispatch(changeTheme()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);