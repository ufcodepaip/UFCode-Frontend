import React from 'react'
import './style.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { submission } from '../../api/index'
import api from '../../services/api'
import { LOGIN } from '../../config/constants'

function Challenges(props) {
    const challenge = props.challengeId
    // props.challenge;
    const studentId = localStorage.getItem("name") // props.id// props.studentId;
    const [code, setCode] = useState("")

    async function handleCodeSubmission(e) {
        e.preventDefault()
        console.log(props.challengeId)

        const jsonData = {
            codeInput: code, 
            student_id: studentId, 
            problem_id: challenge.id, 
            language_id: null
        }

        console.log(jsonData)
        const response = await submission(jsonData)
        const submissionResult = response.data
        if (submissionResult.result != 'false') {
            console.log(submissionResult)
            alert("Sucesso!!!")
        } else {
            alert("Erro. Razão do erro: \n\n\n" + submissionResult.error)
        }
    }

    const placeholder = "Ao ler a entrada, use sempre input(), sem nada dentro dos parênteses. Exemplo: int(input()) para ler um número.\nSeu programa não deve conter acentos. Caso contrário, o sistema irá apontar erro em sua solução.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'\n\nBoa sorte!"

    return (
        <form onSubmit={handleCodeSubmission} id='form-code'>
            <div className='code-container'>
                <p className='text-questao'> UFCODE: </p>
                <textarea value={code} onChange={e => setCode(e.target.value)} type='textarea' placeholder={placeholder} rows='5' cols='5' className='textarea-questao' />
                <input type='button' onClick={() => setCode("")} className='btn-questao' value='Limpar' />
                <button type='submit' value='enviar' className='btn-questao' > Enviar </button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
        id: state.player.id,
        challengeId: state.quest
    }
}

export default connect(mapStateToProps)(Challenges)