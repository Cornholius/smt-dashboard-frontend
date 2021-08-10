import React, {Component} from 'react';
import './wikiDetailPost.sass';


export default class WikiDetailPost extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {post} = this.props
        return(
            <section className="content center">
                <div className="post">
                    <div className="tags">
                        <div className="tags_text">Теги:</div>
                            {post.tags.map((tag) => {return(<div className="tags_tag" key={tag.id}>{tag.title}</div>)})}
                        </div>
                    <div className="post_title">{post.title}</div>
                    <div className="post_text">{post.text}</div>

                    <div className="post_filearea">
                        {post.media.map((file) => {return(<div className="post_file">{file.name}</div>)})}
                    </div>
                </div>
            </section>
        )
    }
}