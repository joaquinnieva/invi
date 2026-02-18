import { weddingConfig } from "@/lib/wedding-config"
import { ModernInvitation } from "@/components/templates/ModernInvitation"

export default function ModernPage() {
  const {
    bride,
    groom,
    initials,
    date,
    time,
    displayDate,
    mainMessage,
    photos,
    ceremony,
    reception,
    schedule,
    giftRegistry,
    rsvp,
    dressCode,
    album,
  } = weddingConfig

  return (
    <ModernInvitation
      bride={bride}
      groom={groom}
      initials={initials}
      date={date}
      time={time}
      displayDate={displayDate}
      mainMessage={mainMessage}
      photos={photos}
      ceremony={ceremony}
      reception={reception}
      schedule={schedule}
      giftRegistry={giftRegistry}
      rsvp={rsvp}
      dressCode={dressCode}
      album={album}
    />
  )
}
