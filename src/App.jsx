import { useState, useEffect } from 'react';

const Sphinxster = () => {
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [riddleIndex, setRiddleIndex] = useState(0);
  const [availableRiddles, setAvailableRiddles] = useState([]);

  const allRiddles = [
    {
      question: "I'm the dividing line where two round friends meet. What am I?",
      answer: "buttcrack",
      hint: "Think of the central feature of your posterior"
    },
    {
      question: "What sits on four legs in the morning, on two legs during the day, and on three when dealing with hemorrhoids?",
      answer: "human",
      hint: "It's a play on the classic Sphinx riddle, but with a rear-end twist"
    },
    {
      question: "I'm the muscle that keeps things contained until the right moment. What am I?",
      answer: "sphincter",
      hint: "I'm the star of this app's name"
    },
    {
      question: "What has a bottom at the top?",
      answer: "legs",
      hint: "Think about your body parts and their orientation"
    },
    {
      question: "What do you call it when you sit on an ice cube?",
      answer: "polaroid",
      hint: "It sounds like a camera brand"
    },
    {
      question: "I'm soft but become firm when excited. I generate gas but can also contain it. What am I?",
      answer: "buttocks",
      hint: "The main focus of this quiz app"
    },
    {
      question: "What do you call a rear-end with no backyard?",
      answer: "nomansland",
      hint: "A play on words about territory"
    },
    {
      question: "I cushion your falls and support your tall stance. What am I?",
      answer: "gluteus maximus",
      hint: "The scientific name for your largest buttock muscle"
    },
    {
      question: "I'm the part where sitting and standing come together. What am I?",
      answer: "behind",
      hint: "Another word for your posterior"
    },
    {
      question: "What has cheeks but can't smile?",
      answer: "butt",
      hint: "These cheeks are below your back"
    },
    {
      question: "I'm round, yet I have a crack. What am I?",
      answer: "buttocks",
      hint: "Think about your sitting apparatus"
    },
    {
      question: "What do you call it when your posterior gets enlightened?",
      answer: "illuminated bottom",
      hint: "When light shines on this dark place"
    },
    {
      question: "What's the most honest part of the body?",
      answer: "behind",
      hint: "Because it never lies (lies/lays)"
    },
    {
      question: "I'm an ancient Greek letter and a key feature of your rear. What am I?",
      answer: "delta",
      hint: "Think about the triangular shape"
    },
    {
      question: "What do you call the space between sitting and standing?",
      answer: "backdoor",
      hint: "A euphemism for a specific anatomical feature"
    },
    {
      question: "I keep your pants up in more ways than one. What am I?",
      answer: "butt",
      hint: "Without this, your pants would fall down"
    },
    {
      question: "I'm the rear guard, always bringing up the behind. What am I?",
      answer: "caboose",
      hint: "A slang term for your posterior"
    },
    {
      question: "What goes in sitting and comes out standing?",
      answer: "flatulence",
      hint: "A gaseous release"
    },
    {
      question: "I'm the bell that doesn't ring but makes plenty of noise. What am I?",
      answer: "toot",
      hint: "A sound from your behind"
    },
    {
      question: "What's always at the end of the road?",
      answer: "bum",
      hint: "A British term for your behind"
    },
    {
      question: "I'm split but not broken. What am I?",
      answer: "rear end",
      hint: "Think about the natural division of this body part"
    },
    {
      question: "What has a crack but isn't damaged?",
      answer: "buttocks",
      hint: "A natural feature, not a flaw"
    },
    {
      question: "I'm the seat of all laughs. What am I?",
      answer: "bottom",
      hint: "Where whoopee cushions are placed"
    },
    {
      question: "What's the most musical part of the human body?",
      answer: "rear end",
      hint: "It can produce various sound effects"
    },
    {
      question: "I'm the cushion no furniture store sells. What am I?",
      answer: "bum",
      hint: "Your natural sitting pad"
    },
    {
      question: "What never sits in the front row?",
      answer: "backside",
      hint: "By definition, it's always in the back"
    },
    {
      question: "I'm behind in everything I do. What am I?",
      answer: "rear",
      hint: "A positional word with a double meaning"
    },
    {
      question: "What has a moon but isn't a planet?",
      answer: "butt",
      hint: "Think of 'mooning' someone"
    },
    {
      question: "I'm the final frontier of the digestive journey. What am I?",
      answer: "anus",
      hint: "Where waste exits the body"
    },
    {
      question: "What's always bringing up the rear?",
      answer: "buttocks",
      hint: "Literally the back part of your body"
    },
    {
      question: "I'm an exit that sometimes functions as an entrance. What am I?",
      answer: "rear passage",
      hint: "A euphemism for a specific body part"
    },
    {
      question: "What's the bottom line of the human body?",
      answer: "gluteal fold",
      hint: "Where your buttocks meet your thighs"
    },
    {
      question: "I'm a body part and a cigarette stub. What am I?",
      answer: "butt",
      hint: "Both meanings share the same spelling"
    },
    {
      question: "What body part can be both a cushion and a shock absorber?",
      answer: "backside",
      hint: "Helps soften your landing when you fall"
    },
    {
      question: "I'm the place where two halves become a hole. What am I?",
      answer: "buttcrack",
      hint: "A play on 'whole' vs 'hole'"
    },
    {
      question: "What has two mounds but isn't a burial ground?",
      answer: "posterior",
      hint: "Think about the shape of this body part"
    },
    {
      question: "I'm the foundation upon which you sit. What am I?",
      answer: "rear end",
      hint: "Your natural chair"
    },
    {
      question: "What gets spanked but isn't a child?",
      answer: "bottom",
      hint: "A form of adult punishment or play"
    },
    {
      question: "I can produce wind but I'm not a fan. What am I?",
      answer: "flatulent bottom",
      hint: "Think about gas production"
    },
    {
      question: "What muscle can both separate and eliminate?",
      answer: "sphincter",
      hint: "Controls the release of waste"
    },
    {
      question: "I'm the part that gets left behind. What am I?",
      answer: "derriere",
      hint: "A French term for your posterior"
    },
    {
      question: "What's always at the tail end of things?",
      answer: "rump",
      hint: "A term used for animals and humans alike"
    },
    {
      question: "I'm where many jokes end. What am I?",
      answer: "butt",
      hint: "The butt of many jokes"
    },
    {
      question: "What has cheeks but can't talk?",
      answer: "bottom",
      hint: "These cheeks don't have a mouth"
    },
    {
      question: "I'm a body part and what pirates search for. What am I?",
      answer: "booty",
      hint: "Slang for your behind and also treasure"
    },
    {
      question: "What do you call a donkey's rear end and your own?",
      answer: "ass",
      hint: "A dual-meaning word"
    },
    {
      question: "I'm the creator of rude noises. What am I?",
      answer: "posterior",
      hint: "Think about certain bodily functions"
    },
    {
      question: "What do you sit on but never take with you?",
      answer: "toilet seat",
      hint: "Related to bathroom functions"
    },
    {
      question: "I'm the curve that divides the back from the legs. What am I?",
      answer: "gluteal fold",
      hint: "The anatomical term for this juncture"
    },
    {
      question: "What's got a hole but isn't hungry?",
      answer: "anus",
      hint: "An exit, not an entrance for food"
    },
    {
      question: "I'm the most backward part of you. What am I?",
      answer: "posterior",
      hint: "It's literally behind you"
    },
    {
      question: "What has a crack that plumbers can't fix?",
      answer: "buttcrack",
      hint: "Not a problem in your bathroom's pipes"
    },
    {
      question: "I'm where sitting meets standing. What am I?",
      answer: "rear",
      hint: "The transition point when you get up"
    },
    {
      question: "What gets bigger when you sit down?",
      answer: "behind",
      hint: "It spreads out to support your weight"
    },
    {
      question: "I'm the muscle that keeps secrets contained. What am I?",
      answer: "sphincter",
      hint: "Controls the release of certain bodily functions"
    },
    {
      question: "What's always at the end of your spine?",
      answer: "tailbone",
      hint: "The coccyx is its scientific name"
    }
  ];

  useEffect(() => {
    // Initialize available riddles with randomized order
    const shuffled = [...allRiddles].sort(() => 0.5 - Math.random());
    setAvailableRiddles(shuffled);
  }, []);

  useEffect(() => {
    if (availableRiddles.length > 0) {
      setCurrentRiddle(availableRiddles[riddleIndex % availableRiddles.length]);
      setUserAnswer('');
      setFeedback('');
      setShowAnswer(false);
    }
  }, [riddleIndex, availableRiddles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = currentRiddle.answer.toLowerCase();
    
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setFeedback('Correct! Your posterior knowledge is impressive!');
      setScore(prevScore => prevScore + 1);
    } else {
      setFeedback('Sorry, that\'s not right. Try again or check the hint!');
    }
  };

  const nextRiddle = () => {
    setRiddleIndex(prevIndex => prevIndex + 1);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
    setFeedback(`The answer is: ${currentRiddle.answer}`);
  };

  const giveHint = () => {
    setFeedback(`Hint: ${currentRiddle.hint}`);
  };

  const shuffleRiddles = () => {
    const shuffled = [...allRiddles].sort(() => 0.5 - Math.random());
    setAvailableRiddles(shuffled);
    setRiddleIndex(0); // Reset to the first riddle in the new shuffled array
  };

  if (!currentRiddle) {
    return <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">Loading riddles...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Sphinxster</h1>
        <p className="text-xl text-gray-400">The Bottom Line in Riddles</p>
      </header>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full">
        {currentRiddle && (
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Riddle #{(riddleIndex % availableRiddles.length) + 1} of {availableRiddles.length}</h2>
              <p className="text-lg">{currentRiddle.question}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Your answer..."
                  className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>
              
              <div className="flex justify-between gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={giveHint}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Hint
                </button>
              </div>
            </form>
            
            {feedback && (
              <div className={`p-3 rounded-md ${feedback.includes('Correct') ? 'bg-green-800' : (feedback.includes('Hint') ? 'bg-blue-800' : 'bg-red-800')}`}>
                {feedback}
              </div>
            )}
            
            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={revealAnswer}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Reveal Answer
              </button>
              <button
                onClick={nextRiddle}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Next Riddle
              </button>
            </div>
            
            <button
              onClick={shuffleRiddles}
              className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Shuffle All Riddles
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <p className="text-xl">Current Score: <span className="text-purple-400 font-bold">{score}</span></p>
      </div>
      
      <footer className="mt-8 text-gray-500 text-center">
        <p>Sphinxster: Where the Sphinx meets the Sphincter</p>
        <p className="text-sm">Test your knowledge of posterior puzzles!</p>
      </footer>
    </div>
  );
};

export default Sphinxster;