function rand(seed) {
  return Math.floor(Math.random()*seed);
}

function rand_time(seed_time, range) {
  return seed_time + rand(range);
}

function rand_rating() {
  return (1 + rand(4));
}

Time = {};
Time.now = 123123;

Movies = [ 
  {id: 12, title: "The Artist", showtime: rand_time(Time.now, 3600*24*7),rating: rand_rating(),
    description: "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.", 
    genres: ["Drama", "Comedy"],
    director: "Michel Hazanavicius", year: 2009},

  {
    id: 5,
    genres: ["Drama", "Action"],
    title: "Taxi Driver", showtime: rand_time(Time.now, 3600*24*7), rating: rand_rating(),
  description: "The film is set in New York, shortly after the end of the Vietnam War.  Travis Bickle, a lonely and mentally unstable veteran starts working as a taxi driver, joining the murky city night life.", director: "Martin Scorsese", year: 1974 },

  { title: "La Dolce Vita", showtime: rand_time(Time.now, 3600*24*7), rating: rand_rating(),
    id: 7,
    genres: ["Drama"],
    description: "The film is a story of a passive journalist's week in Rome, and his search for both happiness and love that will never come.", 
    director: "Federico Fellini", year: 1960
},

  {title: "Pirates of the Caribbean: At World's End",
showtime: rand_time(Time.now, 3600*24*7),rating: rand_rating(),
    id: 3,
    director: "Gore Verbinski",
    year: 2007,
    genres: ["Action", "Adventure", "Fantasy"],
    description: "To control the oceans, Lord Cutler Beckett kills anyone associated with piracy and uses Davy Jones to destroy all pirate ships on the seas. Condemned prisoners sing 'Hoist the Colours' to compel the nine pirate lords to convene at Shipwreck Cove; however, the late Captain Jack Sparrow, pirate lord of the Caribbean, never appointed a successor. Captain Barbossa leads Will, Elizabeth, Tia Dalma and the crew of the Black Pearl to rescue Jack from Davy Jones's Locker..", 
    length: 169},


    {title: "Harry Potter and the Order of the Phoenix",showtime: rand_time(Time.now, 3600*24*7),rating: rand_rating(),
      id: 4,
      director: "David Yates",
      year: 2007,
      genres: ["Adventure", "Family", "Fantasy"],
      description: "The Order of the Phoenix, a secret organisation founded by Albus Dumbledore, inform the now 15-year-old Harry Potter that the Ministry of Magic is in denial of Lord Voldemort's return; under the Ministry's influence, The Daily Prophet has launched a smear campaign against Harry and Dumbledore due to Harry's supposed encounter with Voldemort at the end of the previous year. This encounter has had a huge psychological effect on Harry – he has nightmares not only about what happened in the graveyard but also about the Department of Mysteries at the Ministry of Magic. While at the Order's headquarters, 12 Grimmauld Place, Harry's godfather, Sirius Black, mentions that Voldemort is after an object which he didn't have last time.", 
      length: 138
},

  { id: 1,showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
    title: "Spider-Man 3",
    director: "Sam Raimi",
    year: 2007,
    genres: ["Adventure", "Family", "Fantasy"],
    description: "Peter Parker plans to propose to Mary Jane Watson, who has just made her Broadway musical debut. A meteorite crashes near the two in Central Park, and an extraterrestrial symbiote attaches itself to Peter's moped. While fleeing police, escaped prisoner Flint Marko falls into a particle accelerator that fuses his body with surrounding sand and allows him to shapeshift at will as the Sandman. Peter's best friend, Harry Osborn, who knows Peter is Spider-Man and holds him responsible for his father's death, attacks Peter using weapons based on his father's Green Goblin technology. Harry injures his head and suffers from partial amnesia, making him forget his revenge and that Peter is Spider-Man.",
    length: 139},

    {title: "The Dark Knight",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
      id: 6,
      director: "Christopher Nolan",
      year: 2008,
      genres: ["Action", "Crime", "Drama"],
      description: "In Gotham City, The Joker and his accomplices rob a mob-owned bank. The accomplices kill each other off one by one in a sequence masterminded by the Joker, who escapes alone with all the money.Batman and Lt. Jim Gordon decide to include the new district attorney, Harvey Dent, in their plan to eradicate the mob. Although Dent is dating Rachel Dawes, Bruce Wayne is impressed with his idealism and offers to throw him a fundraiser. Mob bosses Sal Maroni, Gambol, and The Chechen hold a videoconference with Lau, a Chinese accountant who has hidden their funds and fled to Hong Kong. The Joker interrupts the meeting, warning that Batman is unhindered by jurisdiction. He offers to kill Batman for half their money, but the mob bosses refuse, and Gambol puts a bounty on him. The Joker kills Gambol and takes control of his men. Batman captures Lau and delivers him back to Gotham to testify against the Joker and the mob.				",
      length: 152},

      {title: "Indiana Jones and the Kingdom of the Crystal Skull",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(4) + 1),
        id: 2,
        director: "Steven Spielberg",
        year: 2008,
        genres: ["Action", "Adventure"],
        description: "In 1957 during the Cold War, World War II veteran Indiana Jones and his partner George 'Mac' McHale are kidnapped by a group of Soviet agents led by Colonel Dr. Irina Spalko. The Soviets infiltrate a warehouse labeled 'Warehouse 51' in Nevada and force Jones to find a crate containing a corpse that was recovered from a crash ten years earlier near Roswell, New Mexico. After finding the crate, with its highly magnetic contents, Mac, bribed by the Soviets, double-crosses Jones. After a running battle with the Soviets, Indiana manages to escape on a rocket sled into the desert; he stumbles into a deserted town, part of a nuclear test site and survives a nuclear detonation by hiding in a lead-lined refrigerator. After the blast, Indiana Jones is found and arrested. He informs the government that the crate was stolen by the Soviets but is later debriefed by the Federal Bureau of Investigation, who believe he's also working for the Soviets like Mac, but Indiana is defended by an old friend who also worked with him in the army.				",
        length: 122},

        {
  id: 8,
  title: "Quantum of Solace",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(4) + 1),
  director: "Marc Forster",
  year: 2008,
  genres: ["Action", "Adventure", "Crime"],
  description: "James Bond is driving from Lago di Garda to Siena, Italy, with the captured Mr. White in the boot of his car. After evading pursuers, Bond and M interrogate White regarding his organisation, Quantum. M's bodyguard, Mitchell, a double agent, attacks M, enabling White to escape. Bond chases Mitchell and kills him. Bond and M return to London and search Mitchell's flat, discovering through tagged banknotes that Mitchell had a contact in Haiti. Bond tracks the contact, Edmund Slate, and learns that Slate is a hitman sent to kill Camille Montes at the behest of her lover, environmentalist Dominic Greene. While observing her subsequent meeting with Greene, Bond learns that Greene is helping an exiled Bolivian General, Medrano—who murdered Camille's family—to overthrow his government in exchange for a seemingly barren piece of desert.",
  length: 106
},

  {
  id: 9,showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  title: "Avatar",
  director: "James Cameron",
  year: 2009,
  genres: ["Action", "Adventure", "Fantasy"],
  description: "By 2154, humans have severely depleted Earth's natural resources. The Resources Development Administration (RDA) mines for a valuable mineral – unobtanium – on Pandora, a densely forested habitable moon orbiting the gas giant Polyphemus in the Alpha Centauri star system. Pandora, whose atmosphere is poisonous to humans, is inhabited by the Navi, 10-foot tall (3.0 m), blue-skinned, sapient humanoids[34] who live in harmony with nature and worship a mother goddess called Eywa. To explore Pandora's biosphere, scientists use Na'vi-human hybrids called 'avatars', operated by genetically matched humans; Jake Sully (Sam Worthington), a paraplegic former marine, replaces his deceased twin brother as an operator of one. Dr. Grace Augustine (Sigourney Weaver), head of the Avatar Program, considers Sully an inadequate replacement but accepts his assignment as a bodyguard. While protecting the avatars of Grace and scientist Norm Spellman (Joel David Moore) as they collect biological data, Jake's avatar is attacked by a thanator and flees into the forest, where he is rescued by Neytiri (Zoe Saldana), a female Na'vi. Witnessing an auspicious sign, she takes him to her clan, whereupon Neytiri's mother Mo'at (C. C. H. Pounder), the clan's spiritual leader, orders her daughter to initiate Jake into their society.",
length: 162,
},

