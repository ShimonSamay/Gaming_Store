import { useContext } from 'react' ;
import { globalStatesContext } from '../../../Contexts/reducers';
import { Outlet } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

const PrivateRoutes = () : JSX.Element => {

  const { user } = useContext(globalStatesContext);
     
  return (
   user.loggedIn ? <Outlet/> : <Home/>
  )
};

export default PrivateRoutes;