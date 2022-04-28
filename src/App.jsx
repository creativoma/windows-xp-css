import React from "react";
import "xp.css/dist/XP.css";

export default function App(){
  return(
    <div className="container">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Actualización en marcha...</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
        <img src="../src/logo-windows.svg" width={200}/>
          <p>
          This library relies on the usage of semantic HTML. To make a button, you'll need to <br />
          use a button. Input elements require labels. Icon buttons rely on aria-label. This page <br />
          will guide you through that process, but accessibility is a primary goal of this project. <br /><br />
          
          You can override many of the styles of your elements while maintaining the <br />
          appearance provided by this library. Need more padding on your buttons? <br />
          Go for it. Need to add some color to your input labels? Be our guest. <br /><br />
          
          This library does not contain any JavaScript, it merely styles your HTML with <br />
          some CSS. This means 98.css is compatible with your frontend framework of choice. <br /><br />
          
          Here is an example of XP.css used with React, and an example with vanilla JavaScript. <br />
          The fastest way to use XP.css is to import it from unpkg.<br /><br />

          Official page: <a href="https://botoxparty.github.io/XP.css/" target="_blank">botoxparty.github.io/XP.css</a><br /><br />
          
          Windows XP Theme
          </p>
        </div>
      </div>  
    </div>
  )
}


