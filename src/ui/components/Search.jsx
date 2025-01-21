import { useMenu } from "../../context/MenuContext";
import { FaCar, FaUser } from 'react-icons/fa';
import { SearchByCarOrPerson } from "./";
import { useState } from "react";

export const Search = () => {
  // Obtener 'overlay' del contexto
	const { overlay } = useMenu();

	const [entity, setEntity] = useState('car');
	const handleCarClick = () => setEntity('car');
  const handlePersonClick = () => setEntity('person');

  return (
    <div>

      {/* Fondo oscuro (overlay), se muestra si overlay es true */}
      {overlay && (
          <div className="overlay" style ={{ position: 'fixed',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)',zIndex: 999 }}></div>
      )}

      {/* El div que aparece, se muestra si overlay es true */}
      {overlay && ( <div className='overlay-div'>

					{/* Titulo */}
          <h4 className='text-center mb-4'>Buscar</h4>

					{/* Contenedor */}
					<div className="d-flex mb-3 justify-content-center">
						
						 {/* Primer elemento: Carro como botón */}
						<div className={entity === 'car' ? 'border-bottom-grueso' : ''}>
							<button
								className="d-flex align-items-center mx-3 btn btn-light w-100 border-0"
								onClick={handleCarClick}
								style={{ background: 'none' }}
							>
								<FaCar size={20} color="black" />
								<span className="ms-2 fs-5">Automotor</span>
							</button>
						</div>

						{/* Segundo elemento: Persona como botón */}
						<div className={entity === 'person' ? 'border-bottom-grueso' : ''}>
							<button
								className="d-flex align-items-center mx-3 btn btn-light w-100 border-0"
								onClick={handlePersonClick}
								style={{ background: 'none' }}
							>
								<FaUser size={20} color="black" />
								<span className="ms-2 fs-5">Persona</span>
							</button>
						</div>

					</div>

					<SearchByCarOrPerson elements={ entity } />

        </div>
      )}

    </div>
  );
};

							