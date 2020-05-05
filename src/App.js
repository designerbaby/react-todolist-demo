import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handelAddItem = this.handelAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => { el.style.color='blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handelAddItem}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  handelAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App