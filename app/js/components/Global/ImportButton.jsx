import React, { Component, PropTypes } from 'react';

class ImportButton extends Component {


    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.importImage = this.importImage.bind(this);
    }
    importImage(){
    	this.setState(preState => ({
    		isToggleOn: !preState.isToggleOn
    	}))
    }
 	componentDidMount() {
 	    
 	}
 	componentWillUnmount() {
 	    
 	}
    render() {
        return (
        	<div>
        		<button onClick={this.importImage}>
        			{this.state.isToggleOn ? 'On' : 'Off'}
        		</button>
        	</div>    
        );
    }
}

export default ImportButton;
