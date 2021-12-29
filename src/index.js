/*
 * @Author: Mukti
 * @Date: 2021-11-04 10:20:15
 * @LastEditTime: 2021-11-04 10:44:51
 * @LastEditors: Mukti
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MillerColumns from './components/MillerColumns';
// import reportWebVitals from './reportWebVitals';

// 这里定义了取数据的接口地址（我使用了本地server来mock数据），以及可配置项
const props = {
  url: 'http://localhost:/',
  pageSize: 10,
}

ReactDOM.render(
  <React.StrictMode>
    <MillerColumns {...props} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
