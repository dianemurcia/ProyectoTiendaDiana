import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'
import ProductFilters from '../Components/ProductFilters'
import Nav from '../Components/Nav';

const TiendaVirtual = ({ productos, carrito, agregarAlCarrito, vaciarAlCarrito, eliminarDelCarrito, categories }) => {

    //filtro por categorías
    const [filteredProducts, setFilteredProducts] = useState(productos);
    const handleFilter = (category) => {
        console.log(category)
        if (category === '') {
          setFilteredProducts(productos);
        } else {
          setFilteredProducts(productos.filter((p) => p.category.toLowerCase().includes(category.toLowerCase())));
        productos.map((p)=>console.log(p))
        }
        console.log(filteredProducts)
      };

      //buscar por palabra clave
      const [busqueda, setBusqueda] = useState('');
      const handleBusqueda = (buscar) => {
        setBusqueda(buscar)
        if (buscar === '') {
          setFilteredProducts(productos);
        } else {
          setFilteredProducts(productos.filter (producto =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())));
        productos.map((p)=>console.log(p))
        }
        console.log(filteredProducts)
      };
    

    return (
        <div className='principal'>
            <Nav />
            <div className="container">
             <h1>Accesorios Chicas Tech</h1>

             <div >
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={(e) => handleBusqueda(e.target.value)}
                    className="buscador-input"
                />
            </div>

            <ProductFilters categories={categories} onFilter={handleFilter} />
            <div className="productos-grid">
                {filteredProducts.length > 0 ? filteredProducts.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregarAlCarrito={agregarAlCarrito}
                    />

                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>

            <div className="carrito">
                <h2>Carrito</h2>
                <div className="boton-agregar">
                    <span>{carrito.length} artículos</span>
                    <button className='boton-eliminar' onClick={vaciarAlCarrito}>Vaciar</button>
                </div>
                <ul>
                    {carrito.map((item, index) => (
                        <div key={index} className="carrito-item">
                            <img
                                src={item.imagen}
                                alt={item.nombre}
                                className="carrito-item-imagen"
                            />
                            <span>{item.nombre} - ${item.precio}</span>
                            <button className='boton-eliminar' onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </ul>
                <p className="carrito-total">
                    Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
                </p>
            </div>
        </div>
    </div>
    );
};

export default TiendaVirtual;