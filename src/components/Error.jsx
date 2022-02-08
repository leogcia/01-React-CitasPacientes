function Error({children}) {

    //children hace referencia a todos los elementos del componente con ello podemos utilizar Error en donde lo necesitemos con lo que necesitemos!!!
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            {children}
        </div>
    );
}

export default Error;