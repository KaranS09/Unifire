import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import img from "../assets/imageHeader.png";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white bg-gradient-to-r from-violet-600 via-red-500 to-green-400 inline-block text-transparent bg-clip-text py-1 mb-4">
              Send Crypto across the world
            </h1>
            <img src={img} alt="img" />
            <p className="text-left mt-5 text-white font-light md:w-12/12 w-12/12 text-lg">
              Explore the crypto world. Buy and sell cryptocurrencies easily
              with our web app.
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500 my-0" />
    </div>
  );
};

export default Welcome;
