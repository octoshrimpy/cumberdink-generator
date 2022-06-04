$(document).ready(function()
{ 
  
  // 1/2 of first name
  let first_array = [
    'bene',
    'bumble',
    'humble',
    'bendy',
    'bulba',
    'blender',
    'billiard',
    'bumber',
    'bomba',
    'bandi',
    'bander',
    'beezle',
    'boiler',
    'beetle',
    'bangle',
    'bumber',
    'bucko',
    'butter',
    'burger',
    'bingo',
    'bundle',
    'bottle',
    'brittle',
    'blinky',
    'bloopa',
    'bucky',
    'barnold',
    'blubber',
    'booby',
    'bunsen',
    'baby',
    'bio',
    'buddy',
    'boulder',
    'banjo',
    'boundless',
    'broken',
    'bucket',
    'booger',
    'beaver',
    'bubble',
    'bacon',
    'biscuit',
    'baggage',
    'billboard',
    'bagel',
    'bedtime',
    'bowtie',
    'banquet',
    'buzzard',
    'basket',
    'bowling',
    'bunny',
    'bandage',
    'backpack-',
    'bathtub-',
    'brindle',
    'bagger',
    'boycott-',
    'bengal',
    'barbell-',
    'bigfoot-',
    'beacon',
    'bubbly',
    'bedrock',
    'boolean',
    'blubber',
    'blackboard',
    'breezy',
    'bookshelf-',
    'billion-',
    'bombshell'
  ];

  // 1/2 of last name 
  let last_array = [
    'custard',
    'carrot',
    'coochie',
    'camel',
    'coggle',
    'crimpy',
    'clari',
    'crumple',
    'cumber',
    'contra',
    'clomby',
    'cracker',
    'curdle',
    'candy',
    'candle',
    'country',
    'copper',
    'crumble',
    'crumper',
    'cutie',
    'custard',
    'candy',
    'cookie',
    'captain',
    'clever',
    'coffee',
    'corner',
    'center',
    'cabbage',
    'cuddle',
    'cancer',
    'common',
    'chewy',
    'copter',
    'captive',
    'curtain',
    'crimson',
    'closet',
    'clueless',
    'casket',
    'cracker',
    'catchphrase',
    'cobble',
    'chubby',
    'cosmic',
    'compass',
    'classroom',
    'crochet',
    'cowlick',
    'crispy',
    'colored',
    'cleaver',
    'cavern',
    'cedar',
    'cello',
    'crusty',
    'cargo',
    'crumpet',
    'cookbook',
    'crackle',
    'camel',
    'clorox',
    'cranky',
    'catnip',
    'cognac',
    'chronic',
    'curving',
    'custom',
    'cornbread',
    'coolant',
    'cobble',
    'carpet',
    'chloride'
  ];
  
// 2/2 of first & last name
  let ending_array = [
    'stick',
    'side',
    'cheese',
    'paint',
    'face',
    'gram',
    'dong',
    'coot',
    'dick',
    'dink',
    'tort',
    'toot',
    'ball',
    'buck',
    'dang',
    'bee',
    'snatch',
    'snout',
    'sprout',
    'rash',
    'bench',
    'cup',
    'blunt',
    'bundt',
    'buns',
    'stunts',
    'brunch',
    'fork',
    'dict',
    'batch',
    'clap',
    'clam',
    'plate',
    'live',
    'love',
    'world',
    'heart',
    'ness',
    'ring',
    'fish',
    'wolf',
    'king',
    'tree',
    'mouth',
    'snitch',
    'dream',
    'rain',
    'cake',
    'ash',
    'land',
    'house',
    'pie',
    'bean',
    'cough',
    'face',
    'pear',
    'ham',
    'truck',
    'voice',
    'loaf',
    'bread',
    'bay',
    'toes',
    'cross',
    'socks',
    'eyes',
    'boat'
  ];  
  
// declare empty previous to ensure max randomness
  let previous = {
    first: ' ',
    last: ' ',
    firstEnding: ' ',
    lastEnding: ' '
  };
  
  // find first name that doesn't match previous names
  function findFirst(previous){
    
    let part1 = previous.first;
    do {
      part1 = first_array[Math.floor(Math.random() * first_array.length)];
    }
    while(part1 === previous.first)
    
    let part2 = previous.firstEnding;
    do {
      part2 = ending_array[Math.floor(Math.random() * ending_array.length)];  
    }
    while( 
      part2 === previous.firstEnding || 
      part2 === previous.lastEnding 
    )
    
    return { 
      firstName: part1.concat(part2), 
      first: part1,
      ending: part2
    };
  }

  // find last name that doesn't match previous names
  function findLast(previous, ending){
    
    let part1 = previous.last;
    do {
      part1 = last_array[Math.floor(Math.random() * last_array.length)];  
    }
    while(part1 === previous.last)
    
    let part2 = ending;
    do {
      part2 = ending_array[Math.floor(Math.random() * ending_array.length)];
    }
    while( 
      part2 === ending || 
      part2 === previous.firstEnding || 
      part2 === previous.lastEnding
    )
    
    return {
      lastName: part1.concat(part2),
      last: part1,
      ending: part2
    }
  }
  
  // set DOM elements with name  
  function setName(firstName, lastName){
    $('.first').text(firstName);
    $('.last').text(lastName);
  }
  
  // run sub-functions to find new name based on previous name (ensure randomness)
  function pickName(previous){
  
    let first = findFirst(previous);  
    let firstName = first.firstName;
    
    let last = findLast(previous, first.ending);
    let lastName = last.lastName;
    
    setName(firstName, lastName);
    
    previous.first = first.first;
    previous.last = last.last;
    previous.firstEnding = first.ending;
    previous.lastEnding = last.ending;
  }

  // detect click logic
  $('.button').click(function(){
    pickName(previous);
  });
  
  //run on document ready
  pickName(previous);
});