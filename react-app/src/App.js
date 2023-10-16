import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
     <header className="header">
            <div className="logo">
                <div className="logo-text">Футболка Shop</div>
            </div>
            <ul className="logo-list">
                <li>Про нас</li>
                <li>Товари</li>
                <li>Доставка</li>
                <li>Увійти</li>
            </ul>
        </header>
        <section className='section'>
        <nav className="nav">
            <ul>
                <li>Нові товари</li>
                <li>Для нього</li>
                <li>Для неї</li>
            </ul>
        </nav>

        <div className="main">
            <h1 className='text1'>Футболка Shop</h1>
            <div className='text2'>Обновки для тусовки</div>
        </div>
        </section>
    </div>
  );
}

export default App;
