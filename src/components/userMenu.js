import React from 'react';
import { connect } from 'react-redux';
import {hideNavigation} from '../actions/nav-action';
import { Link } from 'react-router-dom';
// import {addNewFolder} from '../actions/userMenu-actions';
import './css/userMenu.css';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';
import FolderButtonLi from '../components/folder-buttonsLi';
import{sendNewFolder} from '../actions/userMenu-actions';
import {deleteFolder} from '../actions/userMenu-actions';
import requiresLogin from './requires-login';
 class UserMenu extends React.Component{
  
    render(){
        return(
            <section className='userMenu'>
               <Link to = "/dashboard">
               <button type='button'> BACK BUTTON</button>
               </Link>
                

                <div>
                    <h1>HELLO {this.props.firstName}</h1>
                    
                </div>
                
                <div className='menuButtons'>
                <Link to = "/dashboard">
                    <button className='dashboardButton' type='button'> Dashboard</button>
                    </Link>
                </div>

                <div className='menuButtons'>
                    <button className='dashboardButton' type='button' onClick={() => {
                     clearAuthToken();
                     this.props.dispatch(clearAuth());
                    }}> Log Out
                    </button>
                </div>

                <div className='folderButtons'>
                <FolderButtonLi 
                ulClassName='folderButtons' 
                liButtonClassName='folder-button' 
                folders={this.props.folders}
                deleteClick={(e)=>{
                    console.log(e.target.getAttribute('folderid'));
                    this.props.dispatch(deleteFolder(e.target.getAttribute('folderid')));
                }}
                folderClick={()=>console.log('button works')}
                />
                
                   
                </div>

                <div className='folderButtons'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                        console.log(this.input.value);
                        // this.props.dispatch(addNewFolder(this.input.value));
                        this.props.dispatch(sendNewFolder(this.input.value));
                    }}>
                    <input type="addNewFolder" ref={input => (this.input = input)} />
                <button className='dashboardButton' type='submit'> Add Folder</button>
                </form>
                   
                </div>

            </section>

        )
    }
}

const mapStateToProps = (state) => {
	return {
        folders: state.protectedData.data,
        firstName: state.auth.currentUser.firstName
	};
};
export default requiresLogin()(connect(mapStateToProps)(UserMenu))

