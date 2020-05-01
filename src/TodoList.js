import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem.js'
import './style.css'

// 创建1个组件
class TodoList extends Component {

  constructor(props) { // 构造函数，是一个优于其他函数最先被执行的函数。
    super(props) // 调用父类的构造函数。
    this.state = { // 组件的状态
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 下面是一个input框 */}
          {
            // 下面是一个input框
          }
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index} 
          deleteItem={this.handleItemDelete}
        />
      )
      {
        // <li 
        // key={index} 
        // onClick={this.handleItemDelete.bind(this, index)}
        // dangerouslySetInnerHTML={{__html: item}}
        // >
        // </li>
      }
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => { // 使用setState将内容赋值给当前参数
      return {
        inputValue: value
      }
    })
    // this.state.inputValue = e.target.value
    console.log(this.state.inputValue)
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList