import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const eventsData = [
    {
        id: 1,
        image: 'src/Client/assets/events/event1.jpg', // Replace with your image path
        description: 'Event 1: Company product launch event with keynote presentations.',
        date: '2023-09-22',
    },
    {
        id: 2,
        image: 'src/Client/assets/events/event2.jpg', // Replace with your image path
        description: 'Event 2: Annual shareholders meeting and discussion on future plans.',
        date: '2023-10-01',
    },
    {
        id: 3,
        image: 'src/Client/assets/events/event3.jpg', // Replace with your image path
        description: 'Event 3: Community outreach and social responsibility event.',
        date: '2023-09-22',
    },
    {
        id: 4,
        image: 'src/Client/assets/events/event4.jpg', // Replace with your image path
        description: 'Event 4: Regional product roadshow and exhibition.',
        date: '2023-10-01',
    },
    {
        id: 5,
        image: 'src/Client/assets/events/event5.jpg', // Replace with your image path
        description: 'Event 5: International conference and networking event.',
        date: '2023-09-22',
    }
];

function Events() {
    return (
        <>
        <div className="events-container" id='events'>
            <h1 className="events-title">Company Events</h1>
            <Swiper
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    centeredSlides={true}
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Pagination, Navigation]}
    breakpoints={{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }}
>
    {eventsData.map(event => (
        <SwiperSlide key={event.id}>
            <div className="event-slide">
                <img src={event.image} alt={`Event ${event.id}`} className="event-image" />
                <div className="event-details">
                    <p className="event-description">{event.description}</p>
                    <span className="event-date">{event.date}</span>
                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>

        </div>
        </>
    );
}

export default Events;
