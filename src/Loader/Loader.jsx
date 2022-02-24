import * as React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components/macro';

import loadBgImg from './bg.png';

const AppBackground = styled.div`
  background: url(${loadBgImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const colors = [
  'rgba(255, 0, 97, 1)',
  'rgba(255, 150, 115, 1)',
  'rgba(255, 104, 140, 1)',
  'rgba(194, 14, 255, 1)',
  'rgba(100, 255, 210, 1)'
];

const Backdrop = styled(motion.div)`
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(8, 15, 53, 0), rgba(0, 0, 10, 0.9)),
    linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)),
    radial-gradient(
      circle at 77% 89%,
      rgba(125, 163, 169, 0.8),
      rgba(125, 163, 169, 0) 50%
    ),
    radial-gradient(
      circle at 15% 95%,
      rgba(125, 163, 169, 0.8),
      rgba(125, 163, 169, 0) 43%
    ),
    radial-gradient(
      circle at 65% 23%,
      rgba(100, 255, 210, 0.4),
      rgba(137, 151, 119, 0) 70%
    ),
    radial-gradient(
      circle at 10% 0%,
      rgba(187, 211, 204, 0.33),
      rgba(187, 211, 204, 0) 35%
    ),
    radial-gradient(
      circle at 11% 100%,
      rgba(131, 165, 203, 0.8),
      rgba(131, 165, 203, 0) 30%
    );
`;
const Wrap = styled.div`
  display: flex;
`;

const AnimatedCircle = styled(motion.div)`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  backdrop-filter: opacity(0.4);
  background: white;
`;

const Message = styled.div`
  color: white;
  font-size: 1rem;
  margin: 2rem;
  font-family: Menlo;
`;

const loaderVariants = {
  visible: (i) => ({
    scale: [1, 1.6, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      opacity: {
        repeat: Infinity,
        duration: 2,
        easing: 'easeInOut',
        delay: i * 0.2
      },

      scale: {
        repeat: Infinity,
        duration: 2,
        easing: 'easeInOut',
        type: 'spring',
        delay: i * 0.2
      }
    }
  }),
  hidden: {
    opacity: 0
  }
};

const backdrop = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1
    }
  },
  hidden: { opacity: 0 }
};

// export interface LoaderProps {
//   message?: string;
//   show: boolean;
// }

export function Loader({ message, show }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Wrap data-testid="loader">
            {colors.map((color, i) => (
              <AnimatedCircle
                animate="visible"
                initial="hidden"
                key={i}
                custom={i}
                variants={loaderVariants}
                style={{ background: color }}
                exit="hidden"
              />
            ))}
          </Wrap>
          {message && <Message>{message}</Message>}
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

Loader.displayName = 'Loader';

export function LoaderWithBg(props) {
  return (
    <AppBackground>
      <Loader {...props} />
    </AppBackground>
  );
}

export default Loader;
