import React, {Component} from 'react';
import Song from '../components/Song.jsx';
import Spinner from '../components/Spinner';


const playlist = [
    {
        imageUrl:"https://i1.sndcdn.com/artworks-000192444803-5uo9pr-t500x500.jpg", 
        userName: "terrorhythm",
        name: "GuZheng",
        artist: "Celaeno"
    },
    
    {
        imageUrl:"https://i1.sndcdn.com/artworks-000195798628-2z475v-t500x500.jpg", 
        userName: "BRUK",
        name: " Rua 18",
        artist: "Neguim"
    },
    
    {
        imageUrl:"https://i1.sndcdn.com/artworks-000182755511-wz2o9f-t500x500.jpg", 
        userName: "hijmer",
        name: "nobody",
        artist: "nobody"
    },
    
    {
        imageUrl:"https://i1.sndcdn.com/artworks-000186848616-wrijmy-t500x500.jpg", 
        userName: "Safer At Night",
        name: "OMBRA INTL 001: Montessori ",
        artist: "Samoset"
    }
]

export default class SongRow extends Component { 
    
constructor(props) {
        super(props); //Llama al constructor de la clase padre (Component)
        /*
        this.state = {
            loading: true
        }
        */
}
//    
//componentWillMount() {
//            console.log("Estamos en el método componentWillMount");
//}
//    
//componentDidMount() {
//    console.log("Estamos en el método componentDidMount");
//    
//    setTimeout(() => {
//        this.setState({
//           playlist: playlist, //el primero es el nombre de nuestro estado, la propiedad y el segundo es el valor de la variable. 
//         loading: false //aquí cambiamos el loading a falso para que desaparezca del html, es decir, que carga la información, actualiza el render y desaparece el cargando.
//        }); 
//    },3000);
//}
    
render() { console.log("estamos en el render")
    
    return(
    
    <div className="row">
        
        
        {this.props.playlist.map((song,i) => { //este return que esta dentro de los paréntesis solo sirve para el map, ya que no es un arrow function de una sola línea, al poner las llaves sabe que ya no es una sola línea y necesita esta palabra reservada.
               return <Song key={i} 
                imageUrl={song.imagen}
                userName= {''}
                name = {song.nombre}
                artist = {song.artista}
                />
            })}
    </div>
    
    )
 }

}