import React from "react";

export const DisplaySection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".nav-wrapper")
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className={"display-section wrapper"} style={{opacity: 1}}>
      <h2 className={"title"}>New</h2>
      <p className={"text"}>Brilliant</p>
      <span className={"description"}>
        A display that's up to 2x brighter in the sun.
      </span>
      <button className={"button"}>
        Try me!
      </button>
      <button onClick={handleLearnMore} className={"back-button"}>
        TOP
      </button>
    </div>
  )
}