import { useNavigate } from "react-router"
import { Loading } from "../components/Load";
import { useEffect  } from "react";



export const Validation = ({isLogged}) => {
    const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLogged) {
        navigate('/login');
      } else {
        navigate('/home/carteira');
      }
    }, 1900);
    return () => clearTimeout(timer);
  }, []);


    return(
        <div>
            {!isLogged && <Loading/>}
        </div>
    )
}