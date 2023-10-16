import React from 'react';

function TextPanel({ heading, content, className }) {
  return (
    <div className={className}>
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function TextPanelWithIcon({ heading, content, className, icon, iconHeight, iconWidth }) {
  return (
    <div className={className}>
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <img src={icon} height={iconHeight} width={iconWidth} alt="icon" />
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function Notes({ heading, preview, fullLink, className }) {
  return (
    <div className={className}>
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1>{heading}</h1>
          {preview}
          <button href={fullLink}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export { TextPanel, TextPanelWithIcon, Notes };
