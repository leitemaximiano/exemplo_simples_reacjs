const NomeContext = React.createContext('nome')

function MeuComponente4() {
    return (
    <NomeContext.Consumer>
        { (nomeContext) => (
            <section className="meuComponente4">
                <p>{nomeContext}</p>
            </section>
        )}
    </NomeContext.Consumer>
    )
}

function MeuComponente3() {
    return (
    <div className='meuComponente3'>
        <MeuComponente4 />
    </div>
    )
}

function MeuComponente2() {
    return (
    <div className='meuComponente2'>
        <MeuComponente3 />
    </div>
    )
}

function MeuComponente1() {
    const nome = 'Maximiano'
    return (
    <NomeContext.Provider value={nome}>
        <section className='meucomponente1'>
            <MeuComponente2 />
        </section>
    </NomeContext.Provider>
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