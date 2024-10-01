import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TiendaVirtual from './view/TiendaVirtual';
import DetalleProducto from './view/DetalleProducto';
import ListaProductos from './view/ListaProductos';
import Producto from './view/Producto'

/*Productos precargados*/
  const inicialProductos = [
    {
      id: 1, nombre: 'Aretes Corazón', precio: 79900, category: 'Aretes',
      descripcion: 'Colección San Valentín. Diseño corazón. Cierre metálico a presión. Composición: 95% zinc. 5% acero inoxidable.',
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67043268_OR_B.jpg?ts=1699981420555&im=SmartCrop,width=480,height=672&imdensity=1',
      imagenes: [
        'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67043268_OR_B.jpg?imwidth=640&imdensity=1&ts=1699981420555',
        'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67043268_OR.jpg?imwidth=640&imdensity=1&ts=1699976082460',
        'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67043268_OR_D2.jpg?imwidth=1256&imdensity=1&ts=1704978184199'
      ]
    },
    { id: 2, nombre: 'Aretes Geométricos', precio: 79900, category: 'Aretes',
      descripcion: 'Diseño geométrico. Cierre metálico a presión. Composición: 95% zinc. 5% acero inoxidable.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77024053_OR_D5.jpg?ts=1717072857128&im=SmartCrop,width=480,height=672&imdensity=1',
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77024053_OR.jpg?imwidth=640&imdensity=1&ts=1717072857128',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77024053_OR_D5.jpg?imwidth=1256&imdensity=1&ts=1717072857128',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77024053_OR_B.jpg?imwidth=640&imdensity=1&ts=1717072857128',
      ],
    },
    { id: 3, nombre: 'Set aretes aros', precio: 99900, category: 'Aretes',
      descripcion: 'Pack de 3. Diseño corto. Diseño de aro. Cierre metálico a presión. Composición: 95% zinc. 5% acero inoxidable.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040259_PL.jpg?ts=1712571194339&im=SmartCrop,width=480,height=672&imdensity=1' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040259_PL_B.jpg?imwidth=640&imdensity=1&ts=1712311946166',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040259_PL.jpg?imwidth=640&imdensity=1&ts=1712571194339',
      ]
    },
    { id: 4, nombre: 'Bolso hombro efecto piel', precio: 239900, category: 'Bolsos',
      descripcion: 'Tamaño mediano. Efecto piel. Asa de hombro. Bolsillo interior de cremallera. Cierre de cremallera. Forro interior. Composición: 100% poliuretano. Forro: 100% poliéster.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77000374_02_D9.jpg?imwidth=480&imdensity=1&ts=1721054318190' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77000374_02.jpg?imwidth=640&imdensity=1&ts=1716894461417',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77000374_02_D2.jpg?imwidth=480&imdensity=1&ts=1716894461417',
      ]
    },
    { id: 5, nombre: 'Bolso bandolera solapa', precio: 199900, category: 'Bolsos',
      descripcion: 'Tamaño mediano. Efecto piel. Asa larga. Triple compartimento. Cierre metálico de imán. Forro interior. Composición: 100% poliuretano. Forro: 100% algodón.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77002010_41_D5.jpg?imwidth=480&imdensity=1&ts=1716458708839' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77002010_41.jpg?imwidth=640&imdensity=1&ts=1716458708839',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77002010_41_D1.jpg?imwidth=480&imdensity=1&ts=1716458708839',
      ]
    },
    { id: 6, nombre: 'Bolso hombro hebilla', precio: 119900, category: 'Bolsos',
      descripcion: 'Tamaño pequeño. Asa corta ajustable. Asa de hombro. Cierre de cremallera. Hebilla decorativa. Composición: 100% poliuretano. Forro: 100% poliéster.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77020273_20_D6.jpg?imwidth=320&imdensity=1&ts=1715339280583' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77020273_20.jpg?imwidth=640&imdensity=1&ts=1711120189574',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77020273_20_D1.jpg?imwidth=320&imdensity=1&ts=1711120189574',
      ]
    },
    { id: 7, nombre: 'Collar conchas colgante', precio: 99900, category: 'Collares',
      descripcion: 'Diseño concha. Colgante de flor. Cierre de cadena y mosquetón. Composición: 80% concha marina. 20% latón.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77030638_70_B.jpg?imwidth=640&imdensity=1&ts=1715088869954' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77030638_70.jpg?imwidth=320&imdensity=1&ts=1715088869954',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77030638_70_D5.jpg?imwidth=320&imdensity=1&ts=1715088869954',
      ]
    },
    { id: 8, nombre: 'Collar cordón flor', precio: 89900, category: 'Collares',
      descripcion: 'Diseño de maxi flor. Colgante cordón. Colgante metálico. Cierre cruzado. Composición: 80% latón. 20% poliéster.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77050637_30_B.jpg?imwidth=640&imdensity=1&ts=1715178871809' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77050637_30_D5.jpg?imwidth=320&imdensity=1&ts=1715247606885',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77050637_30_D1.jpg?imwidth=320&imdensity=1&ts=1715178871809',
      ]
    },
    { id: 9, nombre: 'Collar cascada monedas', precio: 85900, category: 'Collares',
      descripcion: 'Colgantes de moneda. Cierre de cadena y mosquetón. Composición: 75% zinc. 25% hierro.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77022552_OR-99999999_01.jpg?imwidth=640&imdensity=1&ts=1721304311047' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77022552_OR.jpg?imwidth=640&imdensity=1&ts=1714739675999',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77022552_OR_B.jpg?imwidth=640&imdensity=1&ts=1714498531578',
      ]
    },
    { id: 10, nombre: 'Brazalete flor irregular', precio: 139900, category: 'Pulseras',
      descripcion: 'Diseño de maxi flor. Diseño irregular. Sin cierre. Composición: 100% latón.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040637_PL_D6.jpg?imwidth=480&imdensity=1&ts=1717605355539' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77040637_PL-99999999_01.jpg?imwidth=640&imdensity=1&ts=1716288250646',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040637_PL_B.jpg?imwidth=640&imdensity=1&ts=1715178871809',
      ]
    },
    { id: 11, nombre: 'Brazalete diseño hebilla', precio: 129900, category: 'Pulseras',
      descripcion: 'Pack de 3. Diseño corto. Diseño de aro. Cierre metálico a presión. Composición: 95% zinc. 5% acero inoxidable.', 
      imagen: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77046750_PL_D5.jpg?imwidth=480&imdensity=1&ts=1724067321615' ,
      imagenes:[
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77046750_PL_D1.jpg?imwidth=480&imdensity=1&ts=1725620638415',
        'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77046750_PL-99999999_01.jpg?imwidth=640&imdensity=1&ts=1724850208754',
      ]
    },
    { id: 12, nombre: 'Pack 2 pulseras metálicas', precio: 119900, category: 'Pulseras',
      descripcion: 'Pack de dos pulseras doradas, metálicas articuladas en relieve. Composición: 98% zinc. 2% hierro', 
      imagen: 'https://static.zara.net/assets/public/743e/ddda/e429429a97fc/56602981cb36/04736334303-e22/04736334303-e22.jpg?ts=1726655337085&w=563&f=auto' ,
      imagenes:[
        'https://static.zara.net/assets/public/b2c1/e7a3/7ef24e4ab058/f3acc97fc309/04736334303-e1/04736334303-e1.jpg?ts=1726672407542&w=563&f=auto',
        'https://static.zara.net/assets/public/6934/e3a0/6550427b878c/d07cd06447d7/04736334303-a1/04736334303-a1.jpg?ts=1726564304833&w=563&f=auto',
      ]
    },
  ];

  const App = () => {

  /* Métodos de Productos */
  const [productos, setProductos] = useState(inicialProductos);
  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };
  const editarProducto = (producto) => {
    console.log(producto)
    setProductos(prevProductos => 
      prevProductos.map(item => 
        item.id == producto.id ? { ...producto } : item
      )
    );
  };
  const eliminarProducto = (productoId) => {
    const nuevosProductos = productos.filter(item => item.id !== productoId);
    if (nuevosProductos !== -1) {
      setProductos(nuevosProductos);
    }
  };

  /* Define las categorías*/
  const categories = ['Aretes', 'Bolsos', 'Pulseras', 'Collares'];

     /* Métodos de carrito */
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarAlCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId) => {
    const index = carrito.findIndex(item => item.id === productoId);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <TiendaVirtual
            carrito={carrito}
            setCarrito={setCarrito}
            agregarAlCarrito={agregarAlCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
            vaciarAlCarrito={vaciarAlCarrito}
            categories={categories}
            productos={productos} />
        } />
        <Route path='/producto/:id' element={<DetalleProducto productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/crear-producto' element={<Producto agregarProducto={agregarProducto} />} />
        <Route path='/edit-producto/:id' element={<Producto productos={productos} editarProducto={editarProducto} />} />
        <Route path='/lista-productos' element={<ListaProductos productos={productos} eliminarProducto={eliminarProducto}/>} />
      </Routes>
    </Router>
  );
};

export default App;