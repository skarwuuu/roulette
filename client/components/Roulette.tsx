"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { motion } from "framer-motion";

const data = [
  {
    option: "0",
    style: {
      backgroundColor: "green",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "32",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "15",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "19",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "4",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "21",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "2",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "25",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "17",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "34",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "6",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "27",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "13",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "36",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "11",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "30",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "8",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "23",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "10",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "5",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "24",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "16",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "33",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "1",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "20",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "14",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "31",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "9",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "22",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "18",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "29",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "7",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "28",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "12",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "35",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "3",
    style: {
      backgroundColor: "red",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
  {
    option: "26",
    style: {
      backgroundColor: "black",
      textColor: "white",
      fontFamily: "JetBrains Mono",
    },
  },
];

export default () => {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const getRouletteColor = (num: number) => {
    if (num === 0) return "bg-[#008000]";
    const redNumbers = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ];
    return redNumbers.includes(num) ? "bg-[#ff0000]" : "bg-black";
  };

  const handleSpinClick = useCallback(() => {
    if (!mustSpin && !isSpinning) {
      setShowConfirmation(true);
    }
  }, [mustSpin, isSpinning]);

  const handleConfirmedSpin = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setIsSpinning(true);
    setShowConfirmation(false);
  };

  const handleNumberSelect = useCallback(
    (num: number) => {
      if (!isSpinning) {
        setSelectedNumber(num);
      }
    },
    [isSpinning]
  );

  const Modal = () => {
    const winningNumber = parseInt(data[prizeNumber].option);
    const won = selectedNumber === winningNumber;

    return (
      showModal && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowModal(false)}
          className="select-none fixed z-50 inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="bg-gradient-to-tr from-neutral-900 to-neutral-800 p-8 rounded-xl border-2 border-white"
          >
            <h2 className="text-white font-mono font-bold text-2xl mb-6">
              Results
            </h2>
            <div className="font-mono font-bold text-lg">
              <div className="flex justify-between items-center gap-5">
                <p className="text-white">Your bet: </p>
                <span
                  className={`${getRouletteColor(
                    selectedNumber
                  )} w-12 py-1 rounded text-white text-center`}
                >
                  {selectedNumber}
                </span>
              </div>
              <div className="flex justify-between items-center gap-5 mt-2">
                <p className="text-white">Winning number: </p>
                <span
                  className={`${getRouletteColor(
                    winningNumber
                  )} w-12 py-1 rounded text-white text-center`}
                >
                  {winningNumber}
                </span>
              </div>
              <p
                className={`text-2xl mt-6 font-bold ${
                  won ? "text-green-500" : "text-red-500"
                }`}
              >
                {won ? "Congratulations!!!" : "Better luck next time!"}
              </p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full font-mono text-white text-xl bg-black hover:bg-gradient-to-tr from-black to-neutral-700 px-4 py-2 rounded-lg border-2 border-black duration-200 hover:border-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )
    );
  };

  const ConfirmationModal = () =>
    showConfirmation && (
      <motion.div
        key="confirm-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="select-none fixed z-50 inset-0 bg-black bg-opacity-70 flex items-center justify-center"
      >
        <motion.div
          key="confirm-content"
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          onClick={(e) => e.stopPropagation()}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
          }}
          className="bg-gradient-to-tr from-neutral-900 to-neutral-800 p-8 rounded-xl border-2 border-white"
        >
          <h2 className="text-white font-mono font-bold text-2xl mb-6">
            Confirm Bet
          </h2>
          <div className="flex items-center gap-2 text-white font-mono font-bold text-lg mb-6">
            <p>
              Are you sure you want
              <br /> to bet on number
              <span
                className={`${getRouletteColor(
                  selectedNumber
                )} mx-1 px-1 rounded`}
              >
                {selectedNumber}
              </span>
              ?
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleConfirmedSpin}
              className="flex-1 font-mono text-white text-xl bg-black hover:bg-gradient-to-tr from-black to-neutral-700 px-4 py-2 rounded-lg border-2 border-black duration-200 hover:border-white"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="flex-1 font-mono text-white text-xl bg-red-700 hover:bg-gradient-to-tr from-red-600 to-red-500 px-4 py-2 rounded-lg border-2 border-red-700 duration-200 hover:border-white"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.2,
            staggerChildren: 0.3,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="gap-10 xl:gap-20 flex flex-col xl:flex-row items-center justify-center">
        <motion.div
          className="relative"
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
              rotate: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 1.5,
              },
            },
          }}
        >
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            fontSize={18}
            perpendicularText={true}
            radiusLineColor={"white"}
            innerBorderColor={"white"}
            outerBorderColor={"white"}
            textDistance={85}
            innerRadius={60}
            outerBorderWidth={3}
            innerBorderWidth={2}
            radiusLineWidth={1}
            spinDuration={1.2}
            startingOptionIndex={0}
            pointerProps={{
              src: "/pointer.svg",
              style: {
                transform: "translateY(4rem) translateX(3.6rem)",
                scale: 0.6,
                rotate: "225deg",
              },
            }}
            onStopSpinning={() => {
              setMustSpin(false);
              setIsSpinning(false);
              setShowModal(true);
            }}
          />
          <img />
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 90,
                duration: 1.5,
                delayChildren: 0.4,
                staggerChildren: 0.1,
              },
            },
          }}
          className={`flex flex-col items-center gap-8 transition-opacity duration-300 ${
            isSpinning ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                },
              },
            }}
            className="font-mono flex"
          >
            <div className="border-y-2 border-l-2">
              <motion.button
                whileHover={{ scale: isSpinning ? 1 : 1.02 }}
                whileTap={{ scale: 1 }}
                onClick={() => handleNumberSelect(0)}
                disabled={isSpinning}
                className={`w-[52px] h-full bg-[#008000] text-white flex items-center justify-center ${
                  isSpinning ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                0
              </motion.button>
            </div>
            <table className="table-auto w-full text-center font-bold">
              <tbody>
                {[
                  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
                  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
                  [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="text-white">
                    {row.map((num) => (
                      <td key={num} className="border-2 p-0">
                        <motion.button
                          whileHover={{
                            scale: isSpinning ? 1 : 1.05,
                          }}
                          whileTap={{ scale: 1 }}
                          onClick={() => handleNumberSelect(num)}
                          disabled={isSpinning}
                          className={`w-full h-full px-4 py-2 ${getRouletteColor(
                            num
                          )} text-white block ${
                            isSpinning ? "cursor-not-allowed" : "cursor-pointer"
                          }`}
                        >
                          {num}
                        </motion.button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                },
              },
            }}
            className="flex w-full justify-between items-center"
          >
            <label className="text-white font-mono font-bold select-none text-3xl">
              Placing bet on:{" "}
            </label>
            <input
              value={selectedNumber}
              readOnly
              className={`w-40 text-right border-2 rounded-xl text-white font-mono font-bold text-2xl px-4 py-2 outline-none ${getRouletteColor(
                selectedNumber
              )}`}
            />
          </motion.div>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 120,
                  duration: 0.8,
                },
              },
            }}
            onClick={handleSpinClick}
            disabled={isSpinning}
            className={`w-48 font-mono text-white text-xl bg-black hover:bg-gradient-to-tr from-black to-neutral-700 px-4 py-2 rounded-lg border-2 border-black duration-200 ${
              isSpinning
                ? "opacity-20 cursor-not-allowed"
                : "hover:border-white cursor-pointer"
            }`}
          >
            {isSpinning ? "SPINNING..." : "SPIN"}
          </motion.button>
        </motion.div>
      </div>
      <Modal />
      <ConfirmationModal />
    </motion.div>
  );
};
