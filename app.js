const NomeContext = React.createContext('nome')

const meuComponente4 = () => (
    React.createElement(NomeContext.Consumer, null, 
        (nome) => (
            React.createElement('section', {className: 'meuComponente3'},
                React.createElement('p', null, `meu nome é ${nome}`)
            )
        )
    )
)

const meuComponente3 = () => (
    React.createElement('section', {className: 'meuComponente3'},
        React.createElement(meuComponente4)
    )
)

const meuComponente2 = () => (
    React.createElement('section', {className: 'meuComponente2'},
        React.createElement(meuComponente3)
    )
)

const meuComponente1 = () => (
    React.createElement(NomeContext.Provider, { value: 'Maximiano'},
        React.createElement('section', {className: 'meuComponente1'},
            React.createElement(meuComponente2)
        )
    )
)
    

const meuComponente = () => (
    React.createElement('section', {className: 'container'}, 
        React.createElement(meuComponente1)
    )
)
    

ReactDOM.render(
    React.createElement(meuComponente),
    document.querySelector('#app')
)