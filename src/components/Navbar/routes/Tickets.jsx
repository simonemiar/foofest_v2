import Ticket from "../../booking/Ticket";
import vipImage from "../../../assets/img/vip_ticket.png";
import regularImage from "../../../assets/img/regular_ticket.png";

export default function Tickets() {
  const regularTicket = {
    ticketType: "Regular Ticket",
    ticketPrice: "799",
    img: regularImage,
    info: [
      "• This ticket gives access to all 7 days of Foo Festival",
      "• Access to both camping and festival area",
      "• Free cold shower",
    ],
  };
  const vipTicket = {
    ticketType: "VIP Ticket",
    ticketPrice: "1299",
    img: vipImage,
    info: [
      "• This VIP ticket gives access to all 7 days of Foo Festival",
      "• Excluesive access to the VIP area, tent setup before arrival",
      "• Discount on warm showers, powerbanks and so much more",
    ],
    color: "#EAC385",
  };

  return (
    <main>
      <section id="ticket_container">
        <h1 className="heading">Pick your ticket!</h1>
        <section id="tickets">
          {/* <Ticket ticketType="Regular Ticket" ticketPrice="799" /> */}
          {/* <Ticket ticketType="VIP Ticket" ticketPrice="1299" /> */}

          <Ticket ticketInfo={regularTicket} />
          <Ticket ticketInfo={vipTicket} />
        </section>
      </section>
    </main>
  );
}
