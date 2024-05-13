import './TopBar.css';

const TopBar: React.FC = () => {

    return (
        <>
            <div className="d-flex container">
                <h1> Dashboard</h1>
                <button> Go To Portfolio</button>
            </div>
        </>
    );
};

export default TopBar;