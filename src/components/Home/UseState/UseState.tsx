import React, { useEffect, useState } from "react";

const UseState = ({ name }: { name: string }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!loading) {
      console.log("loading");
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      {error && <p>Hay un error!</p>}
      {loading && <p>Cargando...</p>}

      <input placeholder="Código de seguridad" type="text" />
      {/* <button onClick={() => setError(!error)}>Comprobar</button> */}
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
};

export { UseState };
