import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import event4 from '../../assets/events/event4.jpg';

const eventsData = [
    {
        id: 1,
        image:event1, // Replace with your image path
        description: 'Company product launch event with keynote presentations.',
        date: '10-12 Dec. 2024',
    },
    {
        id: 2,
        image:event2, // Replace with your image path
        description: 'Annual shareholders meeting and discussion on future plans.',
        date: '10-12 Dec. 2024',
    },
    {
        id: 3,
        image:event3, // Replace with your image path
        description: 'Community outreach and social responsibility event.',
        date: '10-12 Dec. 2024',
    },
    {
        id: 4,
        image:event4, // Replace with your image path
        description: 'Regional product roadshow and exhibition.',
        date: '10-12 Dec. 2024',
    },
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
