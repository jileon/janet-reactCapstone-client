import React from 'react';
export default function FolderButtonLi(props){
    return (
        <ul folders={props.folder} className={props.ulClassName}>
            {props.folders.map((folder, index) =>{
                    
                return <li key={index}>
                            <button className= {props.liButtonClassName}type='button' name={folder} onClick={props.folderClick}>{folder}</button>
            
                        </li>
                    
            })}
        </ul>
    );
    }