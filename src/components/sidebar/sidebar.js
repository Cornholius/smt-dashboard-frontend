import React, {Component} from 'react';
import './sidebar.sass';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <section className="sidebar">
                <div className="sidebar_menu">
                    <div className="sidebar_title">Вики</div>
                    <div className="line"></div>
                    <Link className="sidebar_subtitle" to='/wiki'>Все заметки</Link>
                    <Link className="sidebar_subtitle" to='/createpost'>Создать заметку</Link>
                </div>
                <div className="sidebar_menu">
                    <div className="sidebar_title">ToDo Лист</div>
                    <div className="line"></div>
                    <Link className="sidebar_subtitle" to='/todo'>Все листы</Link>
                    <Link className="sidebar_subtitle" to='/createtodo'>Создать лист</Link>
                </div>
            </section>
        )
    }
}
