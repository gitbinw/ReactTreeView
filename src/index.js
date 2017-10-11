import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


const input = {
    label: 'Earth',
    type: 'planet',
    children: [{
        label: 'Australia',
        type: 'country',
        children: [{
            label: 'Sydney',
            type: 'city',
            children: [{
                label: 'Nuix HQ',
                type: 'office',
                children: []
            }]
        }]
    }, {
        label: 'USA',
        type: 'country',
        children: [{
            label: 'San Franscisco',
            type: 'city',
            children: [{
                label: 'Nuix SF',
                type: 'office',
                children: []
            }]
        }, {
            label: 'Philadelphia',
            type: 'city',
            children: [{
                label: 'Nuix Philly',
                type: 'office',
                children: []
            }]
        }]
    }]
};
ReactDOM.render(
    <App node={input} />, 
    document.getElementById('app')
);

if (module.hot != undefined) module.hot.accept();


