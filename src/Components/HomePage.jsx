import React from "react";
import './HomePage.css';
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
        <button class="search-button">SEARCH MORE</button>
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
              <div class="box" id="st-box" >
                <center>
                  <div id="coin-item">
                    <div id="coin-image">
                      <img src="" alt="" />
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
              </div>

              <div class="box" id="nd-box">
              </div>

              <div class="box" id="rd-box">

              </div>
            </div>
          </center>

        </div>

      </div>
    </div>
  );
}


export default HomePage;
