import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './global.css';
import Nav from './components/Nav';
import Widgets from "./components/Widgets";
import "./widgets.css"

function Main() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className='row'>
          <Widgets className="panel" />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
