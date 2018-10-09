import React, {Component} from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Cristian', age: 26 },
            { id: 2, name: 'Manu', age: 46 },
            { id: 3, name: 'Stephani', age: 29 }
        ],
        showPersons: false
    };

    deletePersonHandler = (index) =>  {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, index) => {
        const person = {
            ...this.state.persons[index]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[index] = person;

        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    delete={this.deletePersonHandler}
                    change={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className="App">
                <Cockpit
                    togglePersons={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
