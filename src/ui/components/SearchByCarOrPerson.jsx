import React from 'react';
import { useMenu } from '../../context/MenuContext';

export const SearchByCarOrPerson = ({ elements }) => {

  const { toggleSearch } = useMenu();
  const element = elements === 'car' ? 'placa' : 'persona';

  return (
    <div className="p-4 fs-5 fw-light">
      <p className="mb-2">Ingresa {element}</p>
      <input type="text" className="form-control" />

      {/* Checkbox */}
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="favoriteRepo"
        />
        <label className="align-items-center fs-6 fw-light form-check-label" htmlFor="favoriteRepo">
          Quiero añadir este repositorio a mis favoritos
        </label>
      </div>

      {/* Botón negro largo y sin border-radius */}
      <button onClick={ toggleSearch } className="btn btn-dark w-100 mt-4" style={{ borderRadius: 0 }}>
        Añadir
      </button>

    </div>
  );
};
