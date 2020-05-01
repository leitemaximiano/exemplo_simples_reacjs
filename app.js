const NomeContext = React.createContext('nome');

function MeuComponente4() {
  return /*#__PURE__*/React.createElement("section", {
    className: "meuComponente4"
  }, /*#__PURE__*/React.createElement("p", null, "meuComponente4"));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "meuComponente3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente2(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "meuComponente2"
  }, /*#__PURE__*/React.createElement("header", null, children), /*#__PURE__*/React.createElement(MeuComponente3, null));
}

function MeuComponente1() {
  const nome = 'Maximiano';
  return /*#__PURE__*/React.createElement("section", {
    className: "meucomponente1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente4, null)));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.querySelector('#app'));
