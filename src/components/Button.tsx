// componente exemplo - não será utilizado

import { useState } from 'react';

//Criando um type ou interface para especificar propriedades ao componente
interface ButtonProps {
    color: string;
    children: string;
}
//Logo abaixo, o componente está recebendo como parâmetro todas as suas propriedas
export function Button(props: ButtonProps) {

    const [counter, setCounter] = useState(1)

    function increment() {

        setCounter(counter + 1);

    }

    return (
        // {{}} ==> Serve para inserir um objeto dentro do JS
        // Quando usamos chaves {} significa que queremos usar uma varíavel dentro do HTML
        <button
            type="button"
            style={{ backgroundColor: props.color }}
            onClick={increment}
        >

            {props.children} <strong>{counter}</strong>

        </button>
    )
}