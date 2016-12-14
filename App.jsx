import React from 'react';
import { DataTable } from 'react-data-components';

let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
        };

        this.handleAdd = this.handleAdd.bind(this);
    };

    handleAdd() {
        let newItems = this.state.items.concat([prompt('Create New Item')]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        let items = this.state.items.map(function(item, i) {
            return (
                <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );

        }.bind(this));

        // Generate random data
        let names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
        let cities = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
        let addresses = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];

        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                name: names[~~(Math.random() * names.length)],
                city: cities[~~(Math.random() * cities.length)],
                address: addresses[~~(Math.random() * addresses.length)]
            });
        }

        let columns = [
            { title: 'Name', prop: 'name'  },
            { title: 'City', prop: 'city' },
            { title: 'Address', prop: 'address' }
        ];

        return (
            <div>
                <button onClick = {this.handleAdd}>Add Item</button>

                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
                    {items}
                </ReactCSSTransitionGroup>

                <DataTable
                    className="container"
                    keys="id"
                    columns={columns}
                    initialData={data}
                    initialPageLength={5}
                    initialSortBy={{ prop: 'city', order: 'descending' }}
                    pageLengthOptions={[ 5, 20, 50 ]}
                />
            </div>
        );
    }
}

export default App;