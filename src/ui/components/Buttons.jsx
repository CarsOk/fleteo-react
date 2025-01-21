export const Buttons = ({ children, fuctions }) => {
  return (
    <button
			className="btn text-dark"
			onClick={ fuctions }
			style={{
					background: 'transparent',
					border: 'none',
					display: 'flex',
					alignItems: 'center',
			}}
		>
			{ children }
		</button>
  );
}