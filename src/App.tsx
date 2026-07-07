import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCountdown } from './hooks/useCountdown';
import { useKeySequence } from './hooks/useKeySequence';
import { useOceanSound } from './hooks/useOceanSound';
import { useSwipe } from './hooks/useSwipe';
import { haptic } from './utils/haptics';
import OceanBackground from './components/OceanBackground';
import StepNavigator from './components/StepNavigator';
import ProgressBar from './components/ProgressBar';
import SoundToggle from './components/SoundToggle';
import Countdown from './components/steps/Countdown';
import Welcome from './components/steps/Welcome';
import LoveLetter from './components/steps/LoveLetter';
import Family from './components/steps/Family';
import Anniversary from './components/steps/Anniversary';
import Clues from './components/steps/Clues';
import Reveal from './components/steps/Reveal';
import BoardingPass from './components/steps/BoardingPass';
import Accommodation from './components/steps/Accommodation';
import PhotoCarousel from './components/steps/PhotoCarousel';
import FinalMessage from './components/steps/FinalMessage';

const TOTAL_STEPS = 10; // pasos del viaje (sin contar el countdown)
// Pasos con carrusel horizontal propio: ahí desactivamos el swipe de navegación.
const CAROUSEL_STEPS = new Set([8, 9]);

function App() {
  const [step, setStep] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const { timeLeft, isReady } = useCountdown();
  const devMode = useKeySequence('CYAN');
  const { isMuted, toggle: toggleSound, play: playSound } = useOceanSound();

  const canAccess = isReady || devMode;
  const current = step === 0 ? 1 : step;

  const nextStep = useCallback(() => {
    haptic('tap');
    setShowHint(false);
    setStep(s => Math.min(TOTAL_STEPS, s + 1));
    playSound();
    window.scrollTo({ top: 0 });
  }, [playSound]);

  const prevStep = useCallback(() => {
    haptic('tap');
    setStep(s => Math.max(1, s - 1));
    window.scrollTo({ top: 0 });
  }, []);

  const goToStep = useCallback((n: number) => {
    haptic('tap');
    setStep(n);
    window.scrollTo({ top: 0 });
  }, []);

  const restart = useCallback(() => {
    haptic('playful');
    setStep(1);
    window.scrollTo({ top: 0 });
  }, []);

  const swipeEnabled = canAccess && !CAROUSEL_STEPS.has(current);
  const swipeHandlers = useSwipe({
    enabled: swipeEnabled,
    onSwipeLeft: () => {
      if (current < TOTAL_STEPS) nextStep();
    },
    onSwipeRight: () => {
      if (current > 1) prevStep();
    },
  });

  const renderStep = () => {
    if (!canAccess) {
      return <Countdown timeLeft={timeLeft} />;
    }

    switch (step) {
      case 0:
      case 1:
        return <Welcome onNext={nextStep} />;
      case 2:
        return <LoveLetter onNext={nextStep} />;
      case 3:
        return <Family onNext={nextStep} />;
      case 4:
        return <Anniversary onNext={nextStep} />;
      case 5:
        return <Clues onNext={nextStep} />;
      case 6:
        return <Reveal onNext={nextStep} />;
      case 7:
        return <BoardingPass onNext={nextStep} />;
      case 8:
        return <Accommodation onNext={nextStep} />;
      case 9:
        return <PhotoCarousel onNext={nextStep} />;
      case 10:
        return <FinalMessage onRestart={restart} />;
      default:
        return <FinalMessage onRestart={restart} />;
    }
  };

  return (
    <>
      <OceanBackground />

      {canAccess && (
        <ProgressBar current={current} total={TOTAL_STEPS} onSeek={goToStep} />
      )}

      <div className="swipe-area" {...swipeHandlers}>
        <StepNavigator currentStep={current}>{renderStep()}</StepNavigator>
      </div>

      {/* Hint de gesto: solo en el primer paso, se desvanece al interactuar */}
      <AnimatePresence>
        {canAccess && showHint && current === 1 && (
          <motion.div
            className="swipe-hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <motion.span
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              👈 Desliza o toca el botón
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {canAccess && <SoundToggle isMuted={isMuted} onToggle={toggleSound} />}
    </>
  );
}

export default App;
