import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <ClipLoader color="#D4C17F" size={60} />
        </div>
    );
};

export default Loader;
