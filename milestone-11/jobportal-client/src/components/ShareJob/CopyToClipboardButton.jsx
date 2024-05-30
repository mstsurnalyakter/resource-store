import  { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdCloudDone } from "react-icons/io";
import PropTypes from 'prop-types'

const CopyToClipboardButton = ({ url }) => {
   const [isCopied, setIsCopied] = useState(false);

   const copyToClipboard = () => {
     navigator.clipboard
       .writeText(url)
       .then(() => {
         setIsCopied(true);
         setTimeout(() => setIsCopied(false), 2000); 
       })
       .catch((err) => console.error("Failed to copy:", err));
   };

   return (
     <div className="flex gap-1">
       <input
         type="text"
         value={url}
         className="border-2 border-gray-300 p-1 flex-1"
       ></input>
       <button className="text-xl text-[#FF4153]" onClick={copyToClipboard}>
         {isCopied ? <IoMdCloudDone /> : <FaCopy />}
       </button>
     </div>
   );
}

CopyToClipboardButton.propTypes = {
  url: PropTypes.string,
};

export default CopyToClipboardButton