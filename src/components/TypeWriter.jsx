import { useState, useEffect } from 'react';

export default function TypeWriter({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 50);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1em',
          background: 'linear-gradient(180deg, #00d4ff, #7c3aed)',
          marginLeft: '4px',
          animation: 'typewriter-cursor 0.8s ease-in-out infinite',
          verticalAlign: 'text-bottom',
        }}
      />
    </span>
  );
}
