import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Welcome extends Component {
    render(){
        return(
        
         <div>
            <h1>Bienvenid@s!</h1>
            <Link to="/Home">Ir a página principal</Link>
         </div>
        
        )
    }
}