import ReactDOM from 'react-dom';
import React from 'react';
// import '../assets/css/main.css';
import ManagerTask from './components/manager-task';

ReactDOM.render(<ManagerTask/>, document.querySelector('#container'));

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
