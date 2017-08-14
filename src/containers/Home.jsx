import React, { Component } from 'react';
import Form from '../components/Form';
import SongRow from './SongRow';



class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
          playlist: []  
        };
        
        this.agregarCancionAPlaylist = this.agregarCancionAPlaylist.bind(this);
    }
    
    agregarCancionAPlaylist (cancion) {
        
        let listaCanciones = this.state.playlist;
        listaCanciones.push(cancion); 
    
    
        this.setState({
            playlist: listaCanciones
        })
        console.log(listaCanciones);
        localStorage.setItem('playlist', JSON.stringify(listaCanciones));  
    }
    
    componentDidMount() {
        let playlistString = localStorage.getItem("playlist");
        const playlist = JSON.parse(playlistString);
        this.setState({
            playlist: playlist || [] //cuando no tenga nada en mi localstorage, que mande un arreglo vacio por defecto.  
        });
    }
    
  render() {
    return (
      <div className="container">
        <Form agregar={this.agregarCancionAPlaylist} />
        <SongRow playlist={this.state.playlist}/>
      </div>
    );
  }
}

export default Home;
