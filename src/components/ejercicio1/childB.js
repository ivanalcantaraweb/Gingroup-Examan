import React from 'react';
import Encendido from '../../media/images/encendido.svg'
import Apagado from '../../media/images/apagado.svg';

const ChildB = ({ energy }) => {
    return (
        <div className="child2 msgChild2">
            <div className="Msg">
                Este es un elemento ChildB
            </div>
            {energy ? <img src={Encendido} alt="Foco" /> : <img src={Apagado} alt="Foco" />}
        </div >
    )
}

export default ChildB