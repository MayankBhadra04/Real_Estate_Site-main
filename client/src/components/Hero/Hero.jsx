import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="wrapper hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Gateway to <br />
              Hassle-Free
              <br /> Rentals
            </motion.h1>
          </div>
          <div className="flexColStart sectext flexhero-des">
            <span>Discover your perfect rental property effortlessly with RentEase.</span>
            <span>With intuitive search features and comprehensive listings, finding<br/> your ideal rental has never been easier.</span>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-con"
          >
            <img src="./home.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
