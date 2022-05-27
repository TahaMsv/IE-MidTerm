import React from "react";
import './HomePage.css';
import {
  Link
} from "react-router-dom";
import { connect } from "react-redux";

import {
  changeTheme,
} from "../redux/searchPanel/searchingPanel-actions";

const HomePage = ({ items, isDarkMode, changeTheme }) => {
  return (
    <div id="parent" class={(isDarkMode ? 'dark-background' : 'light-background ')}>
      <div id="wide" style={{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <div class={"headingTexts" + " " + (isDarkMode ? 'dark-headingTexts' : 'light-headingTexts')}>
          <h1 >Search & </h1>
          <h1 id="buy-h1" >Buy <span>Crypto</span> </h1>
        </div>

        <div class={"smallTexts" + " " + (isDarkMode ? 'dark-smallTexts' : 'light-smallTexts')}>
          <small>Shahid Beheshti University</small>
          <small>IE Final Project</small>
        </div>
        <Link to="/SearchPage" > <button class={"search-button" + " " + (isDarkMode ? 'dark-search-button' : 'light-search-button')}>SEARCH MORE</button></Link>

      </div>
      <div id="narrow" style={{

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
      >
        <button class={"change-theme-button" + (isDarkMode ? '' : ' dark-change-theme-button')}
          onClick={() => changeTheme()}>Change Theme</button>
        <div class="coin-list">
          <center>
            <div class="container" style={{

              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              {items
                .map(coin => <div class={"box" + " " + (isDarkMode ? 'dark-box' : 'light-box ')} onClick={() => changeTheme()}   >
                  <center>
                    <div id="coin-item" class={"coin-item" + " " + (isDarkMode ? 'dark-coin-item' : 'light-coin-item')}>
                      <div id="coin-image">
                        <img src={coin.image} alt="" />
                      </div>
                      <div id="coin-details">
                        <div class={"coin-name" + " " + (isDarkMode ? 'dark-coin-name' : 'light-coin-name')}>
                          ${coin.current_price}
                        </div>
                        <div id="coin-price">
                          {coin.id}
                        </div>
                      </div>
                    </div>
                  </center>
                </div>)}
            </div>
          </center>

        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.shop.currentList,
    isDarkMode: state.shop.isDarkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: () => dispatch(changeTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
