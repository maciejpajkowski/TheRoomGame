import React from 'react';
import Equipment from './Equipment';

export default class CharacterInfo extends React.Component {
  

  render() {
    return (
      <div>
        <h1>Character Info</h1>
        <p>Level: {this.props.level}</p>
        <p>Health: {this.props.health}</p>
        <p>Experience: {this.props.exp}</p>
        <p>Gold: {this.props.gold}</p>
        <div>
          <h2>Equipment</h2>
          {this.props.equipment.length === 0 && <p>Your equipment is empty.</p>}
          {this.props.equipment.map((element, index) => (
             <Equipment
               key={element}
               eqName={element}
               count={index}
             />
            ))
          }
        </div>
      </div>
    );
  }

}