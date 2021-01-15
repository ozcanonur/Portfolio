import { useState, useEffect } from 'react';

var wordInterval;
var currentWord = 0;
var words = [];
var wordArray = [];

export function startWords() {
  try {
    words = document.getElementsByClassName('word');

    currentWord = 0;
    wordArray = [];

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    changeWord();
    clearInterval(wordInterval);
    wordInterval = setInterval(changeWord, 4000);
  } catch (error) {}
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = 'letter in';
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerText;
  word.innerText = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerText = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
