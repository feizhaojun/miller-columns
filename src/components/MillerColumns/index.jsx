/*
 * @Author: Mukti
 * @Date: 2021-11-04 10:38:15
 * @LastEditTime: 2021-11-04 14:54:51
 * @LastEditors: Mukti
 */
import React, { Fragment, useEffect, useState } from 'react';
import getData from '../../utils/getData';
import Column from './Column';

const MillerColumns = ({
  url,
  pageSize,
}) => {
  // MillerColumns组件的数据
  let [ data, setData ] = useState([]);
  
  // 公共方法

  const setProps = (data, id, props) => {

  };

  // 按照id选择当前点击的项
  const setCurrentById = id => {
    const el = setProps(data, id, {current: true});
    if (el.type === 'folder') {
      setCurrentIndex(el.index);
    }
  }
  // 按照id，设置当前项选中状态
  const setSelectedById = id => {
    setProps(data, id, {selected: true});
  }

  // 初始化，请求 level 1 的数据
  useEffect(() => {
    // getData方法接受id和pageSize作为参数
    getData(0, pageSize).then((res) => {
      setData(res);
      setMaxLevel(1);
    });
  }, []);

  let columns = [];

  data.forEach(el => {
    
  });



  let columnData = data;
  for(let i = 0; i < currentIndex.length + 1; i++) {
    i && (columnData = (data => {
      for (let i = 1; i <= maxLevel.length; i++) {
        data = data[currentIndex[i - 1]]
      }
      return data;
    })(data));
    console.log(columnData);
    let props = {
      columnData,
      setCurrent(id) {
        setCurrentById(id);
      },
      setSelected(id) {
        setSelectedById(id);
      },
    }
    columns.push(<Column {...props} />);
  }

  return (
    <Fragment>
      {columns}
    </Fragment>
  );
};

export default MillerColumns;