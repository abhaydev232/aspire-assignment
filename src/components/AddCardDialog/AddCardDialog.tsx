import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {Card} from "../../CardContext";

interface AddCardDialogProps {
  open: boolean;
  onClose: () => void;
  onAddCard: (card: Card) => void; // full Card with cvv
}

interface FormValues {
  name: string;
}

const AddCardDialog: React.FC<AddCardDialogProps> = ({ open, onClose, onAddCard }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: "" },
  });
  const generateCvv = () => {
  return Math.floor(100 + Math.random() * 900).toString(); // random 3-digit CVV
};

  const generateCardNumber = () => {
    let number = "";
    for (let i = 0; i < 16; i++) {
      number += Math.floor(Math.random() * 10).toString();
      if ((i + 1) % 4 === 0 && i !== 15) number += " ";
    }
    return number;
  };

  const generateExpiry = () => {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5)).slice(-2);
    return `${month}/${year}`;
  };

const onSubmit = (data: FormValues) => {
  const cardNumber = generateCardNumber();
  const expiry = generateExpiry();
  const cvv = generateCvv();

  onAddCard({ name: data.name, cardNumber, expiry, cvv });
  reset();
  onClose();
};


  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.1)",
          padding: 2,
          minWidth: 350,
          backgroundColor: "#fff",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          fontSize: 22,
          color: "#333",
          borderBottom: "1px solid #eee",
          pb: 1.5,
        }}
      >
        Add New Card
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ pt: 2, pb: 1 }}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Card name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                label="Card Name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    boxShadow:
                      "inset 0 1px 3px rgba(0,0,0,0.1)",
                  },
                }}
              />
            )}
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={onClose}
            sx={{
              textTransform: "none",
              color: "#777",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", px: 3, py: 1.2 }}
          >
            Add Card
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddCardDialog;
