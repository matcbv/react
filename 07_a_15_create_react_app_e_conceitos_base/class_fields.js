import { Component } from "react";

/* --------- Sobre ---------

    São propriedades ou métodos declarados diretamente dentro do corpo da classe, fora do construtor. Eles podem ser usados para:

    - Declarar variáveis de instância (propriedades).
    - Declarar métodos (funções de instância).
    - Vincular métodos e propriedades automaticamente ao contexto correto (this).
*/

// Ex.:

class ClassFields{
    nome = 'Matheus';

    sayName = () => {
        console.log('Olá! Meu nome é', this.nome);
    };
};

let instance = new ClassFields();
instance.sayName();

// --------- Campos públicos X privados ---------

class PrivateAndPublic{
    // Podemos criar campos privados em nossas classes através do símbolo de hashtag (#). Esses, serão acessíveis de forma direta somente dentro do escopo da nossa classe.
    #balance = 786;
    credit = 500;

    checkBalance = () => {
        console.log('Seu salto atual é de R$', this.#balance.toFixed(2));
    };
};

instance = new PrivateAndPublic();
instance.checkBalance();

// --------- Métodos estáticos com Class Fields ---------

class Static{
    static somar = (x, y) => {
        console.log(`A soma entre ${x} e ${y} é igual:`, x + y);
    };
};

Static.somar(1, 10);

// --------- Quando usar constructor ---------

/*
    1°- Parâmetros dinâmicos:

    Ao trabalharmos com parâmetros recebidos dinâmicamente, é necessário a utilizão do constructor para a inicialização das propriedades com esses dados.

    Ex.:
*/
class DinamicParams{
    constructor(f_var, s_var){
        this.f_var = f_var;
        this.s_var = s_var;
    };
};

instance = new DinamicParams();

/*
    2°- Uso de super:

    Caso a classe esteja herdando de outra, onde é necessário o uso de super, devemos obrigatoriamente utilizar o constructor.

    Ex.:
*/
class Super extends DinamicParams{
    constructor(f_var, s_var, t_var){
        super(f_var, s_var);
        this.t_var = t_var;
    };
};

instance = new Super();

/*
    3°- Necessidade de binding do this:

    Caso se faça necessário o binding de algum método de nossa classe, o constructor também é necessário.

    Ex.:
*/
class Binding extends Component{
    constructor(props){
        super(props);
        this.notThisFunc = this.notThisFunc.bind(this);
        this.state = {
            name: 'Matheus Cerqueira'
        };
    };

    notThisFunc(){
        const { name } = this.state
        console.log(name)
    };
};

instance = new Super();
