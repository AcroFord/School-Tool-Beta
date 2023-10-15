function TextPanel({ heading, content }) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TextPanel;
