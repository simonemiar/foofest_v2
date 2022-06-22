import Ticket from "../../booking/Ticket";

export default function Tickets() {
  return (
    <main>
      <section id="ticket_container">
        <h1 className="heading">Pick your ticket!</h1>
        <section id="tickets">
          <Ticket ticketType="Regular Ticket" ticketPrice="799" />
          <Ticket ticketType="VIP Ticket" ticketPrice="1299" />
        </section>
      </section>
    </main>
  );
}
