import React from 'react';
import "../bootstrap.min.css"

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
  const renderPreviewElements = () => {
    return Object.entries(preview).map(([key, value], index) => {
      if (key === "list") {
        return (
          <div className="notesList" key={index}>
            <h2>{value.name}</h2>
            <ul>
              {value.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );
      } else if (key === "h1" || key === "h2" || key === "p" || key === "h3") {
        const TagName = key;
        return (
          <div className={`notes${key.toUpperCase()}`} key={index}>
            {typeof value === "string" ? <TagName>{value}</TagName> : value}
          </div>
        );
      }
      else if (key === "question") {
        return (
          <div className="notesQuestion" key={index}>
            <h2 className="questionTitle">{value.title}</h2>
            <p className="questionAnswer">{value.answer}</p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className={className}>
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1>{heading}</h1>
          <div className="notesContainer">{renderPreviewElements()}</div>
          <button className="btn btn-primary" href={fullLink}>Read More</button>
        </div>
      </div>
    </div>
  );
}


export { TextPanel, TextPanelWithIcon, Notes };
