import BarLoader from "react-spinners/BarLoader";

function Loader(props) {
    return <div className={props.classtitle}>
        <h2>Loading...</h2>
        <BarLoader 
                color="#32cd32"
                cssOverride={{}}
                loading
                speedMultiplier={1}/>
        </div>
}

export default Loader;