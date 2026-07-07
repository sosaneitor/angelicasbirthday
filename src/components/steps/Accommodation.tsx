import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import NextButton from '../NextButton';
import 'swiper/css';
import 'swiper/css/pagination';
import './Accommodation.css';

interface AccommodationProps {
  onNext: () => void;
}

// Cualquier foto que agregues en src/assets/airbnb/ aparece sola aquí.
const airbnbModules = import.meta.glob(
  '../../assets/airbnb/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const airbnbPhotos = Object.entries(airbnbModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src as string);

const amenities = [
  { icon: '🏊', label: 'Piscina' },
  { icon: '🏖️', label: 'Playa' },
  { icon: '🌊', label: 'Vista al Mar' },
  { icon: '⭐', label: 'Superhost' },
];

export default function Accommodation({ onNext }: AccommodationProps) {
  return (
    <div className="accom-screen">
      <div className="accom-content">
        <motion.h2
          className="accom-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestro hospedaje 🏡
        </motion.h2>

        <motion.div
          className="airbnb-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="airbnb-photo">
            {airbnbPhotos.length === 0 ? (
              <div className="airbnb-photo-placeholder">
                <span>🏠</span>
                <small>Agrega fotos en src/assets/airbnb/</small>
              </div>
            ) : airbnbPhotos.length === 1 ? (
              <img className="airbnb-img" src={airbnbPhotos[0]} alt="Airbnb" loading="lazy" />
            ) : (
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                pagination={{ clickable: true }}
                grabCursor
                className="airbnb-swiper"
              >
                {airbnbPhotos.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img className="airbnb-img" src={src} alt={`Airbnb ${i + 1}`} loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <div className="airbnb-badge">
              <span className="airbnb-logo">⌂</span> Superhost
            </div>
          </div>

          <div className="airbnb-info">
            <h3 className="airbnb-title">Vista al Mar | Piscina & Playa</h3>
            
            <div className="airbnb-dates">
              <span className="airbnb-date-icon">📅</span>
              <span>12 — 15 de Julio, 2026</span>
            </div>

            <div className="airbnb-amenities">
              {amenities.map((a, i) => (
                <motion.div
                  key={a.label}
                  className="amenity"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: 'spring', bounce: 0.4 }}
                >
                  <span className="amenity-icon">{a.icon}</span>
                  <span className="amenity-label">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          className="accom-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Imagínate despertando con el sonido del mar... 🌅
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Ver recuerdos →" variant="coral" delay={0} />
        </motion.div>
      </div>
    </div>
  );
}
