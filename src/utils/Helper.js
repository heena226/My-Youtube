var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich',
    'Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey',   'Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy',
        'Girl','Vortex','Paradox'
];
    
export function generate() {
    // The function doesn't need to "return" anything. It just needs
    // to set the value of the text field to the random name.
    let result = nameList[Math.floor( Math.random() * nameList.length )];
    return result;
};

const positiveAff = [
        { "id": 1, "quote": "Interesting perspective." },
        { "id": 2, "quote": "This is a great post!" },
        { "id": 3, "quote": "I totally agree with this." },
        { "id": 4, "quote": "I learned something new today." },
        { "id": 5, "quote": "Thanks for sharing!" },
        { "id": 6, "quote": "This article is very insightful." },
        { "id": 7, "quote": "Your analysis is spot on." },
        { "id": 8, "quote": "I appreciate the depth of this post." },
        { "id": 9, "quote": "Fantastic read!" },
        { "id": 10, "quote": "Amazing insight!" },
        { "id": 11, "quote": "Well written article." },
        { "id": 12, "quote": "This is very informative." },
        { "id": 13, "quote": "I appreciate your thoughts on this." },
        { "id": 14, "quote": "This really resonates with me." },
        { "id": 15, "quote": "Great read!" },
        { "id": 16, "quote": "You made some excellent points." },
        { "id": 17, "quote": "I had never thought of it that way." },
        { "id": 18, "quote": "Thank you for the valuable information." },
        { "id": 19, "quote": "I enjoyed this post a lot." },
        { "id": 20, "quote": "This is very helpful, thank you." },
        { "id": 21, "quote": "I couldn't agree more." },
        { "id": 22, "quote": "Your perspective is quite unique." },
        { "id": 23, "quote": "This post was a real eye-opener." },
        { "id": 24, "quote": "I love this!" },
        { "id": 25, "quote": "Keep up the great work!" },
        { "id": 26, "quote": "I'm glad I read this." },
        { "id": 27, "quote": "This was very enlightening." },
        { "id": 28, "quote": "Very well explained." },
        { "id": 29, "quote": "I found this very useful." },
        { "id": 30, "quote": "This is spot on!" },
        { "id": 31, "quote": "You’ve articulated this perfectly." },
        { "id": 32, "quote": "This perspective is quite refreshing." },
        { "id": 33, "quote": "I learned a lot from this post." },
        { "id": 34, "quote": "This is incredibly well thought out." },
        { "id": 35, "quote": "Your writing style is very engaging." },
        { "id": 36, "quote": "I admire your viewpoint on this topic." },
        { "id": 37, "quote": "This was very well presented." },
        { "id": 38, "quote": "You’ve provided some great insights." },
        { "id": 39, "quote": "This post is extremely valuable." },
        { "id": 40, "quote": "I appreciate the clarity of your writing." }
];

export function newQuote() {
    var randomNumber = Math.floor(Math.random() * (positiveAff.length));
    return (positiveAff[randomNumber].quote);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  export function findNthPrime(n) {
    if (n <= 0) return null; // There is no 0th or negative prime number
  
    let count = 0;
    let num = 1;
  
    while (count < n) {
      num++;
      if (isPrime(num)) {
        count++;
      }
    }
    
    return num;
  }
  
  