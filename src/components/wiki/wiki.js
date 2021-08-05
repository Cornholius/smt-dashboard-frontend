import React, {Component} from 'react';
import './wiki.sass';


export default class Wiki extends Component {

    constructor(props) {
        super(props);
        this.filterByTag = this.filterByTag.bind(this)
    }

    filterByTag(id) {
        fetch(`${this.props.tagUrl}${id}/`)
            .then(response => response.json())
            .then(result => console.log(result))
    }

    render() {
        const {posts, tags, fadeinup, fadein} = this.props
        const FadeInUpAnimation = fadeinup;
        const renderedPosts = posts.map((post) => {
            return(
                <FadeInUpAnimation>
                <div className="card" key={post.id}>
                    <div className="tags">
                        <div className="tags_text">Теги:</div>
                        {post.tags.map((tag) => {
                            return(
                                <div className="tags_tag" key={tag.id}>{tag.title}</div>
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
                <div className="tags_tag" onClick={() => {this.filterByTag(tag.id)}}>{tag.title}</div>
                </FadeInUpAnimation>
            )
        })
        return(
            <section className="content">
                <div className="content_menu">
                    <div className="cardField">
                        {renderedPosts}
                    </div>
                    <div className="tagField tagField__sticky">
                        <div className="tagField_title">Быстрый поиск по тегам:</div>
                        {renderedTags}
                    </div>
                </div>
            </section>
        )
    }
}