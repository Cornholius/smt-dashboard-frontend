import React, {Component} from 'react';
import './wikiCreatePost.sass';


export default class WikiCreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            textInput: '',
            tagsInput: '',
            document: [],
        };
        this.fillTheForm = this.fillTheForm.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
        this.onDropEvent = this.onDropEvent.bind(this);
    };

    fillTheForm(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    createNewPost(e) {
        console.log('1.1=== пришло в createNewPost === ', this.state.document)
        e.preventDefault()
        console.log('1.2=== createNewPost после e.preventDefault === ', this.state.document)


        const form = e.target
        const {titleInput, textInput, tagsInput, document} = this.state
        const newPost = {
            title: titleInput,
            text: textInput,
            tags: tagsInput,
            document: document,
        }
        console.log('2=== создали newPost === ', newPost)
        this.props.postdata(newPost)
        form.reset()
    }

    dragStartEvent(e) {
        e.preventDefault()
    }

    dragLeaveEvent(e) {
        e.preventDefault()
    }

    onDropEvent(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        const formData = new FormData()
        formData.append('document', files[0])
        this.setState(({document}) => {
            const allFiles = [document, ...files]
            return {
                document: files
            }
        })
        console.log('1=== передали в onDrop === ', this.state.document)
    }

    render() {
        const {fadein} = this.props
        const FadeIn = fadein;

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

                    <div
                        className='newpost_files'
                        onDragStart={e => this.dragStartEvent(e)}
                        onDragLeave={e => this.dragLeaveEvent(e)}
                        onDragOver={e => this.dragStartEvent(e)}
                        onDrop={e => this.onDropEvent(e)}
                    >
                        <p className="newpost_droparea">Кидай сюда свои файлы, или жми на область для окна загрузки</p>
                    </div>

                    <button className="newpost_btn" type="submit">Создать</button>
                </form>
                </FadeIn>
            </section>
        )
    }


}