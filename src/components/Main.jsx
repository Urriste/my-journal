import Entry from "./Entry";
import AddEntry from "./AddEntry";
import "./styles/Main.css";
import PencilImg from "../img/pencil.svg";
import { useEffect, useState } from "react";

const Main = () => {
  const [entries, setEntries] = useState([]);
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState(true);
  const [initialMesagge, setInitialMesagge] = useState(true);

  const [entryTitle, setEntryTitle] = useState("");
  const [entryContent, setEntryContent] = useState("");
  const newEntry = {
    title: entryTitle,
    content: entryContent,
    id: entries.length,
  };

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("entries"));
    if (storage) {
      setEntries(storage);
      setInitialMesagge(false);
    }
  }, []);

  const handleClick = () => {
    setModal(true);
    setButton(false);
  };

  const handleModal = () => {
    setModal(false);
    setButton(true);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setEntries([...entries, newEntry]);
    setInitialMesagge(false);
    setModal(false);
    setButton(true);
    localStorage.setItem("entries", JSON.stringify(entries));
  };

  const handleDelete = async (key) => {
    let updatedEntries = entries.filter((item) => {
      return item.id !== key;
    });
    setEntries(
      updatedEntries
    );
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="entries-container">
      {initialMesagge ? (
        <div className="no-entries-container">
          <p className="no-entries">
            Todavia no hay entradas en tu diario... ¿Que esperas para crear una?
          </p>
        </div>
      ) : null}
      <div className="entries">
        {entries?.map((entry) => {
          return (
            <Entry
              key={entry.id}
              title={entry.title}
              paragraph={entry.content}
              button={
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="btn-add"
                >
                  Delete
                </button>
              }
            ></Entry>
          );
        })}
      </div>
      {button ? (
        <button className="btn" onClick={handleClick}>
          <img src={PencilImg} alt="pencil" />
        </button>
      ) : null}

      <AddEntry open={modal}>
        <div className="write-container">
          <div className="write">
            <div className="write-header">
              <button onClick={handleModal}>X</button>
            </div>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Add a title"
                className="title-input"
                autoComplete="off"
                onChange={(e) => {
                  setEntryTitle(e.target.value);
                }}
              />
              <textarea
                type="text"
                name="content"
                placeholder="Add some words"
                className="content-input"
                autoComplete="off"
                onChange={(e) => {
                  setEntryContent(e.target.value);
                }}
              />
              <button className="btn-add" onClick={handleAdd}>
                Add Entry
              </button>
            </div>
          </div>
        </div>
      </AddEntry>
    </div>
  );
};

export default Main;
