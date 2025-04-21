// Function that returns a Promise which resolves after a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that handles showing the message
async function showMessageAfterDelay() {
  const text = document.getElementById('text').value;
  const delayTime = Number(document.getElementById('delay').value);

  // Optional: Input validation
  if (!text || isNaN(delayTime) || delayTime < 0) {
    document.getElementById('output').textContent = "Please enter valid text and delay.";
    return;
  }

  // Clear the output before delay
  document.getElementById('output').textContent = "Waiting...";

  // Wait for the specified delay
  await delay(delayTime);

  // Show the message after delay
  document.getElementById('output').textContent = text;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', showMessageAfterDelay);