{
  title: "Ice Age: Dawn of the Dinosaurs",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 10,
  director: "Carlos Saldanha",
  year: 2009,
  genres: ["Animation", "Action", "Adventure"],
  description: "Ellie (Queen Latifah) and Manny (Ray Romano) are expecting their first child, and Manny is nervously obsessed with making life perfect and safe for Ellie, until the baby's born, since his first experiences as a husband and father went bad when his family was killed by hunters. At the same time, Diego (Denis Leary) finds himself unable to catch a cocky gazelle (Bill Hader) he has been stalking and decides to leave the herd, believing that he is losing his predatory nature as a tiger. Sid (John Leguizamo) grows jealous of Manny and Ellie and 'adopts' three apparently abandoned eggs that he finds in an icy underground cavern and call them Eggbert, Shelly, and Yoko. Manny tells him to put them back (saying Sid would never make a good parent, saying, 'First sign: Stealing someone else's eggs. Second sign: One of them almost became an omelette.'), but Sid instead looks after the eggs, which hatch into baby Tyrannosaurus triplets the next morning.				",
  length: 94,
},


{title: "Toy Story 3",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 11,
  director: "Ron Howard",
  year: 2010,
  genres: ["Animation", "Adventure", "Comedy"],
  description: "Andy, now nearly 18 years old, is leaving for college, and his toys have not been played with in years. Andy decides to take Woody with him to college and puts Buzz Lightyear and the rest of the toys in a trash bag for storage in the attic. Andy's mother mistakes the bag for garbage and puts it on the curb. The toys escape and, believing Andy intended to throw them away, decide to climb in a donation box bound for Sunnyside Daycare. Woody follows the other toys and tries to explain that they were thrown out by mistake, but they refuse to believe him.			",
  length: 103,
},

