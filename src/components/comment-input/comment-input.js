import React, { Component } from 'react';
import './comment-input.css';
import Btn from '../btn/btn';

class CommentInput extends Component {
    
    render() {
        const {onAdd} = this.props
        return(
            <form className="container">
                <div>
                    <div className="d-flex justify-content-center mb-3 align-items-baseline">
                        <label htmlFor="name" className="mr-3">Ваше имя</label>
                        <input type="text" id="name" name="name" placeholder="Введите Ваше имя"></input>
                    </div>
                    <div className="d-flex justify-content-center mb-3 align-items-baseline">
                        <label htmlFor="massage" className="mr-3">Текст сообщения</label>
                        <textarea rows="5" cols="40" id="massage" placeholder="Введите текст сообщения"></textarea>
                    </div>
                    <Btn 
                    onClick={(e) => {e.preventDefault(); onAdd()}}
                    btnText="Отправить"/>
                </div>
                
            </form>
        );
    }
    
}


export default CommentInput;