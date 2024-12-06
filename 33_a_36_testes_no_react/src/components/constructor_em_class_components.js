const { Component } = require('react');

class CustomState extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount || 0 };
    }
}

class Binding extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.message);
    }
}

class Complex extends Component {
    constructor(props) {
        super(props);
        const initialValue = someComplexFunction(props.value);
        this.state = { value: initialValue };
    }
}

function someComplexFunction(){
    console.log('Sou uma função muito complexa.');
}

class ClassFields extends Component {
    state = { value: this.props.value };
}
