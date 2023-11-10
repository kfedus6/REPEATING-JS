import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const ItemTest = forwardRef(({ item }, ref) => {
    return (
        <div className='test' ref={ref}>{item}</div>
    )
})

const MItemTest = motion(ItemTest)

export default MItemTest