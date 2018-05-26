import React,{Component} from 'react';
import style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerOpenHandler = ()=>{
        this.setState({showSideDrawer: true})
    }
 render(){   
    return(
        <React.Fragment>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <Toolbar openDrawer={this.sideDrawerOpenHandler}/>
            <main className={style.content}>
                {this.props.children}
            </main>
        </React.Fragment>
    )
 }
}

export default Layout;