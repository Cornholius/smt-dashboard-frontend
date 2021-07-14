import React, {Component} from 'react';
import './wiki.sass';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';


export default class Wiki extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Qwe = styled.div`animation: 0.2s ${keyframes`${fadeInUp}`}`;
        const {posts, tags} = this.props
        const renderedPosts = posts.map((post) => {
            return(
                <Qwe>
                <div className="card">
                    <div className="tags">
                        <div className="tags_text">Теги:</div>
                        {post.tags.map((tag) => {
                            return(
                                <div className="tags_tag">{tag}</div>
                            )
                        })}
                    </div>
                    <div className="card_title">{post.title}</div>
                    <div className="card_text">{post.text}</div>
                </div>
                </Qwe>
            )
        })
        const renderedTags = tags.map((tag) => {
            return(
                <div className="tags_tag">{tag}</div>
            )
        })
        return(
            <section className="content">
                <div className="content_menu" id="wikiContent" data-content>
                    <div className="cardField">
                        {renderedPosts}
                    </div>
                    <div className="tagField">
                        {renderedTags}
                    </div>
                </div>
            </section>
        )
    }
}