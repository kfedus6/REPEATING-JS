import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MItemTest from './components/ItemTest'

const App = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const animation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { ease: "easeOut", duration: 2, delay: custom * 0.2 }
        })
    }

    return (
        <motion.div
            className='conteiner'
            initial="hidden"
            whileInView="visible">
            <motion.div variants={animation} custom={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, quis?
            </motion.div>
            <div className='block'>
                {numbers.map((item, idx) => (
                    <MItemTest variants={animation} custom={idx + 1} key={idx} item={item} />
                ))}
            </div>
        </motion.div>
    )
}

export default App