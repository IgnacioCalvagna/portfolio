import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/idiomas.css'
const Idiomas = () => {
  return (
    <>
         <div className="col-4 flags">
          {/* <h3>Cambiar de idioma</h3> */}
           <button className="btn btn-info">🇪🇸 </button>
           <FontAwesomeIcon icon="fa-regular fa-list-dropdown" />
           
           <button className="btn btn-info">🇬🇧</button>
        </div>
    </>
  )
}

export default Idiomas