{
  title: "Inception",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 0,
  director: "Christopher Nolan",
  year: 2010,
  genres: ["Action", "Adventure", "Mystery"],
  description: "Dominick Cobb (Leonardo DiCaprio) and business partner Arthur (Joseph Gordon-Levitt) perform corporate espionage using an experimental military technology to infiltrate the subconscious of their targets and extract information while dreaming. Their latest target is Japanese businessman Saito (Ken Watanabe). Tiered 'dream within a dream' strategies are used and dreamers awaken by a 'kick' such as dying in the dream or falling. If the dreamer is the one who awakens, the dream 'collapses'. Each 'extractor' carries a totem, a small object whose behavior only its owner can predict, used to determine whether a dreamer is in someone else's dream. Cobb's totem is implied to be a spinning top that spins perpetually in the dream state. The extraction fails when sabotaged by a memory of Cobb's deceased wife Mal (Marion Cotillard). Saito reveals, after Cobb's and Arthur's associate sells them out, that he was actually auditioning the team to perform the difficult act of 'inception': planting an idea in a person's subconscious while they sleep. ",
  length: 148,
},

{
  title: "The Twilight Saga: Eclipse",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 13,
  director: "David Slade",
  year: 2010,
  genres: ["Adventure", "Drama", "Fantasy"],
  description: "In Seattle, not far from Forks, Victoria (Bryce Dallas Howard) attacks and bites Riley Biers (Xavier Samuel), in order to begin creating an army of newborns with him. Back in Forks, Edward Cullen (Robert Pattinson) and Bella Swan (Kristen Stewart) discuss the complications of becoming an immortal vampire. At 18 years old, one year older than the age Edward was when he became a vampire, Bella expresses her aversion to the idea of marrying so young, though Edward refuses to turn her into a vampire until they are married, his argument that she should have various human experiences she would otherwise miss. While Charlie Swan (Billy Burke) investigates the disappearance of Riley Biers, Edward suspects his disappearance was caused by the newborn vampires. Furthering his suspicions is Riley's intrusion into Bella's room.			",
  length: 124,
},

{
  title: "Mission: Impossible – Ghost Protocol",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 14,
  director: "Brad Bird",
  year: 2011,
  genres: ["Action", "Thriller"],
  description: "In Budapest to intercept a courier working for a person code-named 'Cobalt', IMF agent Trevor Hanaway is killed by assassin Sabine Moreau. Hanaway's team leader, Jane Carter, and newly promoted field agent Benji Dunn extract Ethan Hunt and Ethan's source, Bogdan, from a Moscow prison. Ethan is recruited to lead Jane and Benji to infiltrate secret Moscow Kremlin archives and locate files identifying Cobalt. During the mission, someone broadcasts across the IMF frequency, alerting the Russians to Ethan's team. Although Benji and Jane escape, a bomb destroys the Kremlin and Russian agent Sidorov arrests Ethan, suspecting him as a key player in the attack.			",
  length: 132
},


  {
  title: "X-Men: First Class",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 15,
  director: "Matthew Vaughn",
  year: 2011,
  genres: ["Action", "Adventure", "Sci-Fi"],
  description: "In a concentration camp in occupied Poland in 1944, Nazi scientist Dr. Klaus Schmidtobserves young Erik Lensherr bend a metal gate with his mind when the child is separated from his mother. In his office, Schmidt orders Lensherr to move a coin on a desk, killing his mother when Lensherr cannot. In grief and anger, Lensherr's magnetic power manifests, killing two guards and destroying the room. Meanwhile, at a mansion inWestchester County, New York, young telepath Charles Xavier meets young shape-shifter Raven whose natural form is blue. Overjoyed to meet someone else 'different', he invites her to live with his family as his foster sister.			",
  length: 132,
},

