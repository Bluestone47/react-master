import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: 'asd', name: 'Max', age: '29' },
        { id: 'qweq', name: 'Manu', age: '26' },
        { id: '23d', name: 'Stephanie', age: '12' }
      ],
    }  
  }
  
  switchNameHandler = (newName) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: newName, age: '29' },
        { name: 'Manu', age: '26' },
        { name: 'Bruce', age: '32' }
      ],
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHangler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHangler} />
        {persons}
      </div>
    );
  }
}

export default App;
