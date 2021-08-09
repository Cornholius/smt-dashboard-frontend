import React, {Component} from 'react';
import './wiki.sass';


export default class Wiki extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tagBG: false,
            lastTag: 1
        }
        this.imageRef = React.createRef()
        this.filterByTag = this.filterByTag.bind(this)
    }

    filterByTag(currentTag) {
        let bgColor = this.state.tagBG ? "#d195ff" : "#4ECDC4"
        const activeTag = document.getElementById(currentTag.id)

        if (currentTag.id !== this.state.lastTag) {
            console.log('!!!')
            const lastActiveTag = document.getElementById(this.state.lastTag)
            lastActiveTag.style.cssText = "background-color: #d195ff; transition: all 0.5s ease 0s"
            // this.setState(({tagBG: !this.state.tagBG}))
            console.log('01 ', this.state.tagBG)
            activeTag.style.cssText = `background-color: ${bgColor}; transition: all 0.5s ease 0s`

            this.setState(({lastTag: currentTag.id}))
        }
        else {
            activeTag.style.cssText = `background-color: ${bgColor}; transition: all 0.5s ease 0s`

        }

        this.setState(({tagBG: !this.state.tagBG}))
        console.log('02 ', this.state.tagBG)
        this.props.onUpdateSearchText('TAG' + currentTag.title)
    }


    render() {
        const {posts, tags, fadeinup} = this.props
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
        const renderedTags = tags.map((tag, index) => {
            return(
                <FadeInUpAnimation>
                <div 
                    className="tags_tag" 
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