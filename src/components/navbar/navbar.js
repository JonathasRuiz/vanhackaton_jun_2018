import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

class NavBar extends Component {

    state={
        showMenu:false
    }

    handleNavMenu=(data)=>{
        return(
            data.campos ?
                data.campos.map((item,i)=>{
                    return(
                        <Link to={item.address} key={i} onClick={()=> this.setState({showMenu:false})}>   
                        <FontAwesome 
                        className={styles.menu_icon}
                        name='fas fa-futbol fa-sm'
                        style={{ float:'left' }}
                    />
                    <div className={styles.item_menu}>{item.caption}</div></Link>
                    )
                }) :
                null
        )        
    }

    showBottomMenu=()=>{
        
        return (this.state.showMenu ?
            <div className={styles.resp_menu_bottom}>
                {this.handleNavMenu(this.props)}
            </div>:null)
    }

    
    render() {
        return (
            <div >
            <div className={styles.resp_menu_top}>
                <Link to="/">Home</Link>
                <FontAwesome 
                    className={styles.menu_icon}
                    name='fas fa-bars'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',border:'solid 1px #d5d5d5' }}
                    
                    onClick={()=>{this.setState({showMenu:!this.state.showMenu})}}
                />
            </div>
            {this.showBottomMenu()}            
            
        </div>
        );
    }
}

export default NavBar;