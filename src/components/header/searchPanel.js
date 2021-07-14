import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lookingFor: ''
        }
        this.onSearchUpdate = this.onSearchUpdate.bind(this)
    }

    onSearchUpdate(e) {
        this.setState({lookingFor: e.target.value})
        this.props.onUpdateSearchText(e.target.value)
    }
    render() {
        return (
            <div className="searchBar">
                <input
                    className="searchBar_input"
                    type="text"
                    placeholder="Поиск по записям"
                    onChange={this.onSearchUpdate}
                />
                <button className="btn searchBar_btn">Найти</button>
            </div>
        )
    }
}