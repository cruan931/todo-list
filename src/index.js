import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Task extends React.Component {
	constructor(props) {
		super(props);
		
		this.labelRef = React.createRef();
		
		this.state = {
			checked: false,
			name: '',
		};
		
		let setName = () => {};
	}
	
	handleClick = e => {
		const checkedLabel = this.state.checked;
		if (checkedLabel === false) {
			this.labelRef.current.style.textDecoration = "line-through";
		} else {
			this.labelRef.current.style.textDecoration = "none";
		}

		this.setState({
			checked: !this.state.checked 
		});
	};
  
	setName = value => {
		this.setState({
			name: value,
		});
	}

	render() {
		return (
		<div>
			<div className="task">
			
				<input 
					type="checkbox" 
					id="myCheck"  
					name="myCheck"
					onClick={this.handleClick}
				>
				</input>
		
				<input 
					type="text" 
					onChange={(e)=>this.setName(e.target.value)}
					ref={this.labelRef} 
					htmlFor="myCheck"
				>
				</input>
		  
			</div>
		  
		</div>
		);
	}
}

class List extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			tasks: [],
			taskCount: 0,
		};
	}
  
	handleAddClick() {
		const newTasks = this.state.tasks.slice();
	
		let task = new Task ();
		newTasks.push(task);
		
		this.setState({
			tasks: newTasks,
			taskCount: this.state.taskCount + 1,
		});
		
		this.renderTask();
	}
  
	renderTask () {
		return (
			<div>{this.state.tasks.map(task => <Task task={task}/>)}</div>
		);
	}
  
	renderAdd () {
		return (
			<button
				onClick={() => this.handleAddClick()}      
			>
			Add Task     
			</button>
		);
	}
  
	render() {
		const status = 'To Do List';
    
		return (
			<div className="list">
				<div className="status">{status}</div>
				{this.renderAdd()}
				{this.renderTask()}
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<List />,
	document.getElementById('root')
);
