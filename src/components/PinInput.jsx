import React, { useRef, useState } from "react";

const PinInput = ({ length, onComplete, onChange }) => {
  const [pin, setPin] = useState(Array(length).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value) && value !== "") {
      return;
    } else {
      let newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      onChange(newPin.join(""));

      // Moving focus to the next field...
      if (value && index < length - 1) {
        setActiveIndex(index + 1);
        inputRefs.current[index + 1]?.focus();
      }
      // Calling onComplete if all fields are completely filled...
      if (newPin.every((val) => val !== "")) {
        onChange(newPin.join(""));
      }
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && pin[index] === "" && index > 0) {
      // Moving focus to the previous field if empty...
      setActiveIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData
      .getData("text")
      .slice(0, length)
      .split("");
    if (/^\d*$/.test(pastedValue) && pastedValue.length <= length) {
      const newPin = [...pin];
      pastedValue.forEach((val, i) => {
        if (/^\d$/.test(val)) {
          newPin[i] = val;
        }
      });
      setPin(newPin);
      onChange(newPin.join(""));

      const lastFilledIndex = Math.min(pastedValue.length - 1, length - 1);
      setActiveIndex(lastFilledIndex);
      inputRefs.current[lastFilledIndex]?.focus();

      if (newPin.every((digit) => digit !== "")) {
        onChange(newPin.join(""));
      }
    }
  };

  return (
    <div className="flex gap-2" onPaste={handlePaste}>
      {pin.map((value, index) => (
        <input
          className="focus:outline-none"
          style={{
            width: "45px",
            height: "50px",
            marginRight: "10px",
            border: `2px solid ${activeIndex === index ? "#d7bd14" : "none"}`,
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: `${activeIndex === index ? "#fff" : "#efefef"}`,
          }}
          key={index}
          type="text"
          value={value}
          maxLength={1}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onFocus={() => handleFocus(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default PinInput;
