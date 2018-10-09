import React from 'react';

import Person from '../Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    delete={() => props.delete(index)}
                    change={(event) => props.change(event, index)}
                />
            );
        })
    );
};

export default persons;