import React from 'react';
import Reactable from 'reactable';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

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

        let Table = Reactable.Table;

        return (
            <div>
                <button onClick = {this.handleAdd}>Add Item</button>

                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
                    {items}
                </ReactCSSTransitionGroup>

                <Table className="table" id="table" data={[
                    { Name: 'Lee Salminen', Age: '23', Position: 'Programmer'},
                    { Name: 'Griffin Smith', Age: '18', Position: 'Engineer'},
                    { Name: 'Ian Zhang', Age: '28', Position: 'Developer'}
                ]}
                   sortable={[
                       {
                           column: 'Name',
                           sortFunction: function(a, b){
                               // Sort by last name
                               let nameA = a.split(' ');
                               let nameB = b.split(' ');

                               return nameA[1].localeCompare(nameB[1]);
                           }
                       },
                       'Age',
                       'Position'
                   ]}
                   defaultSort={{column: 'Age', direction: 'desc'}}/>
            </div>
        );
    }
}

export default App;