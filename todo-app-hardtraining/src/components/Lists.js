import React, { useState, useRef } from 'react';
import Form from "./Form"
import List from "./List"

const Lists = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();

    // 빈 칸을 입력하면 입력하지 않기
    // 아니 이걸 맨 위쪽에 써주니까 갑자기 됨 왜일까???
    // e.preventDefault();보다는 아래에 써줘야되는 걸 발견함
    if (!props.text) return;

    const nextTodoList = props.todoList.concat({
      id: props.no.current++,
      text: props.text,
      checked: false,
    });
    
    props.setTodoList(nextTodoList);
    props.setText('');
  };

  return (
    <form onSubmit={onSubmit}>
          <div className='lists'>
            {props.todoList.map((todoItem) =>(
              // Warning: Each child in a list should have a unique "key" prop 때문에 key 추가
              <List 
                // todoItem={todoItem} 
                id={todoItem.id}
                checked={todoItem.checked}
                text={props.text}

                todoList={props.todoList}
                setTodoList={props.setTodoList}
                
              />
            ))}
          </div>
          <Form text={props.text} setText={props.setText} />
    </form>
  );
};

export default Lists;