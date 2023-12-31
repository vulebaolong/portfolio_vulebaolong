// components
import Bulb from "@/components/Bulb/BulbRight";
import Circles from "@/components/Circles/CirclesRight";
import ServiceSlider from "@/pages/services/ServiceSlider";
import { fadeIn } from "@/variants";

// framer motion
import { motion } from "framer-motion";

function Services() {
    return (
        <section className="h-full bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2 variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">
                            My services <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, assumenda cum! Accusamus aspernatur obcaecati excepturi at temporibus doloribus
                            cupiditate dolorum.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
                        {/* slider */}
                        <ServiceSlider />
                    </motion.div>
                </div>
            </div>

            <Bulb />
        </section>
    );
}

export default Services;
