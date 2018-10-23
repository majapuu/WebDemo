import React, { Component } from 'react';
// import './tyyli.css';

export class Home extends Component { //avainsana extends
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = {luvut: []};
  }
  
  componentWillMount() {

    let that = this;
    
    console.log("Aloitetaan datan haku.");
    fetch('/api/customer/luvut')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    that.setState({ luvut: myJson});
  });

  }



  render() {

    console.log("Render-metodissa.");

    const luvut = this.state.luvut.map((luku) =>
     <li>{luku}</li>
    ); 

    return (
      <div>
        <h1>WebDemon aloitussivu!</h1>
        <p>Tervetuloa!</p>
        <p>{this.state.luvut}</p>
        <ul style={{fontSize: 30}}>
          {luvut}
        </ul>
      </div>
    );
  }
}
