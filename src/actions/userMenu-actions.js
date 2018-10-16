//User Menu Actions

const ADD_FOLDER= 'ADD_FOLDER';
const addNewFolder=(folderName)=>{
    return{
        type:ADD_FOLDER,
        folderName
    }
}