import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import CopyToClipboardButton from './CopyToClipboardButton';

const ShareJob = ({ url }) => {
  return (
    <div className="">
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle w-1/2 lg:w-1/4 shadow-2xl  rounded-md p-10"
      >
        <div className="modal-box space-y-5 space-x-5">
          <h3 className="font-bold text-lg">Share</h3>

          {/* share icon */}
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <EmailShareButton url={url}>
            <EmailIcon size={40} round />
          </EmailShareButton>


          {/* text copy field */}
          <CopyToClipboardButton url={url} />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

ShareJob.propTypes = {
    url:PropTypes.string
}

export default ShareJob