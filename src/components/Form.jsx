import React, {Component} from 'react'; 

export default class Spinner extends Component { 
constructor (props) {
    super(props); 
    
    this.state = {
        cancion: {}
    }
    
    this.actualizarEstado = this.actualizarEstado.bind(this);
    this.agregarCancion = this.agregarCancion.bind(this);
}
    
     actualizarEstado(e) { //la e se pone cuando el método es manejador de un evento
        const nuevoValor = e.target.value; //este target es para obtener el valor del input, si solo dejamos el target regresa el elemento.
        const propiedad = e.target.dataset.target; //El target 1 es el input, el dataset es una api que proporciona js para acceder a los atributos data, el target 2 es la palabra que va después del data-.
        
        let cancion = this.state.cancion; //Aquí recuperamos el valor del estado, lo hacemos asi ya que es un objeto.
        cancion[propiedad] = nuevoValor;
        this.setState({
            cancion: cancion
        })  
     }
     
    
    
    agregarCancion(e) {
        e.preventDefault();
        const cancion = this.state.cancion; 
        console.log(cancion);
        this.props.agregar(cancion); //este agregar es la propiedad que nosotros le pasamos desde el App.js
        this.setState({
            cancion: {
                nombre: '',
                artista: '',
                imagen: ''
            }
        })
    }
    
   
    
    
    
render() {
    return (
    <div className="row">
    <form className="col s12" onSubmit={this.agregarCancion}>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Nombre de la canción" type="text" className="validate" placeholder="Nombre de la canción" onChange={this.actualizarEstado} data-target='nombre' value={this.state.cancion.nombre}/>
        </div>
     </div>
       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate" placeholder="Artista" data-target='artista' onChange={this.actualizarEstado} value={this.state.cancion.artista}/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input  type="text" className="validate" placeholder="URL de imagen" data-target='imagen' onChange={this.actualizarEstado} value={this.state.cancion.imagen}/> 
        </div>
      </div>
      <div className="row">
          <div className="col s12">
              <button type="submit" className="waves-effect waves-light btn">Agregar</button>
          </div>
      </div>
    </form>
  </div>
        
        
        
    )
}



}