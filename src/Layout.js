import React,{Component} from "react";


import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class Layout extends Component {
    render(){
        const {children} = this.props
        return (
            <React.Fragment>
                <Header />
                <Menu />
                {children}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;