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
        this.onDeleteBtn = this.onDeleteBtn.bind(this);
    };

    fillTheForm(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async createNewPost(e) {
        e.preventDefault()
        const {titleInput, textInput, tagsInput, document} = this.state
        const newPost = {
            title: titleInput,
            text: textInput,
            tags: tagsInput,
            document: document,
        }
        await this.props.postdata(newPost)
        this.props.history.push('/wiki')
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
        this.setState(({document}) => {
            let newArrFiles = [...document, ...files]
            return {
                document: newArrFiles
            }
        })
    }

    onDeleteBtn(item) {
        this.setState(({document}) => {
            const array = this.state.document.filter(file => file.name !== item.name)
            return {
                document: array
            }
        })
    }

    render() {
        const {fadein, fadeinup} = this.props
        const FadeIn = fadein
        const FadeInUp = fadeinup

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
                        className='newpost_droparea'
                        onDragStart={e => this.dragStartEvent(e)}
                        onDragLeave={e => this.dragLeaveEvent(e)}
                        onDragOver={e => this.dragStartEvent(e)}
                        onDrop={e => this.onDropEvent(e)}
                    >
                        <p className="newpost_dropareatext">Кидай сюда свои файлы, или жми на область для окна загрузки</p>
                    </div>
                    <div className="files">
                        {this.state.document.map((file) => {
                            return(
                                <FadeInUp>
                                <div className="files_item">
                                    <div className="files_name">{file.name}</div>
                                    <svg className="files_delete" onClick={() => this.onDeleteBtn(file)} height="15pt" viewBox="0 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
                                </div>
                                </FadeInUp>
                            )
                        })}
                    </div>
                    <button className="newpost_btn" type="submit">Создать</button>
                </form>
                </FadeIn>
            </section>
        )
    }


}