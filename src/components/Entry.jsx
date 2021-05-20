import "./styles/Entry.css";

const Entry = (props) => {
  const date = new Date();
  return (
    <div>
      <div className="entry">
        <div className="entry-content">
          <p className="entry-title">{props.title}</p>
          <p className="entry-paragraph">{props.paragraph}</p>
        </div>
        <div className="entry-footer">
          <p className="date">
            {" "}
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </p>
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default Entry;
