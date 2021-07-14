import React, {Component} from 'react';
import './todo.sass';


export default class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {fadeinup} = this.props;
        const FadeInUpAnimation = fadeinup;
        return(
            <FadeInUpAnimation>
                <section className="content">
                    <div className="content_menu">
                        <h2>Заглушка</h2>
                    </div>
                </section>
            </FadeInUpAnimation>
        )
    }
}