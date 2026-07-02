"use client";

import SpinningLogo from "./SpinningLogo";

export default function NavigationBar() {
  function returnHome() {
    window.dispatchEvent(new Event("portfolio:reset"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header id="top" className="brand-header mx-auto w-full max-w-4xl">
      <button
        type="button"
        onClick={returnHome}
        className="brand-home-button group"
        aria-label="Return to the top and close all sections"
        title="Back to top"
      >
        <SpinningLogo />
        <span className="brand-home-hint" aria-hidden="true">Home</span>
      </button>

      <div className="brand-wordmark min-w-0">
        <p className="brand-name">JUSTIN</p>
        <p className="brand-name">RESTREPO</p>
        <div className="brand-domain-row">
          <span className="brand-domain-line" />
          <span className="brand-domain">JUSTINRESTREPO.COM</span>
        </div>
      </div>
    </header>
  );
}
