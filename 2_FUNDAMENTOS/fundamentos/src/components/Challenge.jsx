const Challenge = () => {

    const valorA = 5;
    const valorB = 4;
    
    const somarNumeros = () => {
       console.log(valorA + valorB );
    };

    return(
        <div>
            <div>
                <h3>Valor A: {valorA}</h3><br />
                <h3>Valor B: {valorB}</h3>
            </div>
            <div>
                <button onClick={somarNumeros}>SOMAR</button>
            </div>
            
        </div>
    );
};

export default Challenge;