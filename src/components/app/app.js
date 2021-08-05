import React, {Component} from 'react';
import './app.sass';
import '../../fonts/stylesheet.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Wiki from '../wiki/wiki'
import Todo from '../todo/todo'
import WikiCreatePost from "../wikiCreatePost/wikiCreatePost";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import {fadeInUp, fadeIn} from 'react-animations';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            tags: [],
            FadeInUpAnimation: styled.div`animation: 0.8s ${keyframes`${fadeInUp}`}`,
            FadeInAnimation:  styled.div`animation: 1s ${keyframes`${fadeIn}`}`,
            lookingFor: '',
            postUrl: 'http://127.0.0.1:8000/api/posts/',
            tagUrl: 'http://127.0.0.1:8000/api/tags/',
        }
        this.onUpdateSearchText = this.onUpdateSearchText.bind(this);
        this.postData = this.postData.bind(this);
        this.tagData = this.tagData.bind(this);
        this.getAllData(this.state.postUrl, 'posts')
        this.getAllData(this.state.tagUrl, 'tags')
    }

    async postData(data) {
        console.log('3=== приехало в postData === ', data)
        console.log('3.1=== приехало в postData document === ', data['document'])
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('text', data.text)
        formData.append('tags', data.tags)

        data['document'].forEach((i) => {
            formData.append('document', i)
        })
        const addPost = await fetch(this.state.postUrl, {
            method: 'POST',
            body: formData
        });
        const addPostResponse = await addPost.json()
        this.setState(({posts}) => {
            const newArray = [addPostResponse, ...posts]
            return {
                posts: newArray
            }
        })
    }

    async tagData(data) {
        const response = await fetch('http://127.0.0.1:8000/api/tags/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await response.json();
        this.setState(({tags}) => {
            let newArray = [content, ...tags];
            const sortedArray = newArray.sort((a, b) => {
                if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                return 0
            });
            return {
                tags: sortedArray
            };
        })
    }

    getAllData(url, data) {
        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({[data]: result}));
    }

    onSearch(items, lookingFor) {
        if (lookingFor.length === 0) {
            return items
        }
        return items.filter((item) => {
            const findInTitle = item.title.toLowerCase().indexOf(lookingFor) > -1;
            const findInText = item.text.toLowerCase().indexOf(lookingFor) > -1;
            const result = findInTitle || findInText
            return result
        });
    }

    onUpdateSearchText(text) {
        this.setState({lookingFor: text});
    }

    render() {
        const {posts, tags, lookingFor, FadeInUpAnimation, FadeInAnimation, postUrl, tagUrl} = this.state
        return(
            <Router>
                <div className="app">
                    <Header
                        onUpdateSearchText={this.onUpdateSearchText}/>
                    <Sidebar/>
                    <Route
                        path='/wiki'
                        render={ (props) => <Wiki {...props}
                                                  posts={this.onSearch(posts, lookingFor)}
                                                  tags={tags}
                                                  tagUrl={tagUrl}
                                                  fadein={FadeInAnimation}
                                                  fadeinup={FadeInUpAnimation}/> }
                    />
                    <Route
                        path='/todo'
                        render={ (props) => <Todo {...props} fadeinup={FadeInUpAnimation}/> }
                    />
                    <Route
                        path='/createpost'
                        render={ (props) => <WikiCreatePost {...props}
                                                            postdata={this.postData}
                                                            tagdata={this.tagData}
                                                            tags={tags}
                                                            postUrl={postUrl}
                                                            tagUrl={tagUrl}
                                                            fadein={FadeInAnimation}/> }
                    />
                </div>
            </Router>
        )
    }
}