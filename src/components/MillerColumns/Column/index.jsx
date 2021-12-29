/*
 * @Author: Mukti
 * @Date: 2021-11-04 10:38:15
 * @LastEditTime: 2021-11-04 11:57:05
 * @LastEditors: Mukti
 */
import React, { Fragment } from 'react';
import Item from './Item';

const Column = (props) => {
  const items = props.columnData.map((el) => {
    el.setSelected = id => { props.setSelected(id) }
    return (
      <Item {...el} onClick={props.setCurrent.bind(this, el.id)} />
    )
  });

  return (
    <Fragment>
      {items}
    </Fragment>
  );
};

export default Column;