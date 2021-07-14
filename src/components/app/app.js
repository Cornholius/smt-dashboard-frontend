import React, {Component} from 'react';
import './app.sass';
import '../../fonts/stylesheet.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    tags: ['жопа', 'ололо', 'какой_то_калл', 'ВсратыйФотон'],
                    title: 'Lorem ipsum dolor sit amet consectetur',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam eveniet consequuntur sint quaerat, iure omnis adipisci eligendi repellendus necessitatibus recusandae nulla minima quisquam in aperiam, quo ea maiores est!'
                },
                {
                    tags: ['синхронизация', '1с', 'дегроиды'],
                    title: 'Lorem ipsum dolor sit amet consectetur',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. recusandae nulla minima quisquam in aperiam, quo ea maiores est!'
                }
            ],
            tags: ['короткийтаг', 'средний', 'длинныйтаг2', 'ололо', 'жопа', 'какой_то_калл', 'дибилы', 'дегроиды', '1с', 'синхронизация', 'ВсратыйФотон', 'ЭДОВТБ', 'говномесы'],
        }
    }

    render() {
        const {posts, tags} = this.state

        return(
            <div className="app">
                <Header/>
                <Sidebar/>
                <Content
                    posts={posts}
                    tags={tags}/>
            </div>
        )
    }
}
