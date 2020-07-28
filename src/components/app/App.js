import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './App.css';
import Header from '../header/header';
import CommentsList from '../comments-list/comments-list';
import CommentInput from '../comment-input/comment-input';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }

    this.maxId = 0;

    this.addComment = this.addComment.bind(this);   
    this.delComment = this.delComment.bind(this);
  } 

  componentDidMount(){
    this.takeLocal();
    this.takeId();
    this.sortPosts();
  }

  takeLocal() {
    this.setState(({data}) => {
        let keys = Object.values(localStorage);
        const arr = [];
        for(let key of keys) {
          arr.push(JSON.parse((`${key}`)));
        }
        return {
          data: arr
        }
      })
  }


  takeId() {
    this.setState((state) => {
      state.maxId = localStorage.length;
    })
  }

  setDate() {
    let now = moment();
    moment.locale('ru');
    return now.format('LLL');
  }

  sortPosts(){
    this.setState((state) => {
      state.data = state.data.sort((a,b) => a.id - b.id)
    })
  }

  addComment(text, author) {
    const id = Object.keys(localStorage);
    if (id.length === 0) {
      id.push(0)
    }

    const item = {
      text: text,
      author: author,
      date: this.setDate(),
      id: Math.max(...id) + 1
    }

    item.text = document.querySelector('#massage').value;
    item.author = document.querySelector('#name').value;

    if (item.text && item.author) {
      this.setState(({data}) => {     
        const newArr = [...data , item];
        localStorage.setItem(item.id, JSON.stringify({...item}));
        document.querySelector('form').reset();
        
        return {
          data: newArr,
        }
      }) 
    }
  }
  
  delComment(id) {
    this.setState(({data}) => {

      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      return {
        data: [...before, ...after]
      }
      
    }) 

    for(let i=0; i < this.state.maxId; i++) {
      if (id === +localStorage.key(i)) {
        localStorage.removeItem(id)
      }

      this.takeLocal()
    }
  
  }

render() {

  return (
    <>
      <Header />
      <CommentsList
        delComment={this.delComment}
        posts={this.state.data}/>
      <CommentInput 
        onAdd={this.addComment}
      />
    </>
  );
}
  
}

export default App;
