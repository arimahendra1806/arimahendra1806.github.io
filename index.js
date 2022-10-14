// import initScrollReveal from "scripts/scrollReveal";
// import initTiltEffect from "scripts/tiltAnimation";
// import { targetElements, defaultProps } from "data/scrollRevealConfig";

const {initScrollReveal} = require('scripts/scrollReveal.js');
const {initTiltEffect} = require('scripts/tiltAnimation.js');
const {targetElements, defaultProps} = require('data/scrollRevealConfig.js');
// const defaultProps = require('./data/scrollRevealConfig');

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
