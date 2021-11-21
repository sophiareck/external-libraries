var preline1;
var line1;
var preline2;
var line2;
var preline3;
var line3;
var preline4;
var line4;
var preline5;
var line5; //variables for lines pre and post adding rhyme

class Limerick {
  constructor() {
    preline1 = RiTa.grammar(); //adding rules for each line
    preline1.addRules(rules1);
    preline2 = RiTa.grammar();
    preline2.addRules(rules2);
    preline3 = RiTa.grammar();
    preline3.addRules(rules3);
    preline4 = RiTa.grammar();
    preline4.addRules(rules4);
    preline5 = RiTa.grammar();
    preline5.addRules(rules5);

    this.rhymeA = RiTa.randomWord({ //first rhyme
      numSyllables: 1,
      pos: "nns", //must be a noun
      type: "stresses"
    });
    this.rhymeA1 = RiTa.rhymes(this.rhymeA, { //noun that rhymes with rhymeA
      numSyllables: 1,
      pos: "nns",
      limit: 1
    });
    this.rhymeB = RiTa.randomWord({ //second rhyme
      pos: "jj", //must be an adjective
      numSyllables: 2
    });
    this.rhymeB1 = RiTa.rhymes(this.rhymeB, { //must rhyme with rhymeB
      limit: 1,
      numSyllables: 2
    });
    this.rhymeA2 = RiTa.rhymes(this.rhymeA, { //noun that rhymes with rhymeA
      pos: "nns",
      limit: 1
    });
  }
  display() { //actually puts poem together and returns it
    line1 = preline1.expand() + this.rhymeA + ","; //add rhymes onto lines
    line2 = preline2.expand() + this.rhymeA1 + ".";
    line3 = preline3.expand() + this.rhymeB + ",";
    line4 = preline4.expand() + "'" + this.rhymeB1 + "!'";
    line5 = preline5.expand() + this.rhymeA2 + ".";
    return line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5; //format poem
  }
}

function setup() {
  rules1 = { //pattern for line1
    start: "There is $adjective.art() $subject who $verb1 ",
    adjective: RiTa.randomWord({ //random adjective
      numSyllables: 1,
      pos: "jj",
      type: "stresses"
    }),
    subject: "man | boy | girl | gal | dog | cat | fish", //randomly chooses from list
    verb1: "loves | hates | likes | wants"
  };
  rules2 = { //pattern for line2
    start: "and $verb2 when they see $adjective2 ",
    verb2: RiTa.randomWord({
      numSyllables: 1, //random verb
      pos: "vbz",
      type: "stresses"
    }),
    adjective2: RiTa.randomWord({
      numSyllables: 1,
      pos: "jj",
      type: "stresses"
    })
  }
  rules3 = { //pattern for line3
    start: "One $time they felt ",
    time: "week | day | month | year | time"
  }
  rules4 = { //pattern for line4
    start: "and $adverb said ", //random adverb
    adverb: RiTa.randomWord({
      pos: "rb",
      numSyllables: 2
    })
  }
  rules5 = { //pattern for line5
    start: "confusing their $adjective5 ",
    $adjective5: RiTa.randomWord({
      numSyllables: 2,
      pos: "jj",
    })
  }

  textAlign(CENTER, CENTER); //formatting
  createCanvas(500, 500);
  fill(255);
  textSize(22);
  background(0);

  button = createButton("Generate a Random Limerick"); //button to make limericks
  button.position(100, 450);
  button.style('fontSize', '15pt');
  button.mousePressed(createLimerick) //go to createLimerick function
}

function createLimerick() {
  background(0); //clear background
  let poem = new Limerick(); //make a new limerick
  text(poem.display(), width / 2, height / 2); //show new limerick
}
