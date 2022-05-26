import React from "react";
import './HomePage.css';
import {
  Link
} from "react-router-dom";



const HomePage = () => {
  return (
    <div id="parent">
      <div id="wide" style={{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <div className="headingTexts">
          <h1 id="search-h1">Search & </h1>
          <h1 id="buy-h1">Buy <span>Crypto</span> </h1>
        </div>

        <div className="smallTexts">
          <small>Shahid Beheshti University</small>
          <small>IE Final Project</small>
        </div>
        <Link to="/SearchPage" > <button class="search-button">SEARCH MORE</button></Link>
        
      </div>
      <div id="narrow" style={{

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
      >
        <button class="change-theme-button">Change Theme</button>
        <div class="coin-list">
          <center>
            <div class="container" style={{

              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              {[1, 2, 3]
                .map(product => <div class="box"  >
                  <center>
                    <div id="coin-item">
                      <div id="coin-image">
                        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                      </div>
                      <div id="coin-details">
                        <div id="coin-name">
                          $29355
                        </div>
                        <div id="coin-price">
                          Bitcoin
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


export default HomePage;