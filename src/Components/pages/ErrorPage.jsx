import { useNavigate } from 'react-router'
import './Error.css'
export function ErrorPage() {
    const navigate = useNavigate();
    const handleClick = (e) => {
        if (e.target.innerText === "Go Back Home Page") return navigate("/");
        else if (e.target.innerText === "Go Back Previous Page") return navigate(-1);
    }
    return (
        <>
            <div className="error">
                <div className='error-message'>
                    <h1>Error 404</h1>
                    <p>Sorry, this page isn't available</p>
                    <div className='group-btn'>
                        <button className='back-btn' onClick={handleClick}>Go Back Previous Page</button>
                        <button className='back-btn' onClick={handleClick}>Go Back Home Page</button>
                    </div>
                </div>
                <div>
                    <img src="/Error.gif" />
                </div>
            </div>

        </>
    )
}