import React, {Component} from 'react';
import './header.sass';


export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <header className="header">
                <div className="header_logo">СМТ <span> Portal</span></div>
                <div className="navbar">
                    <div className="searchBar">
                        <input className="searchBar_input" type="text" name="" id=""></input>
                        <button className="btn searchBar_btn">Найти</button>
                    </div>
                    <div className="userBar">
                        <input className="userBar_login" type="text" placeholder="Логин"></input>
                        <input className="userBar_pass" type="password" placeholder="Пароль"></input>
                        <button className="btn userBar_btn">Войти</button>
                    </div>
                </div>

            </header>
        )
    }
}
