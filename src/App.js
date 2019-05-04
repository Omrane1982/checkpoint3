import React from 'react';

import './App.css';
import Card from './component1';
import Card2 from './component2';
import Card3 from './component3';
import tunis from './tunis.jpg';
import sfax from './sfax.jpg';
import sousse from './sousse.jpg'



class App extends React.Component{
 
  render(){
   
    const mystyle1={
      backgroundColor:"blue"
    }
    const mystyleButton={
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      
      fontSize: 16


    }
    const mystyle2={
      backgroundColor:"green"
    }
    const mystyle3={
      backgroundColor:"yellow"
    }
    const mystyle4={
      textAlign:"center",
      fontWeight: "bolder",
      color:"red"
    }
  return (
    <div className="App">
      <div className="Header">
        <div className="title"> Notre programme</div>
        <div className="container">
          <Card   style={mystyle1}  styleButton={mystyleButton} title="program" paragraph="Thèmes associés : Ipsem lorum donc lorem ipsus où 'lorem ipsum'. Lorem ipsem. Lorem. Lorum ipsum. Ipsum et lorem ipsum dolor sit amet... 'lorem'. 'ipsum' ou lorem ipsum dolor donc lorem ipsum dolor sit, generateur faux textes. Lorem ipsun ou lorem ipsom. Lorem ipsum generator. Lorem lipsum or loreum ipsum ni lorem epsum. Lorem ipsum text, faux texte latin. Lorem ipsum car loren ipsum ou faux texte.	Liens associés " />
          <Card className="bg2" style={mystyle2} styleButton={mystyleButton} title="program" paragraph="Thèmes associés : Ipsem lorum donc lorem ipsus où 'lorem ipsum'. Lorem ipsem. Lorem. Lorum ipsum. Ipsum et lorem ipsum dolor sit amet... 'lorem'. 'ipsum' ou lorem ipsum dolor donc lorem ipsum dolor sit, generateur faux textes. Lorem ipsun ou lorem ipsom. Lorem ipsum generator. Lorem lipsum or loreum ipsum ni lorem epsum. Lorem ipsum text, faux texte latin. Lorem ipsum car loren ipsum ou faux texte.	Liens associés " />
          <Card className="bg3" style={mystyle3} styleButton={mystyleButton} title="program" paragraph="Thèmes associés : Ipsem lorum donc lorem ipsus où 'lorem ipsum'. Lorem ipsem. Lorem. Lorum ipsum. Ipsum et lorem ipsum dolor sit amet... 'lorem'. 'ipsum' ou lorem ipsum dolor donc lorem ipsum dolor sit, generateur faux textes. Lorem ipsun ou lorem ipsom. Lorem ipsum generator. Lorem lipsum or loreum ipsum ni lorem epsum. Lorem ipsum text, faux texte latin. Lorem ipsum car loren ipsum ou faux texte.	Liens associés " />
          <Card className="bg4" style={mystyle2} styleButton={mystyleButton}  title="program" paragraph="Thèmes associés : Ipsem lorum donc lorem ipsus où 'lorem ipsum'. Lorem ipsem. Lorem. Lorum ipsum. Ipsum et lorem ipsum dolor sit amet... 'lorem'. 'ipsum' ou lorem ipsum dolor donc lorem ipsum dolor sit, generateur faux textes. Lorem ipsun ou lorem ipsom. Lorem ipsum generator. Lorem lipsum or loreum ipsum ni lorem epsum. Lorem ipsum text, faux texte latin. Lorem ipsum car loren ipsum ou faux texte.	Liens associés " />

        </div>
      </div>

<div className="container2">
<h1 className="title2"> QUELQUE CHIFFRES</h1>


<div className="statistique">
<div className="nt">
<Card2 statis="+20,000"/>
<Card2 statis2="Passionné du"/>
<Card2 statis3="Digital"/>
</div>
<div className="nt">
<Card2 statis="+500,000"/>
<Card2 statis2="etudiant depuis de"/>
<Card2 statis3="Digital"/>
</div>
<div className="nt">
<Card2 statis="+300,000"/>
<Card2 statis2="Produit devellopé"/>

</div>
<div className="nt">
<Card2 statis="+30"/>
<Card2 statis2="Instructeur Game"/>
<Card2 statis3="Web mail"/>
</div>
<div className="nt">
<Card2 statis="+50"/>
<Card2 statis2="Speaker"/>
<Card2 statis3="Digital"/>
</div>
<div className="nt">
<Card2 statis="400m²"/>
<Card2 statis2="Hackerspace"/>
<Card2 statis3="Go nmycode"/>
</div>
</div>


</div>
<div className="footer">
<p style={mystyle4}> les sessions se passe dans les Hackerspace de Go My Code</p>
<div className="footer-container">

  <div >
  <img src={tunis} width="300" height="100"/>
  <h1> Tunis</h1>
</div>

<div >
  <img src={sfax} width="300" height="100"/>
  <h1> Sfax</h1>
</div>

<div >
  <img src={sousse} width="300" height="100"/>
  <h1> Sousse</h1>
</div>
</div>


</div>

    </div>
  );
}
}
 

export default App;
