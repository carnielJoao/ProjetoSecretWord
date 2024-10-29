const TemplateExpressions = () => {

    const name = "João";
    const data = {
        age: 23,
        job: "Programador",
    };

    return (
        <div>
            <h1>Olá {name}, tudo certo</h1>
            <p>Voce trabalha como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    );

};

export default TemplateExpressions;


// Interpolar dados = exibir dados ou executar js entre tags
// Consegue executar js entre essas tags {} que estão dentro das tags de HTML