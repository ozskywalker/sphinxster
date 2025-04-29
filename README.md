# Sphinx-ster 🧠🍑

Where Sphinx meets Sphincter - The Bottom Line in Riddles

[![Screenshot](img/index_screenshot.png)](https://lwalker.me/sphinxster/index.html)

Ever thought the ancient Sphinx's riddles needed more posterior humor? Neither did we, until now! 

Sphinx-ster is what happens when you combine riddles with rear-end jokes - a truly cheeky experiment that proves even AI can have a sense of humor that falls flat.

**WARNING**: This app contains rear-end humor that might cause you to:
- Snicker inappropriately
- Question your life choices
- Learn more about gluteal anatomy than you ever wanted to

## Features

- 50+ posterior-themed riddles that will test your derrière deduction skills
- Score tracking to show off your bottom-line brilliance
- Hint system for when you're feeling behind
- Shuffle feature to keep your cheeks guessing

## Disclaimer

This project is not intended to be taken seriously. It was part of an AI code generation experiment and is meant purely for light posterior amusement. If you're offended by butt jokes, this probably isn't for you. If you're not offended by butt jokes, you should probably still question your life choices.

## Contributing

Please don't. We've embarrassed ourselves enough already.

## Development

```bash
# Clone the repo (if you really must)
git clone https://github.com/ozskywalker/sphinxster.git

# Install dependencies
npm install

# Run locally (at your own risk)
npm run dev
```

## Deployment

1. `npm build`
2. `cd dist/`
3. `aws s3 sync . s3://<s3bucket_of_choice>/sphinxster/`

*Note: Subdirectory is defined via `.env` & `vite.config.js`*

## Tech Stack

- Claude 3.7 Sonnet (AI assistant with questionable training data to generate this)
- React (for rendering dad jokes as components)
- Vite (because this app needed to be built quickly before anyone came to their senses)
- TailwindCSS (making buttcracks look stylish since 2023)

## AI: Prompts used to develop this

<details>
<summary>If there was an app called Sphinx-ster, what would it do?</summary>
<pre>
Based on the name "Sphinx-ster," I'd imagine it would be an application that combines the mysterious, enigmatic qualities of the Sphinx (the mythological creature known for asking riddles) with a modern social or utility platform. My best guess is that Sphinx-ster would be an app that generates and manages riddles, puzzles, or brain teasers. It might:

- Create personalized riddles based on difficulty preferences
- Allow users to challenge friends with custom-made puzzles
- Track solving statistics and maintain leaderboards
- Provide hints for particularly difficult challenges
- Feature themed puzzle collections (historical, mathematical, linguistic)

The "-ster" suffix suggests a social or community element, similar to how it's used in platforms like Napster (music sharing) or Friendster (early social networking). So Sphinx-ster might include features for sharing riddles with friends, competing in puzzle-solving tournaments, or collaboratively working on complex puzzles.

Would you like me to explore any particular aspect of this hypothetical app in more detail?
</pre></details>


<details>
<summary>Create a simple React app called "Sphinx-ster" that tests the user with riddles and quizzes about butts, because "sphincster", get it? Make it dark mode.</summary>
<pre>
I've created a dark-themed React app called "Sphinx-ster" that features riddles and quizzes with a humorous posterior theme. The app includes:

A purple and dark gray color scheme for the dark mode aesthetic
Six butt-themed riddles with answers and hints
A scoring system to track correct answers
Features to reveal answers, get hints, and navigate between riddles
Feedback messages that respond to user answers

The app name "Sphinx-ster" works perfectly with the pun on "sphincter" while maintaining the riddle-asking theme of the mythical Sphinx.
You can interact with the app by:

Typing your answers in the input field
Clicking "Submit" to check your answer
Using "Hint" when you're stuck
Clicking "Reveal Answer" if you give up
Moving to the next riddle with the "Next Riddle" button

The app keeps track of your score as you progress through the riddles. Would you like me to make any adjustments to the design or functionality?
</pre>
</details>


<details>
<summary>Come up with another 50 riddles, and make sure the riddle selection is randomized</summary>
<pre>
I'll update the Sphinxster app with 50 more butt-themed riddles and make sure the selection is randomized. Here's the updated component:

I've completely updated the Sphinxster app with 50+ butt-themed riddles and implemented randomization. Here are the key changes:

Added 50 creative and humorous butt-themed riddles (for a total of 56)
Implemented randomization in two ways:

On initial load, all riddles are shuffled using the sort(() => 0.5 - Math.random()) method
Added a "Shuffle All Riddles" button that lets users re-randomize the order at any time


Made some UI improvements:

- Added a counter showing which riddle number you're on out of the total
- Color-coded feedback messages (green for correct, red for incorrect, blue for hints)
- Made the hint system more visible
- Added loading state for when the riddles are being initialized

The randomization works by:

1. Storing all riddles in an allRiddles array
2. Creating a shuffled copy in availableRiddles state
3. Tracking the current position with riddleIndex
4. Using modulo arithmetic (riddleIndex % availableRiddles.length) to cycle through all riddles

This approach ensures you'll see all riddles before any repeats, and the shuffle button gives you a completely new random order whenever you want.
</pre>
</details>

### AI: Notes & What could I have done better?

- **Knowing your tools matters:** I'm not a FE developer, however if I'd known CRA was dead then specifically asking for a Tailwind & Vite specific React app would have really helped. It took ~10min for AI to build the app right (2-3 prompts), and 40min to get a working build outside of Claude due to fighting CRA + Tailwind before discarding CRA & starting afresh with Vite. Writing solid requirements matters, even if this is a sub-1hr throwaway project.

- **Don't take life too seriously:** I built this on a whim to help amuse a friend who came up with the idea. They were having a rough day, and this was a great way to build something quickly and take their mind off things. Fun exercise, happy with the result, and I hope it'll bring a smile to the 1-2 people that discover this repo.

Go have fun, text/call your friends, make sure they're doing OK -- then make sure you're taking care of yourself also.

## License

This project is licensed under the "Please Don't Judge Us" License.

---

*Remember: What happens in Sphinx-ster, stays in Sphinx-ster. Just like food in your digestive tract... until it doesn't.*
