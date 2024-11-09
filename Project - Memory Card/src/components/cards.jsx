import { useState } from "react";

// Fisher-Yates card sorting
function Cards() {
    // Keep card order in state
    const [cardOrder, setCardOrder] = useState(() => {
      // Initialize with unique IDs for each card
      return Array.from({ length: 12 }, () => crypto.randomUUID());
    });
  
    // Re-sort cards
    const newValue = () => {
      setCardOrder(prevOrder => {
        // Create copy of previous order
        const newOrder = [...prevOrder];
        // Fisher-Yates shuffle
        for (let i = newOrder.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
        }
        return newOrder;
      });
    };
  
    // You won't need the assignValue state or useEffect anymore
    // since we're handling the shuffle directly in newValue
  
    // Then in your JSX, map over the cardOrder array instead of hardcoding divs:
    return (
      <>
        <div className="gameboard">
          {cardOrder.map((key, index) => (
            <div className="card" key={key} onClick={newValue}>
              <div className="imgs" index={index + 1}></div>
              <p className="names">{key}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

export default Cards;