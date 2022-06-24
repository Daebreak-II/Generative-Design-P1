const fillers = {
    /*
    adventurer: ["My dude", "Bro", "Adventurer", "Traveller", "Fellow", "Citizen", "Ashen One", "Dragonborn", "Cool person", "Tarnished", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
    item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    */
    describer: ["chipper", "dumb", "religious", "lazy", "energetic", "sadistic"],
    name: ["Dale", "Bob", "King Charls VII", "Larry", "Murder-Robot", "Richard", "Loony", "Chris"],
    place: ["Rocky Mountain", " Witchy Woods", "Creaky Canyon", "Bad Basin"],
    weather: ["bright", "clear", "foggy", "sunny", "cloudy", "rainy", "cold", "frosty"],
    thing: ["pocket knife", "ball of string", "survival book", "lighter", "pack of gum", "retainer", "pocket lint", "handheld axe", "deoderant"],
    type: ["throwing", "diving", "curling", "twirling", "skydiving"],
    tool: ["club", "stick", "spear", "axe", "gun", "attack helicopter", "knife", "grenade", "catapult", "flashlight"],
    creature: ["rabbit", "wolf", "capybarya", "donkey", "snake", "goose", "mountian lion", "tiger", "lizard", "bear", "skink", "beetle"],
    
  };
  
  /*
  const template = `$adventurer, heed my $message!
  
  I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.
  
  It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself!
  `;
  */

  const template = `One day, my $describer friend $name was going out for a hike at $place. It was a $weather and $weather day, but suddenly he realized that he was completely and utterly lost!

  Fortunately, they were prepared, and remembered the inscructions from the survival book they recently read.
  
  Using just a $thing and $thing in his pockets, they franticly crafted a $type-$tool, and used it to fend off a $creatureDescriber $creature!

  Shortly Afterwards, they were rescued, and recounted said tale to me. One-hundered percent true!
  
  `
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
