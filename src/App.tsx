// O componente é uma função que retorna JSX = JAVASCRIPT XML
//Um componente é um pedaço de código isolado que pode ser reaproveitado.

// import { Button } from './components/Button';

import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  return (

    <div className="container">

      <ExperienceBar />

    </div>

    // <div>
    //   <button style={{ height: '3rem' }}>teste</button>
    // </div>

    // // JSX
    // <div>
    //   {/* Quando existe algo dentro de um componente, esse conteúdo se chama CHILDREN */}
    //   <Button color="red">
    //     Botão 01
    //   </Button>
    //   <Button color="blue">
    //     Botão 02
    //   </Button>
    //   <Button color="green">
    //     Botão 03
    //   </Button>

    // </div>
  );
}

export default App;
