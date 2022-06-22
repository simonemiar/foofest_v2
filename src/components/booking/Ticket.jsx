import { useContext, useState } from "react";
// import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import party from "party-js";
import regularImage from "../../assets/img/regular_ticket.png";
import vipImage from "../../assets/img/vip_ticket.png";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function Ticket(props) {
  // const [isFlipped, setIsFlipped] = useState(false);
  const { setTicketBasket } = useContext(TicketBasketContext);
  const [flip, setFlip] = useState(false);

  // function handleClick(e) {
  //   setIsFlipped((prevState) => !prevState);
  // }

  // Here are we updating the ticketBasket state in the context
  // With the ticketType, ticketPrice and reseting the tent amount
  function addTicketTypeToBasket() {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketType: props.ticketType,
        ticketAmount: 1,
        ticketPrice: props.ticketPrice,
        tent2PersonAmount: 0,
        tent3PersonAmount: 0,
        isGreenCamping: false,
      };
    });
  }

  return (
    <article className="ticket">
      <div
        className={`card ${flip ? `flip` : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">
          <img src={regularImage} alt={vipImage} />
          <h4>FOO FESTIVAL</h4>
          <h2>{props.ticketType}</h2>

          <ul>
            <li>•</li>
            <li>•</li>
            <li>•</li>
          </ul>
          <h5>{props.ticketPrice}</h5>
          <div className="ticket_btn">
            <Link
              onClick={(e) => {
                party.confetti(e.target, {
                  shapes: ["star"],
                  count: party.variation.range(50, 200),
                  size: party.variation.range(1, 2),
                  speed: party.variation.range(100, 1000),
                });
                addTicketTypeToBasket();
              }}
              className="btn"
              to="/basket"
            >
              BUY TICKET
            </Link>
          </div>
          {/* <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return <div className="flashcard-option">{option}</div>;
          })}
        </div> */}
        </div>
        <div className="back"></div>
        {/* {flip ? flashcard.answer : flashcard.question} */}
      </div>
    </article>
  );
}
