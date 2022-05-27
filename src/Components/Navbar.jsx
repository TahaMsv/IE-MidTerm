import React from "react";
import './Navbar.css';
import { connect } from "react-redux";

import {
    changeTheme,
} from "../redux/searchPanel/searchingPanel-actions";


const Navbar = ({ isDarkMode, changeTheme }) => {
    return (
        <div>
            <ul class={(isDarkMode ? 'dark-ul' : 'light-ul')}>
                <li class={"title" + " " + (isDarkMode ? 'dark-title' : 'light-title')} ><h4>IE Final Project</h4></li>
                <li  >
                    <button class={"change-theme-btn" + " " + (isDarkMode ? 'dark-change-theme-btn' : 'light-change-theme-btn')}
                        onClick={() => changeTheme()}> Change Theme</button></li>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isDarkMode: state.shop.isDarkMode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: () => dispatch(changeTheme()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
