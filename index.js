// import initScrollReveal from "scripts/scrollReveal";
// import initTiltEffect from "scripts/tiltAnimation";
// import { targetElements, defaultProps } from "data/scrollRevealConfig";

const {initScrollReveal} = require('scripts/scrollReveal');
const {initTiltEffect} = require('scripts/tiltAnimation');
const {targetElements, defaultProps} = require('data/scrollRevealConfig');
// const defaultProps = require('./data/scrollRevealConfig');

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
