import MyComponent from "./MyComponent";

// Foi criado um arrow function 
const FirstComponent = () => {

    // Essa função faz isso

    /*
        Multi Line
    */

    return (
        <div>
            {/* Algum Comentario*/}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;
