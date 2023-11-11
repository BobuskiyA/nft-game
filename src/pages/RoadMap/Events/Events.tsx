import EventCard from './EventCard'
import first from '../../../../public/images/RoadMap/Rally_event.png'
import second from '../../../../public/images/RoadMap/New_Year_Event.jpg'
import third from '../../../../public/images/RoadMap/ReadyTo.jpg'
import EventsContent from '@/data/Events.json'

import styles from './Events.module.scss'

function getImage(image: string) {
  switch(image) {
    case 'Invasion':
      return first
    
    case 'New Year 2024':
      return second
    
    case 'Pet?':
      return third
  }
}

const Events = () => {
  return (
    <section className={styles.events}>
      {EventsContent.map((currentEvent, i) => {
        const {date, id, leftText, rigthText, title, type} = currentEvent

        return (
          <EventCard
            image={getImage(title)}
            title={title}
            date={date}
            type={type}
            leftText={leftText}
            rightText={rigthText}
            key={i}
          />
        )
      })}
    </section>
  )
}

export default Events