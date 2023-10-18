import React from 'react';
import "../bootstrap.min.css"
import "../css/widgets.css"

function TextPanel({ heading, content, className }) {
  return (
    <div className={className}>
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1 className="textPanelHeading">{heading}</h1>
          <p className="textPanelContent">{content}</p>
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
          <img src={icon} height={iconHeight} width={iconWidth} className="textPanelWithIconImg" alt="icon" />
          <h2 className="textPanelWithIconHeading">{heading}</h2>
          <p className="textPanelWithIconContent">{content}</p>
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
            <h2 className="notesListHeading">{value.name}</h2>
            <ul className="notesListList">
              {value.content.map((item, idx) => (
                <li className="notesListItem" key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );
      } else if (key === "h1" || key === "h2" || key === "p" || key === "h3") {
        const TagName = key;
        return (
          <div className={`notes${key.toUpperCase()}`} key={index}>
            {typeof value === "string" ? <TagName className="notesInfoContent" >{value}</TagName> : value}
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
          <h1 className="notesHeader" ><b>{heading}</b></h1>
          <div className="notesContainer">{renderPreviewElements()}</div>
          <a className="btn btn-primary notesRedirect" target="blank" href={fullLink}>Read More</a>
        </div>
      </div>
    </div>
  );
}


export { TextPanel, TextPanelWithIcon, Notes };
