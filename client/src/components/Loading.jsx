
import { motion } from 'framer-motion';

function Loading() {
  const dots = Array.from({ length: 5 }); 
  return (
    <div className="flex justify-center items-center relative top-[90px]">
      {dots.map((_, index) => (
        <motion.div
          key={index}
          className='w-[15px] h-[15px] my-0 mx-5 rounded-full bg-[#3498db]'
          initial={{ y: 0 }} // Initial position
          animate={{ y: [0, -20, 0] }} // Bounce up and down
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 0.1 // Stagger the animation
          }}
        />
      ))}
    </div>
  );
}

export default Loading;