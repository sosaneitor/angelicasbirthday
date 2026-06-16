import { motion } from 'framer-motion';
import NextButton from '../NextButton';
import './BoardingPass.css';

interface BoardingPassProps {
  onNext: () => void;
}

export default function BoardingPass({ onNext }: BoardingPassProps) {
  return (
    <div className="boarding-screen">
      <div className="boarding-content">
        <motion.h2
          className="boarding-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Boarding Pass ✈️
        </motion.h2>

        {/* Outbound flight */}
        <motion.div
          className="ticket"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ticket-header">
            <span className="ticket-airline">AVIANCA</span>
            <span className="ticket-flight">AV 8474</span>
          </div>
          <div className="ticket-body">
            <div className="ticket-route">
              <div className="ticket-city">
                <span className="city-code">PEI</span>
                <span className="city-name">Pereira</span>
              </div>
              <div className="ticket-arrow">
                <div className="arrow-line" />
                <span>✈️</span>
                <div className="arrow-line" />
              </div>
              <div className="ticket-city">
                <span className="city-code">SMR</span>
                <span className="city-name">Santa Marta</span>
              </div>
            </div>
            <div className="ticket-details">
              <div className="ticket-detail">
                <span className="detail-label">FECHA</span>
                <span className="detail-value">12 JUL 2026</span>
              </div>
              <div className="ticket-detail">
                <span className="detail-label">SALE</span>
                <span className="detail-value">12:10 PM</span>
              </div>
              <div className="ticket-detail">
                <span className="detail-label">LLEGA</span>
                <span className="detail-value">1:35 PM</span>
              </div>
            </div>
            <div className="ticket-passenger">
              <span className="detail-label">PASAJEROS</span>
              <span className="passenger-names">Angelica, Sebastian & Cyan 🐢</span>
            </div>
          </div>
          <div className="ticket-tear" />
        </motion.div>

        {/* Return flight */}
        <motion.div
          className="ticket ticket-return"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ticket-header ticket-header-return">
            <span className="ticket-airline">AVIANCA</span>
            <span className="ticket-flight">AV 8473</span>
          </div>
          <div className="ticket-body">
            <div className="ticket-route">
              <div className="ticket-city">
                <span className="city-code">SMR</span>
                <span className="city-name">Santa Marta</span>
              </div>
              <div className="ticket-arrow">
                <div className="arrow-line" />
                <span>✈️</span>
                <div className="arrow-line" />
              </div>
              <div className="ticket-city">
                <span className="city-code">PEI</span>
                <span className="city-name">Pereira</span>
              </div>
            </div>
            <div className="ticket-details">
              <div className="ticket-detail">
                <span className="detail-label">FECHA</span>
                <span className="detail-value">15 JUL 2026</span>
              </div>
              <div className="ticket-detail">
                <span className="detail-label">SALE</span>
                <span className="detail-value">2:15 PM</span>
              </div>
              <div className="ticket-detail">
                <span className="detail-label">LLEGA</span>
                <span className="detail-value">3:40 PM</span>
              </div>
            </div>
          </div>
          <div className="ticket-tear" />
        </motion.div>

        <motion.p
          className="boarding-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          🎒 Fare: BASIC &bull; Booking: BP4OFC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="¿Y dónde nos quedamos? →" />
        </motion.div>
      </div>
    </div>
  );
}
