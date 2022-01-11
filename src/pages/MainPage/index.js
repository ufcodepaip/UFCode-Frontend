import React, {useEffect, useState} from "react";
import "./style.css";
import MainGame from "../../components/MainGame";
import { useHistory } from 'react-router-dom'

import { listCourses } from '../../api/listCourses'
import { listModules } from '../../api/listModules'

function MainPage() {
  const history = useHistory();

  const [cursos, setCurso] = useState([])
  const [modulos, setModulo] = useState([])

  useEffect(() => {
	listCourses().then(response => {
		setCurso(response.data)
		console.log("test cursos: passed!")
		console.log(response.data)
		}).catch(error => console.log("test cursos: failed!", error))
  }, [cursos])

  useEffect(() => {
	listModules().then(response => {
		setModulo(response.data)
		console.log("test Modulos: passed!")
		console.log(response.data)
		}).catch(error => console.log("test Modulos: failed!", error))
  }, [modulos])

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
								{
									modulos.map((modulo) => (
										<option value={modulo.name} key={modulo.id}> {modulo.name} </option>
									))
								}
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
