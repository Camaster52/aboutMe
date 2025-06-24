import { motion } from "framer-motion"
import imgPostgres from "../../assets/img/fb35e6b5acff1a1c5af73bb2b002159d1b9fc197.png"
import imgDocker from "../../assets/img/80985ce65566e18b3d1565180f8b49baae73f364.png"
import imgGraf from "../../assets/img/ca1b23f3708d85a2b3d41cb9a45dde2e75e4caca.png"
import imgGit from "../../assets/img/e1aca41c6c6ce08900a5b9aafab489af7a3526f7.png"
import imgGRPC from "../../assets/img/3245d9a6a0a501e7e877176d716efeaadb204d23.png"
import imgRedis from "../../assets/img/dfb02cfce09ce3ca88fea097659a83554dd7a850.png"
import imgGolang from "../../assets/img/f5f6e3bab354d85246af21c455946cf5f38c271c.png"
import imgFR from "../../assets/img/icons8-тест-60.png"
import imgJWT from "../../assets/img/6a8b668a847f24865e187be777dde549797da5e1.png"

const Main = () => {

    return(
        <motion.main className="main">
            <motion.section className="main__sectionInfo">

                <div className="main__info">
                    <p className="main__info-title">Welocme to my personal web<br></br> page! </p>
                    <p className="main__info-aboutMe">I am a <span className="golang">Golang</span> developer.  You<br></br> can see my tech stack and<br></br> projects below</p>
                </div>

                <nav className="main__contacts">
                    <p className="main__contacts-title">Contacts:</p>
                    <ul className="main__contacts-ul">
                        <li className="main__contacts-li">Telegram: @aachex</li>
                        <li className="main__contacts-li">LinkedIn: a.chex</li>
                        <li className="main__contacts-li">GitHub: <a className="main__contacts-a" target="blank" href="https://github.com/aachex">https://github.com/aachex</a> </li>
                        <li className="main__contacts-li">Web page: damn you are already here</li>
                    </ul>
                </nav>

            </motion.section>

            <motion.section className="main__sectionStack">
                <p className="main__stackTitle">Technical stack</p>
                <div className="main__img-cont">
                    <img src={imgPostgres} alt="" className="main__imgPostgres"/>
                    <img src={imgDocker} alt="" className="main__imgDocker"/>
                    <img src={imgGraf} alt="" className="main__imgGraf" />
                </div>

                <div className="main__img-cont2">
                    <img src={imgGit} alt="" className="main__imgGit" />
                    <img src={imgGolang} alt="" className="main__imgGolang" />
                    <img src={imgRedis} alt="" className="main__imgRedis" />
                    <img src={imgGRPC} alt="" className="main__imgGRPC" />
                </div>
                <div className="main__line"></div>
            </motion.section>

            <motion.section className="main__sectionProject">
                <h1 className="main__projects-title">Projects</h1>
                <div className="main__projects-sqlCont">   
                    <p className="main__projects-sqlTitle"><span className="main__projects-word">SELECT</span> name, description <span className="main__projects-word">FROM</span> projects;</p>
                </div>

                <div className="main__projects-FRCont">
                    <div className="main__projects-FRTitle">
                        <img className="main__projects-imgFR" src={imgFR} alt="" />
                        <p className="main__projects-titleFR">Friendly reminder</p>
                    </div>
                    <p className="main__projects-aboutFR">Your personal helper for keeping track of your tasks and<br></br> not forgetting about them .</p>
                </div>

                <div className="main__projects-JWTCont">
                    <div className="main__projects-JWTTitle">
                        <img className="main__projects-imgJWT" src={imgJWT} alt="" />
                        <p className="main__projects-titleJWT">Go-jwt</p>
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}
export default Main