import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props) { // 组件创建时，第一个就会执行constructor函数
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('todoItem render')
    const { content, test } = this.props
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  componentWillReceiveProps() {
    console.log('todoItem componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('todoItem componentWillUnmount')
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem