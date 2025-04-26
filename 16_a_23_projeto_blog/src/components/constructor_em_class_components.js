const { Component } = require('react');

// Ao trabalharmos com classes em nossos components, há casos em que iremos precisar do uso do constructor. Esses casos são:

// Chamadas personalizadas ao inicializar o estado (state): Se você precisa inicializar o estado de forma personalizada ou trabalhar com variáveis antes de definir o estado. Ex.:

class CustomState extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount || 0 };
    };
};

// Bindings de métodos ao this: Caso você precise vincular métodos de instância ao contexto correto (normalmente ao this do componente). Ex.:

class Binding extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        console.log(this.props.message);
    };
};

// Uso de lógica ou configurações iniciais complexas: Se for necessário realizar cálculos ou lógica no momento da construção do componente. Ex.:

class Complex extends Component {
    constructor(props) {
        super(props);
        const initialValue = someComplexFunction(props.value);
        this.state = { value: initialValue };
    };
};

function someComplexFunction(value){
    console.log('Sou uma função muito complexa.');
    return value;
};

// Com a chegada das class fields, o React simplificou todo o processo, tornando possível inicializar o state diretamente como uma propriedade de classe e configurando automaticamente as props internamente. Dessa forma, o uso do constructor passou a ser cada vez menos comum. Ex.:

class ClassFields extends Component {
    state = { value: this.props.value };
};
