import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Components/AppRouter';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Spinner from 'react-bootstrap/Spinner';
// import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.'; 
// import { check } from './http/userApi';

function App () {
    const {user} = useContext(Context)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     check().then(data => {
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //     }).finally(() => setLoading(false))
    // }, [])

    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
};

export default App;