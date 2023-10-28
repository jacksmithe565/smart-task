/**
 * Filename: ComplexProgram.js
 * 
 * Description: This complex JavaScript program performs an advanced mathematical operation known as Fourier Transform.
 * The program takes an input signal and transforms it from the time domain into the frequency domain using the Discrete 
 * Fourier Transform algorithm. It then calculates the magnitude spectrum and phase spectrum of the transformed signal.
 * The program is implemented using various functions, including discrete Fourier transform, magnitude and phase spectrum
 * calculation, and utility functions for complex number arithmetic.
 */

// Function to calculate the Discrete Fourier Transform
function discreteFourierTransform(signal) {
  // Calculate the number of samples in the signal
  const N = signal.length;
  
  // Create arrays to hold the real and imaginary parts of the transformed signal
  const real = new Array(N).fill(0);
  const imaginary = new Array(N).fill(0);
  
  // Iterate over each frequency bin
  for (let k = 0; k < N; k++) {
    // Iterate over each sample in the signal
    for (let n = 0; n < N; n++) {
      // Calculate the complex exponential term
      const exponential = complexExponential(-((2 * Math.PI) / N) * k * n);
      
      // Add the current sample multiplied by the complex exponential to the real and imaginary parts
      real[k] += signal[n] * exponential.real;
      imaginary[k] += signal[n] * exponential.im;
    }
  }
  
  // Return the transformed signal
  return { real, imaginary };
}

// Function to calculate the magnitude spectrum of a complex signal
function calculateMagnitudeSpectrum(real, imaginary) {
  // Create an array to hold the magnitude values
  const magnitude = new Array(real.length).fill(0);
  
  // Iterate over each element in the complex signal
  for (let i = 0; i < magnitude.length; i++) {
    // Calculate the magnitude using Pythagorean theorem
    magnitude[i] = Math.sqrt(real[i] ** 2 + imaginary[i] ** 2);
  }
  
  // Return the magnitude spectrum
  return magnitude;
}

// Function to calculate the phase spectrum of a complex signal
function calculatePhaseSpectrum(real, imaginary) {
  // Create an array to hold the phase values
  const phase = new Array(real.length).fill(0);
  
  // Iterate over each element in the complex signal
  for (let i = 0; i < phase.length; i++) {
    // Calculate the phase using the arctangent function
    phase[i] = Math.atan2(imaginary[i], real[i]);
  }
  
  // Return the phase spectrum
  return phase;
}

// Function to calculate the complex exponential
function complexExponential(theta) {
  return {
    real: Math.cos(theta),
    im: Math.sin(theta)
  };
}

// Test signal data
const signal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Perform the Discrete Fourier Transform
const { real, imaginary } = discreteFourierTransform(signal);

// Calculate the magnitude spectrum
const magnitude = calculateMagnitudeSpectrum(real, imaginary);

// Calculate the phase spectrum
const phase = calculatePhaseSpectrum(real, imaginary);

// Print the magnitude spectrum
console.log("Magnitude Spectrum:");
console.log(magnitude);

// Print the phase spectrum
console.log("Phase Spectrum:");
console.log(phase);
