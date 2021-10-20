import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import MainGame from "../../components/MainGame";
import { useHistory } from 'react-router-dom'

// function MainPage() { //Serve para direcionar para a página de login ou de registro.
//     return (
//         <MainGame>
//             <div className='button-container'>
//                 <Link to='/login'>
//                     Entrar
//                 </Link>
//                 <Link to='/register'>
//                     Registrar
//                 </Link>
//             </div>
//         </MainGame >
//     )
// }

function MainPage() {
  const history = useHistory();

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
							<option selected>Area</option>
							<option value="1">Matematica</option>
							<option value="2">Física</option>
							<option value="3">Biologia</option>
						</select>
					</div>
					<div className="col-md-5 px-5">
						<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
							<option selected>Assunto</option>
							<option value="1">Estrutura de Repetição</option>
							<option value="2">Estrutura Condicional</option>
							<option value="3">funcções</option>
						</select>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-2">
						<div className="row justify-content-center">
								<button type="button" onClick={e=>history.push('/game')} class="btn btn-danger">Jogar</button>
						</div>
					</div>
				</div>
      </div>
    </MainGame>
  );
}

export default MainPage;
