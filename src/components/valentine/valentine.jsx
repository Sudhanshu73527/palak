import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cuteImg from "../../assets/valentine.jpg";

const Valentine = () => {
  const [step, setStep] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;
    setNoPos({ x, y });
  };

  const options = [
    "Because you make me feel special 💖",
    "Your smile makes my day better 😊",
    "You understand me like no one else 🌸",
    "You are caring & pure hearted 💕",
    "I just feel complete with you ✨"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 overflow-hidden px-4">

      <AnimatePresence mode="wait">

        {/* STEP 1 - PROPOSAL */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/70 backdrop-blur-2xl p-10 rounded-[40px] shadow-2xl text-center w-full max-w-md"
          >
            <img
              src={cuteImg}
              alt="cute"
              className="w-40 h-40 mx-auto rounded-2xl shadow-xl mb-6"
            />

            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Will You Be My Valentine?
            </h1>

            <p className="mt-3 text-gray-600 text-lg">
              Think carefully Palak 🥺
            </p>

            <div className="relative flex justify-between items-center mt-10 px-6 h-16">

              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:scale-105 transition"
              >
                Yes 💘
              </button>

              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={moveNo}
                onClick={moveNo}
                className="px-8 py-3 bg-white border border-rose-400 text-rose-500 rounded-full shadow-md absolute right-6"
              >
                No 🙈
              </motion.button>

            </div>
          </motion.div>
        )}

        {/* STEP 2 - ROMANTIC MESSAGE */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white/80 backdrop-blur-2xl p-12 rounded-[40px] shadow-2xl text-center w-full max-w-lg"
          >
            <h2 className="text-3xl font-bold text-rose-500">
              Palak 💖
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              You are not just a part of my life,
              you are the best chapter of it.
              Your presence makes everything brighter,
              softer and more meaningful.
              I feel lucky every single day
              that you are with me. 💕
            </p>

            <img
              src={cuteImg}
              alt="love"
              className="w-52 h-52 mx-auto rounded-3xl shadow-2xl mt-8"
            />

            <button
              onClick={() => setStep(3)}
              className="mt-8 px-10 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition"
            >
              Next ➜
            </button>
          </motion.div>
        )}

        {/* STEP 3 - WHY YOU LOVE ME */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white/80 backdrop-blur-2xl p-10 rounded-[40px] shadow-2xl text-center w-full max-w-lg"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Why Do You Love Me? 💕
            </h2>

            <div className="grid gap-4">
              {options.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setStep(4)}
                  className="p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl shadow hover:shadow-lg transition text-gray-700 font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 4 - FINAL SCREEN */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-2xl p-12 rounded-[40px] shadow-2xl text-center w-full max-w-md"
          >
            <h2 className="text-4xl font-bold text-rose-500">
              I Love You Palak 💞
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              No matter what you choose,
              I will always adore you.
              You are my happiness. ✨
            </p>

            <img
              src={cuteImg}
              alt="final"
              className="w-52 h-52 mx-auto rounded-3xl shadow-xl mt-8"
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Valentine;
