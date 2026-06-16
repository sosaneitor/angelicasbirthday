import { useState, useCallback } from 'react';
import { useCountdown } from './hooks/useCountdown';
import { useKeySequence } from './hooks/useKeySequence';
import { useOceanSound } from './hooks/useOceanSound';
import OceanBackground from './components/OceanBackground';
import StepNavigator from './components/StepNavigator';
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

function App() {
  const [step, setStep] = useState(0);
  const { timeLeft, isReady } = useCountdown();
  const devMode = useKeySequence('CYAN');
  const { isMuted, toggle: toggleSound, play: playSound } = useOceanSound();

  const canAccess = isReady || devMode;

  const nextStep = useCallback(() => {
    setStep(s => s + 1);
    playSound();
    window.scrollTo({ top: 0 });
  }, [playSound]);

  const restart = useCallback(() => {
    setStep(1);
    window.scrollTo({ top: 0 });
  }, []);

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

  const displayStep = canAccess ? (step === 0 ? 1 : step) : 0;

  return (
    <>
      <OceanBackground />
      <StepNavigator currentStep={displayStep}>
        {renderStep()}
      </StepNavigator>
      {canAccess && <SoundToggle isMuted={isMuted} onToggle={toggleSound} />}
    </>
  );
}

export default App;
