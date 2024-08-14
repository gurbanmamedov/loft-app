import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SharedLayout