import { motion } from "framer-motion";

const Header = () => {

    const HeaderAnimation = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: "spring" , damping: 10, stiffness: 25}
        },
        hidden: {
            y: -60,
            opacity: 0,
        }
    }

    return(
        <motion.header variants={HeaderAnimation} initial="hidden" animate="visible" className="header">
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