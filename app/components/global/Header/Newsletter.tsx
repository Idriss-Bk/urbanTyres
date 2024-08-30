"use client";
import React from "react";
import NewsletterPopUp from "../../sections/NewsletterPopUp";

const Newsletter = () => {
  const [popup, setPopup] = React.useState(false);

  const handleSubscribe = () => {
    setPopup(true);
  };

  return (
    <div className="hidden lg:block">
      <button
        type="button"
        className="py-1 px-3 rounded bg-amber-400 text-black font-bold text-sm"
        onClick={handleSubscribe}
      >
        Newsletter
      </button>
      {popup && <NewsletterPopUp popup={popup} setPopup={setPopup} />}
    </div>
  );
};

export default Newsletter;
