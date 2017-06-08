Tone.Transport.bpm.value = 100; // the master timekeeper

var pulseOptions = {
  oscillator: {
    type: "pulse" // set the wave type
  },
  envelope: {
    release: 0.07
  }
};

var triangleOptions = {
  oscillator: {
    type: "triangle"
  },
  envelope: {
    release: 0.07
  }
};

var squareOptions = {
  oscillator: {
    type: "square"
  },
  envelope: {
    release: 0.07
  }
};
