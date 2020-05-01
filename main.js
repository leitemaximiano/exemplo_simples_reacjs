const NomeContext = React.createContext('nome')

function MeuComponente4() {
    return (
    <section className="meuComponente4">
        <p>meuComponente4</p>
    </section>
    )
}

function MeuComponente3() {
    return (
    <div className='meuComponente3'>
        <MeuComponente4 />
    </div>
    )
}

function MeuComponente2(props) {
    const { children } = props;
    return (
    <div className='meuComponente2'>
        <header>
            {children}
        </header>
        <MeuComponente3 />
    </div>
    )
}

function MeuComponente1() {
    const nome = 'Maximiano'
    return (
    <section className='meucomponente1'>
        <MeuComponente2>
            <MeuComponente4></MeuComponente4>
        </MeuComponente2>
    </section>
    )
}
  
function MeuComponente() {
    return (
    <div className='container'>
        <MeuComponente1 />
    </div>)
}
    
ReactDOM.render(
    <MeuComponente />,
    document.querySelector('#app')
)