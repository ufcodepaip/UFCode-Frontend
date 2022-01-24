import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { dispatchQuest } from './dispatchQuest'
import { listProblems } from '../../api'
import { QUEST } from '../../config/constants'
import { useHistory } from 'react-router-dom'

function Challenges(props) {
    const history = useHistory();

    const initialState = {
        id: "cachorro 123",
        name: null,
        description: null,
        input: null,
        expectedOutput: null,
        houseId: null,
        positionX: null,
        positionY: null,
        difficultyId: null,
        courses: null,
        modules: null
    }

    const [currentQuest, setCurrentQuest] = useState(initialState)
    const [questList, setQuestList] = useState([])
    const login = localStorage.getItem("name")
    const _course = localStorage.getItem("course")
    const _module = localStorage.getItem("module")

    useEffect(() => {
        listProblems(_course, _module).then(res => {
            setQuestList(res.data)
            if(res.data.length === 0)
                history.push('/')
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [login])

    useEffect(() => {

        let _currentQuest = null
        const total = questList.length

        if (props.position[0] == 512 && props.position[1] == 160 ||
            props.position[0] == 160 && props.position[1] == 352 ||
            props.position[0] == 576 && props.position[1] == 416 ||
            props.position[0] == 192 && props.position[1] == 608 ||
            props.position[0] == 608 && props.position[1] == 608 ){
                const random = Math.round(Math.random() * total)
                console.log(random)
                _currentQuest = questList[random]
                console.log(_currentQuest)
            }


        // existe alguma quest na posicao atual?

        // se sim, seta a quest.
        if (_currentQuest != null) {
            console.log("ENTROU AQUI")
            setCurrentQuest(_currentQuest)
            props.dispatchQuest(QUEST, _currentQuest)
        } else {
            setCurrentQuest(initialState)
            props.dispatchQuest(QUEST, initialState)
        }
    }, [props.position[0], props.position[1]])

    const renderQuest = () => {
        return (
            <span className='text'>
                <div className='gridName box'>
                    <h3 className="boxTitle">Nome e Area</h3>
                    <span className='info'>
                        {currentQuest.name}
                    </span>
                    <br></br>
                    <span className='info'>
                        {currentQuest.area}
                    </span>
                </div>
                <div className='gridDesc box'>
                    <h3 className="boxTitle">Descrição</h3>
                    <span className='info'>
                        {currentQuest.description}
                    </span>
                </div>
                <div className='gridEntrada box'>
                    <h3 className="boxTitle">Entrada</h3>
                    <span className='info'>
                        {currentQuest.input}
                    </span>
                </div>
                <div className='gridSaida box'>
                    <h3 className="boxTitle">Saída</h3>
                    <span className='info'>
                        {currentQuest.expectedOutput}
                    </span>
                </div>
            </span>
        )
    }

    return (
        <div className='text-container'>
            <div className='textbox'>
                {renderQuest()}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
        id: state.player.id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchQuest(type, quest) {
            const action = dispatchQuest(type, quest)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges)