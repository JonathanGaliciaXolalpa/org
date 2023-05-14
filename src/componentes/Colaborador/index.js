import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    //conducion ? verdadero:falso
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like (id)} /> :  <AiOutlineHeart onClick={() => like (id)} />}
           


        </div>
    </div>

}

export default Colaborador

//https://github.com/genesysrm.png
//https://github.com/HarlandLohora.png
//https://github.com/JeanmarieAluraLatam.png
//https://github.com/christianpva.png