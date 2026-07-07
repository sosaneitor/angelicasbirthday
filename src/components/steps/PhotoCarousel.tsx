import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';
import NextButton from '../NextButton';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import './PhotoCarousel.css';

interface PhotoCarouselProps {
  onNext: () => void;
}

const photos = [
  { id: 1, caption: 'Nuestro primer viaje juntos ✈️', type: 'image', src: '/photos/1.jpeg' },
  { id: 2, caption: 'Momentos que valen oro 💛', type: 'image', src: '/photos/2.jpeg' },
  { id: 3, caption: 'La llegada de Cyan 🐢', type: 'image', src: '/photos/3.jpeg' },
  { id: 5, caption: 'Amando sin límites 💙', type: 'image', src: '/photos/5.jpeg' },
  { id: 6, caption: 'Juntos somos más 🌊', type: 'image', src: '/photos/6.jpeg' },
];

export default function PhotoCarousel({ onNext }: PhotoCarouselProps) {
  return (
    <div className="carousel-screen">
      <div className="carousel-content">
        <motion.h2
          className="carousel-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros recuerdos 📸
        </motion.h2>

        <motion.div
          className="carousel-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Swiper
            modules={[EffectCreative, Pagination]}
            effect="creative"
            creativeEffect={{
              prev: { translate: ['-120%', 0, -500], opacity: 0 },
              next: { translate: ['120%', 0, -500], opacity: 0 },
            }}
            pagination={{ clickable: true }}
            grabCursor
            className="photo-swiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="photo-slide">
                  {photo.type === 'video' ? (
                    <video
                      className="photo-media"
                      src={photo.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      className="photo-media"
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                    />
                  )}
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.p
          className="carousel-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          ← Desliza para ver más →
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Un último mensaje →" delay={0} />
        </motion.div>
      </div>
    </div>
  );
}
