import React from 'react';
export default function FolderButtonLi(props){
    return (
        <ul folders={props.folder} className={props.className}>
            {props.folders.map((folder, index) =>{
                    
                return <li key={index}>
                            <button type='button' name={folder} onClick={props.folderClick}>{folder}</button>
            
                        </li>
                    
            })}
        </ul>
    );
    }