import React, {Component} from 'react'; 

export default class Song extends Component {
    render() {
        return (
        
        <div className="col s3 card">
          <div>
            <img src={this.props.imageUrl} className="responsive-img"/>
          </div>
          
            <div>
              <p className="blue-text">{this.props.userName}</p>    
              <p>{this.props.name}</p>
            </div>
            <div>{this.props.artist}</div>
        </div>
        
        )
    }
}