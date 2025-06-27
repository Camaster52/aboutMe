import { delay, motion } from "framer-motion"
import imgPostgres from "../../assets/img/fb35e6b5acff1a1c5af73bb2b002159d1b9fc197.png"
import imgDocker from "../../assets/img/80985ce65566e18b3d1565180f8b49baae73f364.png"
import imgGraf from "../../assets/img/ca1b23f3708d85a2b3d41cb9a45dde2e75e4caca.png"
import imgGit from "../../assets/img/e1aca41c6c6ce08900a5b9aafab489af7a3526f7.png"
import imgGRPC from "../../assets/img/3245d9a6a0a501e7e877176d716efeaadb204d23.png"
import imgRedis from "../../assets/img/dfb02cfce09ce3ca88fea097659a83554dd7a850.png"
import imgGolang from "../../assets/img/f5f6e3bab354d85246af21c455946cf5f38c271c.png"
import imgFR from "../../assets/img/icons8-тест-60.png"
import imgJWT from "../../assets/img/6a8b668a847f24865e187be777dde549797da5e1.png"
import imgAround from "../../assets/img/77e611866aa2539dc004d38389b8b1642d1885ab.png"

const Main = () => {

    // 
    const SectionInfoAnimation = {
        visible: {
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 25, delay: 0.2}
        },
        hidden: {
            opacity: 0,
        }
    }
    const SectionWelcomeAnimation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 30}
        },
        hidden: {
            x: -80,
            opacity: 0,
        }
    }
    const SectionContactsAnimation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 30, delay: 0.4}
        },
        hidden: {
            x: 60,
            opacity: 0,
        }
    }
    // 




    // 
    const SectionStackAnimation = {
        visible: {
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 25, delay: 0.7}
        },
        hidden: {
            opacity: 0,
        }
    }
    const StackTitleAnimation = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {type: "spring" , damping: 10, stiffness: 30, delay: 0.2}
        },
        hidden: {
            opacity: 0,
            x: -100,
        }
    }
    const ImageItemAnimation = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 8, delay: 0.6 }
        },
        hidden: {
            opacity: 0,
            x: 100
        }
    }
    // 



    // 
    const SectionProjectTitleAnimation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 12, stiffness: 70}
        },
        hidden: {
            x:-90,
            opacity: 0,
        }
    }
    // 




    //
    const text = "SELECT name, description FROM projects;" 
    //



    // 
    const SectionProjectsAnimation = {
        visible: {
            opacity: 1,
            transition: {type: "spring" , damping: 12, stiffness: 70}
        },
        hidden: {
            opacity: 0,
        }
    }
    const SectionProjectsImgAnimation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 12, stiffness: 80, delay: 0.2}
        },
        hidden: {
            x: -60,
            opacity: 0,
        }
    }
    const SectionProjectsTitleAnimation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 12, stiffness: 80, delay: 0.2}
        },
        hidden: {
            x: 100,
            opacity: 0,
        }
    }
    const SectionProjectsTextAnimation = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 12, stiffness: 80}
        },
        hidden: {
            y: 70,
            opacity: 0,
        }
    }
    // 


    return(
        <motion.main viewport={{ once: true }} className="main">
            <motion.section viewport={{ once: true }} variants={SectionInfoAnimation} initial="hidden" whileInView="visible"  className="main__sectionInfo">
                <motion.div viewport={{ once: true }} variants={SectionWelcomeAnimation} initial="hidden" whileInView="visible" className="main__info">
                    <p className="main__info-title">Welocme to my personal web<br></br> page! </p>
                    <p className="main__info-aboutMe">I am a <span className="golang">Golang</span> developer. You<br></br> can see my tech stack and<br></br> projects below</p>
                </motion.div>

                <motion.nav viewport={{ once: true }} variants={SectionContactsAnimation} initial="hidden" whileInView="visible" className="main__contacts">
                    <p className="main__contacts-title">Contacts:</p>
                    <ul className="main__contacts-ul">
                        <li className="main__contacts-li">Telegram: @aachex</li>
                        <li className="main__contacts-li">LinkedIn: a.chex</li>
                        <li className="main__contacts-li">GitHub: <a className="main__contacts-a" target="blank" href="https://github.com/aachex">https://github.com/aachex</a> </li>
                        <li className="main__contacts-li">Web page: damn you are already here</li>
                    </ul>
                </motion.nav>
            </motion.section>


            <motion.section viewport={{ once: true }} variants={SectionStackAnimation} initial="hidden" whileInView="visible" className="main__sectionStack">
                <motion.p viewport={{ once: true }} variants={StackTitleAnimation} initial="hidden" whileInView="visible" className="main__stackTitle">Technical stack</motion.p>
                <motion.div  className="main__img-cont">
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" whileInView="visible" src={imgPostgres} alt="" className="main__imgPostgres"/>
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" whileInView="visible" src={imgDocker} alt="" className="main__imgDocker"/>
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" whileInView="visible" src={imgGraf} alt="" className="main__imgGraf" />
                </motion.div>

                <motion.div className="main__img-cont2">
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" animate="visible" src={imgGit} alt="" className="main__imgGit" />
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" whileInView="visible" src={imgGolang} alt="" className="main__imgGolang" />
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" animate="visible" src={imgRedis} alt="" className="main__imgRedis" />
                    <motion.img viewport={{ once: true }} variants={ImageItemAnimation} initial="hidden" whileInView="visible" src={imgGRPC} alt="" className="main__imgGRPC" />
                </motion.div>
                <div className="main__line"></div>
            </motion.section>


            <motion.section className="main__sectionProject">
                <motion.h1 viewport={{ once: true }} variants={SectionProjectTitleAnimation} initial="hidden" whileInView="visible" className="main__projects-title">Projects</motion.h1>
                <motion.div 
                        className="main__projects-sqlCont"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                    <p className="main__projects-sqlTitle">
                        {"SELECT name, description FROM projects;".split("").map((char, i) => {
                        const isSelect = i >= text.indexOf("SELECT") && i < text.indexOf("SELECT") + 6;
                        const isFrom = i >= text.indexOf("FROM") && i < text.indexOf("FROM") + 4;
                        
                        return (
                            <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            transition={{ 
                                delay: i * 0.04,
                                type: "spring",
                                stiffness: 100
                            }}
                            className={isSelect || isFrom ? "main__projects-word" : ""}
                            style={isSelect || isFrom ? { color: "#8A2BE2" } : {}} 
                            >
                            {char}
                            </motion.span>
                        );
                        })}
                    </p>
                </motion.div>

                <motion.div viewport={{ once: true }} variants={SectionProjectsAnimation} initial="hidden" whileInView="visible" className="main__projects-FRCont">
                    <div className="main__projects-FRTitle">
                        <motion.img viewport={{ once: true }} variants={SectionProjectsImgAnimation} initial="hidden" whileInView="visible" className="main__projects-imgFR" src={imgFR} alt="" />
                        <motion.p viewport={{ once: true }} variants={SectionProjectsTitleAnimation} initial="hidden" whileInView="visible" className="main__projects-titleFR">Friendly reminder</motion.p>
                    </div>
                    <motion.p viewport={{ once: true }} variants={SectionProjectsTextAnimation} initial="hidden" whileInView="visible" className="main__projects-aboutFR">Your personal helper for keeping track of your tasks and<br></br> not forgetting about them .</motion.p>
                </motion.div>

                <motion.div viewport={{ once: true }} variants={SectionProjectsAnimation} initial="hidden" whileInView="visible" className="main__projects-JWTCont">
                    <div className="main__projects-JWTTitle">
                        <motion.img viewport={{ once: true }} variants={SectionProjectsImgAnimation} initial="hidden" whileInView="visible" className="main__projects-imgJWT" src={imgJWT} alt="" />
                        <motion.p viewport={{ once: true }} variants={SectionProjectsTitleAnimation} initial="hidden" whileInView="visible" className="main__projects-titleJWT">Go-jwt</motion.p>
                    </div>
                    <motion.p viewport={{ once: true }} variants={SectionProjectsTextAnimation} initial="hidden" whileInView="visible" className="main__projects-aboutJWT">I contributed to this library for working with JWT<br></br> technology in Go.</motion.p>
                </motion.div>

                <div className="main__projects-AroundCont">
                    <motion.div viewport={{ once: true }} variants={SectionProjectsAnimation} initial="hidden" whileInView="visible" className="main__projects-AroundTitle">
                        <motion.div viewport={{ once: true }} variants={SectionProjectsImgAnimation} initial="hidden" whileInView="visible" className="main__projects-imgCont">
                            <motion.img viewport={{ once: true }} variants={SectionProjectsImgAnimation} initial="hidden" whileInView="visible" className="main__projects-imgAround" src={imgAround} alt="" />
                        </motion.div>
                        <motion.p viewport={{ once: true }} variants={SectionProjectsTitleAnimation} initial="hidden" whileInView="visible" className="main__projects-titleAround">Around</motion.p>
                    </motion.div>
                    <motion.p viewport={{ once: true }} variants={SectionProjectsTextAnimation} initial="hidden" whileInView="visible" className="main__projects-aboutAround">A long time ago, I enjoyed to make games and one of <br></br> them came to light.</motion.p>
                </div>
            </motion.section>
        </motion.main>
    )
}
export default Main