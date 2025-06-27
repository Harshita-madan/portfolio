import { motion } from 'framer-motion';

const OrbitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large orbit paths */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-purple-500/10 rounded-full"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60 + i * 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Planets */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-600 shadow-2xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 opacity-60" />
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-red-800 opacity-80" />
      </motion.div>

      <motion.div
        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-800 shadow-xl"
        style={{ right: '15%', top: '15%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 opacity-70" />
      </motion.div>

      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-800"
        style={{ left: '80%', top: '60%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Saturn with rings */}
      <motion.div
        className="absolute"
        style={{ right: '20%', bottom: '30%' }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-80" />
          {/* Saturn's rings */}
          <div className="absolute -inset-4 border-2 border-yellow-400/30 rounded-full" />
          <div className="absolute -inset-6 border border-yellow-300/20 rounded-full" />
        </div>
      </motion.div>

      {/* Constellation patterns */}
      <div className="absolute top-1/4 left-1/4">
        {/* Big Dipper constellation */}
        <div className="relative w-32 h-24">
          {[
            { x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 5 }, { x: 60, y: 15 },
            { x: 80, y: 8 }, { x: 100, y: 20 }, { x: 120, y: 18 }
          ].map((star, i) => (
            <div key={i}>
              <motion.div
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{ left: `${star.x}px`, top: `${star.y}px` }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
              {i < 6 && (
                <div
                  className="absolute w-px h-px bg-white/20"
                  style={{
                    left: `${star.x + 6}px`,
                    top: `${star.y + 6}px`,
                    width: `${Math.sqrt(Math.pow([
                      { x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 5 }, { x: 60, y: 15 },
                      { x: 80, y: 8 }, { x: 100, y: 20 }, { x: 120, y: 18 }
                    ][i + 1].x - star.x, 2) + Math.pow([
                      { x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 5 }, { x: 60, y: 15 },
                      { x: 80, y: 8 }, { x: 100, y: 20 }, { x: 120, y: 18 }
                    ][i + 1].y - star.y, 2))}px`,
                    height: '1px',
                    transform: `rotate(${Math.atan2([
                      { x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 5 }, { x: 60, y: 15 },
                      { x: 80, y: 8 }, { x: 100, y: 20 }, { x: 120, y: 18 }
                    ][i + 1].y - star.y, [
                      { x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 5 }, { x: 60, y: 15 },
                      { x: 80, y: 8 }, { x: 100, y: 20 }, { x: 120, y: 18 }
                    ][i + 1].x - star.x) * 180 / Math.PI}deg)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Zodiac symbols floating around */}
      {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-purple-300/40 text-2xl font-bold"
          style={{
            left: `${15 + (i * 6) % 70}%`,
            top: `${20 + (i * 8) % 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 8 + i * 3,
            ease: 'easeOut',
          }}
        >
          {/* Shooting star trail */}
          <div className="absolute -left-8 top-0 w-8 h-px bg-gradient-to-r from-transparent to-white opacity-60" />
        </motion.div>
      ))}

      {/* Nebula effects */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl" />

      {/* Floating orbs with enhanced effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full shadow-lg"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Mystic symbols */}
      {['☽', '☾', '☄', '✦', '✧', '⋆'].map((symbol, i) => (
        <motion.div
          key={`mystic-${i}`}
          className="absolute text-yellow-300/30 text-lg"
          style={{
            left: `${10 + (i * 15) % 80}%`,
            top: `${10 + (i * 12) % 80}%`,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default OrbitBackground;