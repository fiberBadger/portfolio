import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
        });
    }

    render(){
        const { error, info } = this.state;
        return(
            this.state.hasError ? 
            <div>
                <h1>Ahh Something went wrong!</h1>
            </div> 
          : this.props.children
        );
    }
}

export default ErrorBoundry;