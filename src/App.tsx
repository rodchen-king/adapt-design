/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-29 23:21:32
 * @LastEditTime: 2021-11-30 14:51:14
 * @LastEditors: rodchen
 */
import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/buttons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>h1</h1>
        <h2>h2</h2>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>large primary</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>disable large primary</Button>

        <Button btnType={ButtonType.Default}>default</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger</Button>
        <Button btnType={ButtonType.Link} href="w">link</Button>
        <Button btnType={ButtonType.Link} disabled href="w">disable link</Button>

        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
