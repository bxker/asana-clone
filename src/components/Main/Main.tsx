import React from 'react';

//components
import Nav from '../Nav/Nav';
import NavTop from './Nav-top/NavTop';

//css
import './styles/Main.css';

const App: React.FC = () => {
  return (
    <div className="home-main-parent">
      <nav className="nav-left">
        <Nav />
      </nav>
      <section>
        <nav className="nav-top">
          <NavTop />
        </nav>
      </section>
    </div>
  );
}

export default App;