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
            <section className="content">
                <div className="post">
                    <div className="tags">
                        <div className="tags_text">Теги:</div>
                        {post.tags.map((tag) => {return(<div className="tags_tag" key={tag.id}>{tag.title}</div>)})}
                    </div>
                    <div className="line mtb10"></div>
                    <div className="post_title">{post.title}</div>
                    <div className="post_text">{post.text}</div>
                    <div className="line mtb10"></div>
                    <div className="files">
                        <div className="files_text">Файлы:</div>
                        <div className="files_item files_item--detail">
                            {post.media.map((file) => {return(
                                <div className="files_item">
                                    <div className="files_name files_name--detail">{file.name}</div>
                                </div>
                            )})}
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}