import { useState } from 'react'
import './MyFrom.css'

const MyForm = ({user}) => {
    // 6 - Controlled inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState( user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email, bio, role);

        // validação
        // envio

        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("")
    };

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' value={name} onChange={handleName}/>
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* Simplificando a manipulção de state */}
                <input type="email" name='email' placeholder='Digite seu E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm
