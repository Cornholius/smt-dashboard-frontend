import React, {Component} from 'react';
import './content.sass';
import Wiki from '../wiki/wiki';


export default class Content extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {posts, tags} = this.props

        return(
            <section className="content">
                <Wiki
                    posts={posts}
                    tags={tags}/>
                {/*<div className="content_menu" id="todoContent" data-content>2222222222222222222222222</div>*/}
            </section>
        )
    }
}