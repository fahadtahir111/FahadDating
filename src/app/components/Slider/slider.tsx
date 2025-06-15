'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LoveStories = () => {
  const stories = [
    {
      id: 1,
      image: '/assets/standard.png',
      names: 'Sarah & Michael',
      description: 'Met in 2022, now engaged!'
    },
    {
      id: 2,
      image: '/assets/standard.png',
      names: 'James & Emma',
      description: 'Connected across continents'
    },
    {
      id: 3,
      image: '/assets/standard.png',
      names: 'David & Priya',
      description: 'Our algorithm\'s perfect match'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 gradient-text">Real Love Stories</h1>
            <p className="text-gray-400 mb-6">
              Discover how real people found love on LoveConnect Pro. These journeys showcase the magic of smart matchmaking and real connections.
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Millions of success stories</li>
              <li>Couples from every continent</li>
              <li>Trusted by genuine singles worldwide</li>
            </ul>
          </div>
          <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="swiper-container"
            >
              {stories.map((story) => (
                <SwiperSlide key={story.id}>
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={`Love Story ${story.id}`} 
                      className="w-full h-64 md:h-96 object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">{story.names}</h3>
                      <p className="text-gray-300">{story.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx>{`
  
        
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white;
          background: rgba(0,0,0,0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 20px;
        }
        
        :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.5;
        }
        
        :global(.swiper-pagination-bullet-active) {
          background: #ff6b6b;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default LoveStories;