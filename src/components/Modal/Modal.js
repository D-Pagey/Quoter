import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.modal === false) {
      this.setState({
        modal: true
      })
    } else {
      this.setState({
        modal: false
      })
    }
  }

  render() {
    return (
      <div className="modal-container">
       <button type="button" name="button" className="modal-btn">
         <i className="material-icons md-14" onClick={this.handleClick}>
           info_outline</i></button>
       <dialog className="modal-about" open={this.state.modal}>
         <button type="button" name="button" className="modal-cancel">
           <i className="material-icons sm-12" onClick={this.handleClick}>
             clear</i></button>
         <h4 className="modal-title">Random Quote Machine</h4>
         <p className="modal-text">This is an Intermediate Front End Developer
           project from the FreeCodeCamp curriculum. The user stories to be
           completed are:</p>
         <ul className="user-stories">
           <li className="story">I can click a button to show me a new
             random quote.</li>
           <li className="story">I can press a button to tweet out a quote.</li>
         </ul>
         <p className="modal-text copy">This project was coded in React using
           Create-React-App.
           The code can be seen on <a href="https://github.com/D-Pagey/quoter"
           target="_blank" rel="noopener noreferrer" className="link">
           Github</a>.</p>
       </dialog>
     </div>
    )
  }
}

export default Modal;
