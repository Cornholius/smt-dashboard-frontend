import React, {Component} from 'react';
import './wiki.sass';


export default class Wiki extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {posts, tags, fadeinup} = this.props
        const FadeInUpAnimation = fadeinup;
        const renderedPosts = posts.map((post) => {
            return(
                <FadeInUpAnimation>
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
                </FadeInUpAnimation>
            )
        })
        const renderedTags = tags.map((tag) => {
            return(
                <FadeInUpAnimation>
                <div className="tags_tag">{tag}</div>
                </FadeInUpAnimation>
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