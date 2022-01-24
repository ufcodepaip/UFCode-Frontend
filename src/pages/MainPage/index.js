import React, { useEffect, useState } from "react";
import "./style.css";
import MainGame from "../../components/MainGame";
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { listCourses, listModules } from '../../api/index'
import { listProblems } from '../../api'


function MainPage() {
	const history = useHistory();
	const { register, handleSubmit } = useForm()
	const [cursos, setCurso] = useState([])
	const [modulos, setModulo] = useState([])
	const [course, setCourse] = useState('any')
	const [module, setModule] = useState('any')

	useEffect(() => {
		listCourses().then(response => {
			setCurso(response.data)
			console.log("test cursos: passed!")
			console.log(response.data)
		}).catch(error => console.log("test cursos: failed!", error))
	}, [])

	useEffect(() => {
		listModules().then(response => {
			setModulo(response.data)
			console.log("test Modulos: passed!")
			console.log(response.data)
		}).catch(error => console.log("test Modulos: failed!", error))
	}, [])

	const onSubmit = (game) => {
		console.log(game)
		localStorage.setItem("name", game.name)
		localStorage.setItem("course", game.course)
		localStorage.setItem("module", game.module)

		listProblems(game.course, game.module).then(res => {
			console.log(res.data)
            if(res.data.length !== 0){
                history.push('/game')
			}else{
				alert("Não há questões para curso e módulo selecionado")
			}
			
        }).catch(error => {
			history.push('/')
        })

	}
	return (
		<MainGame>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="container overflow-hidden">
					<div className="row justify-content-center">
						<div className="col-md-4  p-4">
							<input class="form-control form-control-lg" type="text" placeholder="Nome do jogador" aria-label=".form-control-lg example"
								{...register("name", {
									required: "Required",
								})}
							/>
						</div>
					</div>
					<div className="row-md-5  justify-content-center px-4">
						<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
							labelId="course"
							id="select"
							value={course}
							{...register("course", {
								required: "Required",
							})}
							onChange={(event) => setCourse(event.target.value)}
							label="course">

							<option value='any'>select your value</option>

							{cursos.map(x => {
								return <option value={x.id}>{x.name}</option>
							})}
						</select>
						<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
							labelId="module"
							id="select"
							value={module}
							{...register("module", {
								required: "Required",
							})}
							onChange={(event) => setModule(event.target.value)}
							label="module">

							<option value='any'>select your value</option>

							{modulos.map(x => {
								return <option value={x.id}>{x.name}</option>
							})}
						</select>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-2">
							<div className="row justify-content-center">
								<button type="submit" className="btn btn-danger">Jogar</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</MainGame>
	);
}

export default MainPage;
