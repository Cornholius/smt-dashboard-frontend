import React, {Component} from 'react';
import './app.sass';
import '../../fonts/stylesheet.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Wiki from '../wiki/wiki'
import Todo from '../todo/todo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import {fadeInUp} from 'react-animations';


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
            FadeInUpAnimation: styled.div`animation: 0.8s ${keyframes`${fadeInUp}`}`,
            lookingFor: '',
        }
    }

    onSearch(items, lookingFor) {
        if (lookingFor.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(lookingFor) > -1;
        });
    }

    onUpdateSearchText(text) {
        this.setState({lookingFor: text});
    }

    render() {
        const {posts, tags, FadeInUpAnimation} = this.state
        return(
            <Router>
                <div className="app">
                    <Header/>
                    <Sidebar/>
                    <Route path='/'/>
                    <Route
                        path='/wiki'
                        render={ (props) => <Wiki {...props} posts={posts} tags={tags} fadeinup={FadeInUpAnimation}/> }
                    />
                    <Route
                        path='/todo'
                        render={ (props) => <Todo {...props} fadeinup={FadeInUpAnimation}/> }
                    />
                </div>
            </Router>
        )
    }
}
