import React, {Component} from 'react';
import './btn.css';

export default class Btn extends Component{    

    render() {
        const {btnText, onClick} = this.props;
        return(
        <button onClick={onClick} type='submit' className="d-flex form-send">{btnText}</button>
        )
    }
}

