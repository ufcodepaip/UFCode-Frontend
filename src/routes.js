import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import World from './features/world'
import CadastroQuestoes from './pages/CadastroQuestoes'
import ProblemsList from "./pages/ProblemsList"

function routes() { // direciona os botões do menu principal
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" component={Login} />
            <Route path='/game' component={World} />
            <Route path='/register' component={Register} />
            <Route path='/cadquest' component={CadastroQuestoes} />
            <Route path='/listProblems' component={ProblemsList} />
        </BrowserRouter>
    )
}

export default routes
