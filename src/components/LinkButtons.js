import { Link } from "react-router-dom";

function LinkButtons (props) {
    return (
        <>
            <Link to={props.data.links.github} target="_blank" rel="noopener noreferrer"><button type='button'>Code
            </button></Link>
            <Link to={props.data.links.live} target="_blank" rel="noopener noreferrer"><button type='button'>Live
            </button></Link>
        </>
    )
}

export default LinkButtons;