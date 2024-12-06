import EventCard from "../components/EventCard"
import Hero from "../components/Hero"
function Event() {
  return (
    <div>
      <Hero title="UPCOMING EVENTS" />
      <div>
        <p className="text-center my-3 w-[60%] mx-auto">I'm a paragraph. Click here to add your own text and edit me. It’s easy.

Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
      <EventCard />
    </div>
  )
}

export default Event