{
  title: "Django Unchained",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 16,
  director: "Quentin Tarantino",
  year: 2012,
  genres: ["Adventure", "Drama", "Western"],
  description: "Somewhere in Texas in the year 1858, several male slaves are being driven by the Speck Brothers, Ace and Dicky. Among the shackled slaves is Django, sold off and separated from his wife, Broomhilda. The Speck Brothers are stopped by Dr. King Schultz, a German dentist and bounty hunter. Schultz asks to buy one of the slaves, but while questioning Django about his knowledge of the Brittle Brothers, for whom Schultz is carrying a warrant, he irritates Ace who aims his shotgun at Schultz. Schultz quickly kills Ace and leaves Dicky at the mercy of the other newly-freed slaves. Since Django can identify the Brittle Brothers, Schultz offers Django his freedom in exchange for his help in tracking them down. After executing the Brittles, Django partners with Schultz through the winter and becomes his apprentice. Schultz explains that, being the first person he has ever given freedom to, he feels responsible for Django and is driven to help him in his quest to rescue Broomhilda. Upon first learning of her name, Schultz tells Django the tale of the mythical German valkyrie, Brünnhilde.			",
  length: 165,
},

{
  title: "The Avengers",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 17,
  director: "Joss Whedon",
  year: 2012,
  genres: ["Action", "Fantasy"],
  description: "The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,2 a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth.Nick Fury, director of the espionage agency S.H.I.E.L.D., and his lieutenant Agent Maria Hill arrive at a remote research facility during an evacuation, where physicist Dr. Erik Selvig is leading a research team experimenting on the Tesseract. Agent Phil Coulson explains that the object has begun radiating an unusual form of energy. The Tesseract suddenly activates and opens a wormhole, allowing Loki to reach Earth. Loki takes the Tesseract and uses his scepter to enslave Selvig and several agents, including Clint Barton, to aid him in his getaway.			",
  length: 142,
},

{
  title: "Argo",showtime: rand_time(Time.now, Time.now + 3600*24*7),rating: (rand(5) + 1),
  id: 18,
  director: "Ben Affleck",
  year: 2012,
  genres: ["Biography", "Drama", "History"],
  description: "Iranians storm the United States embassy in Tehran on November 4, 1979, in retaliation for President Jimmy Carter giving the Shah asylum in the U.S. during the Iranian Revolution. More than fifty of the embassy staff are taken as hostages, but six escape and hide in the home of the Canadian ambassador Ken Taylor (Garber). With the escapees' situation kept secret, the U.S. State Department begins to explore options for exfiltrating them from Iran. Tony Mendez (Ben Affleck), a U.S. Central Intelligence Agency exfiltration specialist brought in for consultation, criticizes the proposals, but is at a loss for an alternative. While on the phone with his son, he is inspired by watching Battle for the Planet of the Apes and begins plans for creating a cover story for the escapees being Canadian filmmakers scouting for exotic locations in Iran for a similar science-fiction film.			",
  length: 120,
},


{title: "Dead Man Down",showtime: rand_time(Time.now, Time.now + 3600*24*7), rating: (rand(5) + 1),
  id: 19,
  director: "Niels Arden Oplev",
  year: 2013,
  genres: ["Action", "Crime", "Drama"],
  description: "Victor (Colin Farrell) has infiltrated the criminal empire run by ruthless kingpin Alphonse Hoyt (Terrence Howard), with the objective of making Alphonse pay for killing his wife two years earlier to prevent a trial after his men also accidentally killed Victor's daughter. Victor watches and is watched by Beatrice (Noomi Rapace), a mysterious young woman who lives in the apartment across from his. Beatrice begins to contact Victor and show interest for him, and on her first date she reveals her true intentions: Beatrice has a video of Victor killing a man and wishes for him to kill a drunk driver who disfigured her through a car collision, otherwise she will contact the police.			",
  length: 117}
];


