import React, {Component} from 'react';
import './sidebar.sass';


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
                    <div className="sidebar_subtitle" id="wikiAllPosts" data-show-content>Все заметки</div>
                    <div className="sidebar_subtitle">Создать заметку</div>
                </div>
                <div className="sidebar_menu">
                    <div className="sidebar_title">ToDo Лист</div>
                    <div className="line"></div>
                    <div className="sidebar_subtitle" id="todoAllTasks" data-show-content>Все листы</div>
                    <div className="sidebar_subtitle">Создать лист</div>
                </div>
            </section>
        )
    }
}
