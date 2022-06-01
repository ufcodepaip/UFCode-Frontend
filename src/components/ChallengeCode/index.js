import React from 'react'
import './style.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { submission } from '../../api/index'
import Editor from '@monaco-editor/react'

function Challenges(props) {
    const challenge = props.challengeId
    // props.challenge;
    const studentId = localStorage.getItem("name") // props.id// props.studentId;
    const [code, setCode] = useState("")

    async function handleCodeSubmission(e) {
        e.preventDefault()
        if(challenge.id == null){
            console.log(challenge.id + "teste")
            alert("não há questões para sua posição")
        }
        else{
            const jsonData = {
                codeInput: code, 
                student_id: studentId, 
                problem_id: challenge.id, 
                language_id: null
            }
    
            console.log(jsonData)
            
            await submission(jsonData).then( res => {
                console.log(res.data)
                console.log("res.data.error  " + res.data.error)
                if(res.data.error === 'false')
                    alert("Sucesso!!!")
                else
                    alert("Erro. Razão do erro: \n\n\n" + res.data.error)
    
            }).catch(error => {
                alert("Erro. Razão do erro: \n sintaxe do código incorreta \n" + error)
            })
        }
        
    }

    const placeholder = "Ao ler a entrada, use sempre input(), sem nenhum valor dentro dos parênteses. Exemplo: int(input()) para ler um número e convertê-lo para inteiro.\nSeu programa não deve conter acentos. Caso contrário, o sistema irá apontar erro em sua solução.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'\n\nDivirta-se, bom jogo!"

    return (
        <form onSubmit={handleCodeSubmission} id='form-code'>
            <div className='code-container'>
                <Editor 
                    height='650px'
                    theme='vs-dark'
                    defaultLanguage='python'
                    value={code}
                    onChange={(value) => setCode(value)}
                />

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