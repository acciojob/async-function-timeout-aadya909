function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessageAfterDelay() {
  const text = document.getElementById('text').value;
  const delayTime = Number(document.getElementById('delay').value);

  // Optional: Input validation
  if (!text || isNaN(delayTime) || delayTime < 0) {
    document.getElementById('output').textContent = "Please enter valid text and delay.";
    return;
  }

  // ✅ DO NOT modify output before delay
  await delay(delayTime);

  document.getElementById('output').textContent = text;
}

document.getElementById('btn').addEventListener('click', showMessageAfterDelay);


