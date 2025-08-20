import React, { useState } from "react";
import Box from "../../assets/box.svg";
import "./MainContainer.css";
import BasicTabs from "../Tabs/BasicTabs";
import AddCardDialog from "../AddCardDialog/AddCardDialog";
import { useCardContext } from "../../CardContext"; 

const MainContainer: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { cards, addCard } = useCardContext();

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <div className="main-container">
      <div className="balance-label">Available balance</div>

      <div className="balance-row">
        <div className="balance-amount">
          <span className="currency">S$</span>
          <span className="txt-avl-amt">&nbsp;3,000</span>
        </div>

        <div>
          <button className="btn-new-card" onClick={handleOpenDialog}>
            <img src={Box} alt="box" />
            New card
          </button>
        </div>
      </div>

      <AddCardDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onAddCard={addCard}
      />

 

      <BasicTabs />
    </div>
  );
};

export default MainContainer;
