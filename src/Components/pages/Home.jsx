import style from './Home.module.css'
import { useNavigate } from 'react-router'
export function Home() {
    const navigate = useNavigate()
    const handleLoginbtn = (e) => {
        console.log(e.target.innerText)
        if (e.target.innerText === "Sign In") {
            navigate("/signin")
        }
        else if (e.target.innerText === "Movies") {
            navigate("/movies")
        }
    }
    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.container}>
                    <div className={style.textcontainer}>
                        <div className={style.textinnersection}>
                            <h1>Welcome to Movie Player</h1>
                            <p>
                                Movie Player helps you dicover and explore movies from around the world Browse popular titles, search your faviorite movies, explore genres, and watch offical trailers - all in one simple and easy-to-use platform
                            </p>
                            <button className={style.Signinbtn} onClick={handleLoginbtn}>Sign In</button>
                        </div>
                    </div>


                    <div className={style.img}>
                        <img src="herosection1.jpg" />
                    </div>
                </div>
                <div className={style.containertwo}>
                    <div className={style.img}>
                        <img src="Hero_image2.jpg" />
                    </div>
                    <div className={style.textcontainertwo}>
                        <div className={style.textinnersection}>
                            <h1>Discover Movies Effortlessly</h1>
                            <p>
                                Find  movies with detailed information like ratings,genres, and release dates. Easily search and filter movies to match your mood and interests, all with a smooth and user-friendly experience
                            </p>
                            <button className={style.moviesbtn} onClick={handleLoginbtn}>Movies</button>
                        </div>

                    </div>


                </div>
                <div className={style.thirdsection}>
                    <p>Every movies tells a story. Explore, discover, and enjoy a world of cinema cureted just for you </p>
                </div>
            </div>
        </>
    )
}