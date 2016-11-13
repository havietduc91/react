import React from 'react';

class App extends React.Component {
    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };

        return (
            <div>
                <h1 style = {myStyle}>Header</h1>
                <h1>{1+1}</h1>
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>
                {//End of the line Comment...}
                {/*Multi line comment...*/}
            </div>
        );
    }
}

export default App;