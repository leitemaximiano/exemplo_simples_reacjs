'use strict'

function meuComponente1() {
    return (
        React.createElement('div', null,
            React.createElement(meuComponente2)
        )
    )
}
function meuComponente2() {
    return (
        React.createElement('div', null,
            React.createElement(meuComponente3)
        )
    )
}
function meuComponente3() {
    return (
        React.createElement('div', null,
            React.createElement(meuComponente4)
        )
    )
}
function meuComponente4() {
    return (
        React.createElement('p', null, 'Sou um paragrafo!')
    )
}
function meuComponente() {
    return (
        React.createElement('div', null,
            React.createElement(meuComponente1)
        )
    )
}
ReactDOM.render(
    React.createElement(meuComponente),
    document.getElementById('app')
)
