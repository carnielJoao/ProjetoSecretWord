
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes da Pessoa</h2>
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            {idade >= 18 ? (
                <p>Pode tirar carteira</p>
            ) : (
                <p>Menor de Idade!</p>
            )}
    </div>
  );
};

export default UserDetails;
