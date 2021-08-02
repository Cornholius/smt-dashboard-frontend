import React, {Component} from 'react';
import './wikiCreatePost.sass';
// import '../dropzone/dropzone'
import DropzoneComponent from '../dropzone/dropzone';

export default class WikiCreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            textInput: '',
            tagsInput: '',
            tags: [],
            files: [],
            images: [],
        };
        this.fillTheForm = this.fillTheForm.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
        this.createNewTag = this.createNewTag.bind(this);
        this.addTagToPost = this.addTagToPost.bind(this);
    };

    fillTheForm(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    createNewPost(e) {
        e.preventDefault()
        const form = e.target
        const {titleInput, textInput, tagsInput, tags, files, images} = this.state
        const newPost = {
            title: titleInput,
            text: textInput,
            tags: tagsInput,
            files: files,
            images: images,

        }
        this.props.postdata(newPost)
        form.reset()
        this.setState({tags: []})
    }

    createNewTag(e) {
        e.preventDefault()
        const form = e.target
        const newTag = {
            title: this.state.tagsInput,
            // slug: this.state.tagsInput
        }
        this.props.tagdata(newTag)
        form.reset()
    }

    addTagToPost(e) {
        const allTags = this.state.tags
        const tag = Number.parseInt(e.target.id);
        this.setState(({tags}) => {
            if(allTags.indexOf(tag) != -1) {
                const index = allTags.findIndex(elem => elem === tag);
                const newArr = [...allTags.slice(0, index), ...allTags.slice(index + 1)];
                return {
                    tags: newArr
                };
            }
            const newArr = [...tags, tag];
            return {
                tags: newArr
            };
        });
    }

    render() {
        const {fadein, tags} = this.props
        const FadeIn = fadein;
        // const renderedTags = tags.map((tag) => {
        //     return(
        //         <div
        //             className="tags_tag"
        //             id={tag.id}
        //             key={tag.id}
        //             onClick={this.addTagToPost}>{tag.title}</div>
        //     )
        // })
        // const addedTagsToPost = tags.map((tag) => {
        //     if(this.state.tags.indexOf(tag.id) != -1) {
        //         return(
        //             <FadeIn>
        //             <div
        //                 className="tags_tag"
        //                 id={tag.id}
        //                 key={tag.id}
        //                 onClick={this.addTagToPost}>{tag.title}
        //             </div>
        //             </FadeIn>
        //         )
        //     }
        //
        // })
        return(
            <section className="content">
                <FadeIn className="newpost_fadein around">
                <form className="newpost"
                    onSubmit={this.createNewPost}>
                    <input
                        className='newpost_title'
                        name='titleInput'
                        placeholder='название заметки'
                        maxLength='100'
                        onChange={this.fillTheForm}/>
                    <textarea
                        className='newpost_text'
                        name='textInput'
                        placeholder='Текст заметки'
                        maxLength='2000'
                        onChange={this.fillTheForm}/>
                    <input
                        className='newpost_tags'
                        name='tagsInput'
                        placeholder='пиши сюда теги через пробел'
                        maxLength='100'
                        onChange={this.fillTheForm}/>

                    <button className="newpost_btn" type="submit">Создать</button>
                </form>
                <DropzoneComponent className="newpost_files"/>
                </FadeIn>
            </section>
        )
    }
}