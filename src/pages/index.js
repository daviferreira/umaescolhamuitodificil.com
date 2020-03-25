import React from "react"
import BozoVideo from "../assets/video.mp4"

export default () => (
  <div
    style={{
      background: 'black',
      height: "100vh",
      width: "100vw",
    }}
  >
    <video autoPlay controls height="100%" width="100%">
      <source src={BozoVideo} type="video/mp4" />
    </video>
  </div>
)
