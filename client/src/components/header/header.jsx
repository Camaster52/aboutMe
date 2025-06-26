import { motion } from "framer-motion";

const Header = () => {

    const HeaderAnimation = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 40}
        },
        hidden: {
            y: -50,
            opacity: 0,
        }
    }

    return(
        <motion.header variants={HeaderAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }} className="header">
            <div className="header__title">
                <div className="header__title-nickname">
                    <h1 className="header__title-top">achex</h1>
                    <p className="header__title-bottom">[a chex]</p>
                </div>
                <div className="header__title-name">
                    <h1 className="header__name">Artem Chekhonin</h1>
                </div>
            </div>
            <div className="header__line"></div>
        </motion.header>
    )
}
export default Header