import { useNavigate } from "react-router"
import { Loading } from "../components/Load";
import { useContext, useEffect  } from "react";
import { ValidationContext } from "../context";



export const Validation = ({}) => {
    const navigate = useNavigate();
    const {isLogged} = useContext(ValidationContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLogged) {
        navigate('/login');
      } else {
        navigate('/carteira');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


    return(
        <div>
            {!isLogged && <Loading/>}
        </div>
    )
}