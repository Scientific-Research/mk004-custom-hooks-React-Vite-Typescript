import { useState } from 'react';

interface IProp {
  PageUseToggle: string;
}

export const PageUseToggle = ({ PageUseToggle }: IProp) => {
  const [showAds, setShowAds] = useState(false);
  const [sendMail, setSendMail] = useState(false);

  const handleShowAds = () => {
    setShowAds(!showAds);
  };

  const handleSendMails = () => {
    setSendMail(!sendMail);
  };

  return (
    <div className="pageUseToggle">
      <p className="pageToggle">
        Welcome to this site - PageUseToggle - {PageUseToggle}
      </p>

      <hr />

      <div>
        <button className="btnAds" onClick={handleShowAds}>
          Advertisements
        </button>

        {/* {showAds
        ? `Yes, show me advertisements`
        : 'No, do not show me advertisements'} */}

        {/* First Solution */}
        {/* <span style={{ color: showAds ? 'green' : 'red' }}>
        {showAds
        ? `Yes, show me advertisements`
        : 'No, do not show me advertisements'}
        </span> */}

        {/* Second Solution */}
        <span className={showAds ? 'positive' : 'negative'}>
          {showAds
            ? `Yes, show me advertisements!`
            : 'No, do not show me advertisements!'}
        </span>
      </div>

      {/* SEND MAIL SECTION */}
      <button className="btnMails" onClick={handleSendMails}>
        Mails
      </button>

      <span className={sendMail ? 'positive' : 'negative'}>
        {sendMail ? `Yes, send me Mails!` : 'No, do not send me Mails!'}
      </span>
    </div>
  );
};
