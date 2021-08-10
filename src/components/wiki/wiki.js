import React, {Component} from 'react';
import './wiki.sass';


export default class Wiki extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTag: '',
        }
        this.filterByTag = this.filterByTag.bind(this)
    }

    filterByTag(currentTag) {
        if (this.state.activeTag === currentTag.id) this.setState({activeTag: ''})
        else this.setState({activeTag: currentTag.id})
        this.props.onUpdateSearchText('TAG' + currentTag.title)
    }

    detailedViewPost(post) {
        console.log(post)
        this.props.detailedPost(post)
        this.props.history.push('/postdetailed')
    }

    render() {
        const {posts, tags, fadeinup} = this.props
        const FadeInUpAnimation = fadeinup;
        const renderedPosts = posts.map((post) => {
            return(
                <FadeInUpAnimation>
                <div className="card" key={post.id} onClick={() => this.detailedViewPost(post)}>
                    <div className="tags">
                        <div className="tags_text">Теги:</div>
                        {post.tags.map((tag) => {
                            return(
                                <div className="tags_tag" key={tag.id}>{tag.title}</div>
                            )
                        })}
                    </div>
                    {/* <div className="line mtb10"></div> */}

                    <div className="card_title">{post.title}</div>
                    <div className="line mtb10"></div>

                    <div className="card_text">{post.text}</div>
                </div>
                </FadeInUpAnimation>
            )
        })
        const renderedTags = tags.map((tag, index) => {
            return(
                <FadeInUpAnimation>
                <div 
                    className={this.state.activeTag===tag.id ? 'tags_tag tags_tag--active': 'tags_tag'} 
                    key={index} 
                    id={tag.id}
                    onClick={() => {this.filterByTag(tag)}}
                >{tag.title}</div>
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