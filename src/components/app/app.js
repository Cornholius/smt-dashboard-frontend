import React, {Component} from 'react';
import './app.sass';
import '../../fonts/stylesheet.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Wiki from '../wiki/wiki'
import {BrowserRouter as Router, Route} from 'react-router-dom'


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
            <Router>
                <div className="app">
                    <Header/>
                    <Sidebar/>
                    <Route path='/'/>
                    <Route
                        path='/wiki'
                        render={ (props) => <Wiki {...props} posts={posts} tags={tags}/> }
                    />
                </div>
            </Router>
        )
    }
}
