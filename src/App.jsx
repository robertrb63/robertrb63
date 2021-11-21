import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AuthLayaut from './Layouts/AuthLayout';
import PrivateLayaut from './Layouts/PrivateLayout';
import PublicLayout from './Layouts/PublicLayout';

import Admin from './Pages/Admin';
import Usuarios from './Pages/admin/Usuarios';
import Articulos from './Pages/admin/Articulos';
import Categorias from './Pages/admin/Categorias';
import Index from './Pages/Index';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import './styles/style.css';

function App() {

    return(
        <Router>
                <Switch>
                <Route path={ ['/admin/Admin', '/admin/Usuarios', '/admin/Categorias', '/admin/Articulos']}>
                    <PrivateLayaut>
                        <Switch>

                            <Route path='/Usuarios'>
                              <Usuarios/>
                            </Route>
                            <Route path='/Categorias'>
                                <Categorias />
                            </Route>
                            <Route path='/Articulos'>
                                <Articulos />
                            </Route>
                            <Route path='/Admin'>
                                <Admin />
                            </Route>
                        </Switch>
                    </PrivateLayaut>
                </Route>
               

                <Route path={ ['/Login', '/Registro']}>
                    <AuthLayaut>
                        <Switch>
                            <Route path='/Login'>
                                <Registro />
                            </Route>
                                <Route path='/Registro'>
                                 <Login />
                            </Route>
                        </Switch>
                    </AuthLayaut>
                </Route>


 
                <Route path={['/']}>
                    <PublicLayout>
                        <Switch>
                            <Route path='/'>
                                <Index />
                            </Route>
                        </Switch>
                    </PublicLayout>
                </Route>

            </Switch>
        </Router>

  );
}

export default App;