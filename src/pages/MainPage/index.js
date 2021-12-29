import React, {useEffect, useState} from "react";
import "./style.css";
import MainGame from "../../components/MainGame";
import { useHistory } from 'react-router-dom'

import { listCourses } from '../../api/listCourses'

function MainPage() {
  const history = useHistory();

  const [cursos, setCurso] = useState([])

  useEffect(() => {
	listCourses().then(response => {
			setCurso(response.data)
			console.log("test cursos: passed!")
			console.log(response.data)
		  }).catch(error => console.log("test cursos: failed!", error))
	  
  }, [])

  return (
    <MainGame>
      <div className="container overflow-hidden">
				<div className="row justify-content-center">
					<div className="col-md-4  p-4">
						<input class="form-control form-control-lg" type="text" placeholder="Nome do jogador" aria-label=".form-control-lg example"/>
					</div>
				</div>
				<div className="row  justify-content-center px-4">
					<div className="col-md-5 px-5">
						
						<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
							<option selected>Curso</option>
								{
									cursos.map((curso) => (
										<option value={curso.name} key={curso.id}> {curso.name} </option>
									))
								}
						</select>
					</div>
					<div className="col-md-5 px-5">
						<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
							<option selected>Módulo</option>
							<option value="1">Estrutura de Repetição</option>
							<option value="2">Estrutura Condicional</option>
							<option value="3">Funções</option>
						</select>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-2">
						<div className="row justify-content-center">
							<button type="button" onClick={() => history.push('/game')} class="btn btn-danger">Jogar</button>
						</div>
					</div>
				</div>
      </div>
    </MainGame>
  );
}

export default MainPage;
