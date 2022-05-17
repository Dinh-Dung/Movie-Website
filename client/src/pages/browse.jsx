import { useNavigate } from "react-router-dom";

const BrowsePage = () => {

    const navigate = useNavigate()

    const onClick = () => navigate("/")

    return (  
        <>
            <button onClick={onClick}> Comback to home page</button>
        </>
    );
}
 
export default BrowsePage;  