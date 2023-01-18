import React from 'react'
import './style.css'

export default function Worm() {
  
  return (
    <>
        <svg viewBox="0 600 1080 300" style={{isolation: 'isolate'}} preserveAspectRatio="xMidYMax meet">
        <path id="wormstraight" fill="none" strokeWidth={79} stroke="rgb(253,181,141)" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={3}>
          <animate attributeName="d" dur="2000ms" repeatCount="indefinite" values="M 280.57 776 Q 355 776 403 776 C 451 776 451 776 540 776 C 629 776 629 776 677.5 776 Q 726 776 799 776;

                     M 400.57 776 Q 415 776 463 776 C 511 776 451 656 540 656 C 629 656 569 776 617.5 776 Q 666 776 679 776;
                     
                     M 280.57 776 Q 355 776 403 776 C 451 776 451 776 540 776 C 629 776 629 776 677.5 776 Q 726 776 799 776;" />
        </path>
        <g id="facestraight" transform="translate(-120 0)">
          <circle cx={787} cy={764} r={5} fill="rgb(71,71,76)" />
          <circle cx={807} cy={764} r={5} fill="rgb(71,71,76)" />
          <path d=" M 787 780 Q 792.001 784 797 784 Q 801.999 784 807 780" fill="none" strokeWidth={7} stroke="rgb(231,231,231)" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={3} />
          <animateTransform attributeName="transform" attributeType="XML" dur="2s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;-120;0" calcMode="linear" />
        </g>
      </svg>
    </>
  )
}
