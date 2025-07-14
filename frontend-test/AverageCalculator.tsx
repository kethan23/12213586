import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { log } from "../utils/logger";

const AverageCalculator = () => {
  const [input, setInput] = useState("");
  const [average, setAverage] = useState<number | null>(null);

  const handleSubmit = async () => {
    const nums = input.split(",").map((n) => parseFloat(n.trim()));
    if (nums.some(isNaN)) {
      await log("frontend", "warn", "component", "Invalid number input");
      return alert("Please enter only comma-separated numbers");
    }

    try {
      await log("frontend", "info", "component", "Calling backend /average");
      const res = await fetch("http://localhost:5000/average", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numbers: nums }),
      });

      const data = await res.json();
      setAverage(data.average);
      await log("frontend", "info", "component", `Average received: ${data.average}`);
    } catch (err) {
      await log("frontend", "fatal", "component", "API call failed");
      alert("Something went wrong while fetching the average.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Average Calculator
      </Typography>
      <TextField
        fullWidth
        label="Enter numbers (comma-separated)"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Calculate
      </Button>
      {average !== null && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Result: {average}
        </Typography>
      )}
    </Box>
  );
};

export default AverageCalculator;
