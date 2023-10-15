import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './global.css';
import axios from 'axios';
import Nav from './components/Nav';
import TextPanel from './components/Panels';

// ... (imports)

// Rest of the code remains unchanged

function Widgets() {
  const [widgets, setListOfWidgets] = useState([]);

  useEffect(() => {
    axios
      .get('https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-3d00acfd-4377-4fe1-a494-f5d6925c1201/demo/widgets')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setListOfWidgets(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log("Widgets:", widgets);

  return (
    <div>
      {Array.isArray(widgets) ? (
        widgets.map((widget, index) => {
          if (widget.Type === 'TextPanel') {
            return (
              <TextPanel
                key={index}
                heading={widget.Content.heading}
                content={widget.Content.content}
              />
            );
          }
          return null;
        })
      ) : (
        <p>No widgets to display.</p>
      )}
    </div>
  );
}

// Rest of the code remains unchanged


function Main() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Widgets />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
