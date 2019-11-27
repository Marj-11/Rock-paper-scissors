function results(userChoice, compChoice, action) {
  let status = templates[action];
  if (action !== "draw") {
    scores[status.score]++;
    status.displayEl.innerHTML = scores[status.score];
  }
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  results_p.innerHTML = `${userChoice}${smallUserWord}. ${status.message[0]} ${compChoice}${smallcompWord}. ${status.message[1]}`;
  document.getElementById("userChoice").classList.add(status.styling);
  setTimeout(() => {
    document.getElementById("userChoice").classList.remove(status.styling);
  }, 800);
}
