/*
 * @Author: Mukti
 * @Date: 2021-11-04 10:58:36
 * @LastEditTime: 2021-11-04 11:03:06
 * @LastEditors: Mukti
 */
export default function getData(id = 0, pageSize = 10) {
  return Promise.resolve([
    {
      name:'111',
      id: 1,
      type: 'file'
    },
    {
      name:'222',
      id: 2,
      type: 'folder'
    },
  ]);
}