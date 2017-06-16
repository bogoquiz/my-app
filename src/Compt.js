import React, { Component } from 'react';

class Compt extends Component {
	constructor(){
		super();		
		this.state = {
			task: ["uno", "dos", "tres"]
		}
	}

	render() {
		return (
			<div>
				<h1>Compot</h1>
					<ul>
						{this.state.task.map(num => 
							<li>{num}</li>
						)}
					</ul>
					<button onClick={this.addTask.bind(this)}>
						Agrege elemento
					</button>	
					<button onClick={this.updateTask.bind(this)}>
						Modificar elemento
					</button>
			</div>		
		);
	}

	addTask() {
		this.setState({
			task: this.state.task.concat("nuevo elemento")
		});
	}

	updateTask() {
		const index = this.state.task.findIndex(task =>
			task === "dos"
		);

	/*	this.setState({
			task: this.state.task.map((task, i) => 
				i === index ? "update" : task
			)
		})
	}*/

	/*const task = this.state.task;

	this.setState({

		task: [
			...task.slice(0,index),
			"update2",
			...task.slice(index + 1)
		]


	})*/

	const task = this.state.task;
	const index2 = 1;

	this.setState({
		task: task
				.slice(0, index)
				.concat("update3")
				.concat(task.slice(index2 + 1))
	})

	}
}

export default Compt;