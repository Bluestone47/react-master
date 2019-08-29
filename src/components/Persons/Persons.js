import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   return  state;
  // }

  // componentWillReceiveProps(props) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // save the scroll position
  //   return {message: 'Snapshot!'}
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(snapshot)
  // }
  
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)} 
        />
      )
    })
  }
}

export default Persons;
