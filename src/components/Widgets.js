import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextPanel from './Panels';

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
                className={widget.size}
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

export default Widgets;