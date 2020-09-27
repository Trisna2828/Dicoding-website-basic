var quotes = ["Whatever the mind of man can conceive and believe, it can achieve.", 
"Strive not to be a success, but rather to be of value.", 
"I attribute my success to this: I never gave or took any excuse.", 
"You miss 100&#37; of the shots you don\'t take.", 
"I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.", 
"The most difficult thing is the decision to act, the rest is merely tenacity.", 
"Every strike brings me closer to the next home run.", 
"Definiteness of purpose is the starting point of all achievement.", 
"Life isn\'t about getting and having, it\'s about giving and being.", 
"Life is what happens to you while you\'re busy making other plans.", 
"We become what we think about.", 
"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", 
"Life is 10&#37; what happens to me and 90&#37; of how I react to it."]

var author = [
"Napoleon Hill",
"Albert Einstein",
"Florence Nightingale",
"Wayne Gretzky",
"Michael Jordan",
"Amelia Earhart",
"Babe Ruth",
"W. Clement Stone",
"Kevin Kruse",
"John Lennon",
"Earl Nightingale",
"Mark Twain",
"Charles Swindoll"
]

function newQuote() {

    var randomNum = Math.floor(Math.random() * (quotes.length));

    document.getElementById("quoteDisplay").innerHTML = "\" " + quotes[randomNum];
    document.getElementById("authorDisplay").innerHTML = author[randomNum];
};

