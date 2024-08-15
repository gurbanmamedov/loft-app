import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  disabled?: boolean;
}

export const AnimatedSubscribeButton: React.FC<AnimatedSubscribeButtonProps> = ({
  buttonColor,
  buttonTextColor = "#ffffff",
  subscribeStatus,
  initialText,
  changeText,
  disabled = false,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  const handleClick = () => {
    if (!disabled) {
      setIsSubscribed(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          key="subscribed"
          className="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md p-[10px] outline outline-1 outline-black"
          style={{
            backgroundColor: "#242B33", 
            color: "#ffffff",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => !disabled && setIsSubscribed(false)}
          disabled={disabled}
        >
          <motion.span className="relative block h-full w-full font-semibold">
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          key="notSubscribed"
          className="relative flex w-[200px] items-center justify-center rounded-md border-none p-[10px]"
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={handleClick}
          disabled={disabled}
        >
          <motion.span className="relative block font-semibold">
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
