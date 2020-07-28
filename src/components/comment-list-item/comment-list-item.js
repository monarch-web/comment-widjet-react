import React, {Component} from 'react';

export default class CommentListItem extends Component {


    render() {
        const {text, author, delComment, date} = this.props;

        return (
            <li className='list-item'>
                <header className="d-flex justify-content-between pb-2 mb-3">
                    <span>Дата комментария: {date} </span> <button className="btn-del" onClick={delComment}>Удалить комментарий <i className="fas fa-trash-alt"></i></button>
                </header>
                <main className="mb-3">
                    {text}
                </main>
                <footer>
                    <h6 className="mt-3">Автор: {author}</h6>
                </footer>
            </li>
        )
    }
    
}