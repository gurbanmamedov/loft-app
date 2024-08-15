
import SyncLoader from 'react-spinners/SyncLoader';
import logo from '../../assets/logo.svg'

const Loader = () => {
    return (
        <div className="flex justify-center flex-col gap-5 items-center h-screen ">
            <img src={logo} alt='logo' />
            <SyncLoader color="#D4C17F" size={20} margin={5} />
        </div>
    );
};

export default Loader;
