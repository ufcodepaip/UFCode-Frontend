import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { dispatchQuest } from './dispatchQuest'
import api from '../../services/api'
import { LOGIN, QUEST } from '../../config/constants'

function Challenges(props) {
    const initialState = {
        id: null,
        name: null,
        area: null,
        description: null,
        inputFile: null,
        outputFile: null,
        __v: null,
        posX: null,
        posY: null
    }

    const [currentQuest, setCurrentQuest] = useState(initialState)
    const [questList, setQuestList] = useState([])
    const login = localStorage.getItem(LOGIN)
    useEffect(() => {
        api.get("/challenges")
            .then(response => {
                setQuestList(response.data)
            })
    }, [login])

    useEffect(() => {
        // existe alguma quest na posicao atual?
        const currentQuest = questList.find(item => props.position[0] === item.posX && props.position[1] === item.posY)

        // se sim, seta a quest.
        if (currentQuest) {
            setCurrentQuest(currentQuest)
            props.dispatchQuest(QUEST, currentQuest)
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
                        {currentQuest.output}
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