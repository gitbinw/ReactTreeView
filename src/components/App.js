import React from 'react';
import s from '../../scss/main.scss';

function Nodes(props) {
	const arrNodes = props.nodes;
	const htmlNodes = arrNodes.map((n, i)  => {
		return <li key={i} onClick={() => props.handleClick(n) }>
				{n.label + '(' + n.type + ')'}
				{(n.children && n.children.length >0 ? <Nodes nodes={n.children} handleClick={props.handleClick} /> : null)}
			</li>
	});
	
	return <ul>
				{htmlNodes}
			</ul>
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(node) {
		if (node && node.label) console.log(node.label);
	}
	render() {
		const node = this.props.node;
		return <ul>
				<li onClick={() => this.handleClick(node)}>
					<span>
						{node.label + '(' + node.type + ')'}
					</span>
					<Nodes nodes={node.children} handleClick={this.handleClick} />
				</li>
			</ul>
	}
}