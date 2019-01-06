import React from 'react';
import { Link } from 'react-router-dom';
import './css/folder-card.css';

export default function FolderButtonLi(props) {
  return (
    <ul folders={props.folders} className="folder-cards">
      {props.folders.map((folder, index) => {
        return (
          <li key={index} className="folder-list-item">
            <div className="folder-item">
              <Link to={`/folder/${folder._id}`}>
                <button
                  className="folderButton"
                  type="button"
                  folderid={folder._id}
                  onClick={props.folderClick}
                >
                  <h3 folderid={folder._id}>{folder.foldername}</h3>
                </button>
              </Link>
              <button
                folderid={folder._id}
                className="deleteFolder"
                onClick={props.deleteClick}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
