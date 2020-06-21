import React from 'react';
import Header from './header';
import { Jumbotron } from 'reactstrap';

function Home() {
    return (
        <div className="main">
            <Header />
            <Jumbotron>
                <h1 className="display-3">Examen práctico</h1>
                <p className="lead">Exámen práctico para la vacante de Front-end developer en la empresa GinGroup</p>
                <hr className="my-2" />
                <h3> Ejercicio 1 </h3>
                <p>
                    Desarrollar lo siguiente implementando React:
                    <ul>
                        <li>
                            1. Crear un componente Parent.
                        </li>
                        <li>
                            2. Crear dos componentes Child (ChildA y ChildB).
                        </li>
                        <li>
                            3. Crear un componente GrandChild.
                        </li>
                        <li>
                            4. Instanciar GrandChild dentro de ChildA.
                        </li>
                        <li>
                            5. Instanciar ChildA y ChildB en Parent.
                        </li>
                        <li>
                            6. Generar un evento en GrandChild que modifique el dom de ChildB.
                        </li>
                    </ul>

                </p>

                <h3> Ejercicio 2</h3>
                <p>
                    Ocupando la siguiente api:<b> https://gorest.co.in/public-api/users</b> y agregando el siguiente token <b>Aqd6Jjz5xph5Y3035KJgmwJY0DEctv4isMF6</b> vía authorization bearer en el header, realizar un layout grid, creando una card con los elementos de first_name, last_name, gender, email y id dentro de la key "result".

 Además de lo anterior deberás poder filtrar de mayor a menor por el id y el gender y traerlo de nuevo en su forma base dentro de la petición.

               </p>
            </Jumbotron>
        </div>
    );
};

export default Home