import { FaBars, FaUser } from 'react-icons/fa';

export const NameUserView = ({ name, toggleMenu }) => {
  return (
    <div className="bg-dark" style={{ height: '33vh' }}>

			{/* Icono para cerrar el menú */}
			<div className='d-flex align-items-center'>
				<button onClick={ toggleMenu } style={{ background: 'transparent', border: 'none', marginTop: '10px', marginLeft: '15px' }}>
					<FaBars size={25} color="#d3d3d3" />
				</button>
			</div>	

			{/* Icono de User */}
			<div className='d-flex flex-column ms-3'>
				<FaUser 
					size={60} 
					color="black" 
					style={{
						borderRadius: '50%',
						background: 'white',
						padding: '20px',
						marginBottom: '15px',
						marginTop: '60px'
					}}
				/>

				{/* Nombre o email del usuario */}
				<p className='text-white mb-5'>{name}</p> 
			</div>

		</div>
  );
}