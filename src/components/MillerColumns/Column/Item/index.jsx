/*
 * @Author: Mukti
 * @Date: 2021-11-04 10:38:15
 * @LastEditTime: 2021-11-04 11:57:10
 * @LastEditors: Mukti
 */
import React, { Fragment } from 'react';

const Item = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div class='item'>
        <span onClick={props.setSelected.bind(this, props.id)}>{props.selected ? props.selected : 0} : </span> 
        {props.name}
        {props.type === 'folder' && (props.current ? <span> -</span> : <span> +</span>) }
      </div>
    </Fragment>
  );
};

export default Item;