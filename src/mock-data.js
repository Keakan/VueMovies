let mock = [{
    id: 1,
    name: "Captain America: The First Avenger",
    group: "Captain America",
    year: 2011,
    price: "$19.99",
    image: 'CaptainAmericaTheFirstAvenger.jpg',
    rating: "PG-13",
    stars: 6.9,
    length: "124 min",
    genre: "Action, Adventure, Sci-Fi",
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0P52WO5G7C96M6T0UVY76GOFHT/ref=imdbref_wl_li_mwbr_pvs_piv?tag=imdbtag_wl_li_mwbr_pvs_piv-20"
},
  {
    id: 2,
    name: "Iron Man",
    group: "Iron Man",
    year: 2008,
    price: "$19.99",
    image: 'Ironman.jpg',
    rating: "PG-13",
    length: "126 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.9,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0NYGDQBOSUC0J1473RNO7V5PB7/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 3,
    name: "The Incredible Hulk",
    group: "Hulk",
    year: 2008,
    price: "$19.99",
    image: 'TheIncredibleHulk.jpg',
    rating: "PG-13",
    length: "112 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 6.7,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0S3N839WUBZOWAD4C12ZCPMWTB/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 4,
    name: "Iron Man 2",
    group: "Iron Man",
    year: 2010,
    price: "$19.99",
    image: 'IronMan2.jpg',
    rating: "PG-13",
    length: "124 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0IV5WZ22GD5DB42S2KSTBBNHZ1/ref=imdbref_wl_li_mwbr_pvs_piv?tag=imdbtag_wl_li_mwbr_pvs_piv-20"
},
  {
    id: 5,
    name: "Thor",
    group: "Thor",
    year: 2011,
    price: "$19.99",
    image: 'Thor.jpg',
    rating: "PG-13",
    length: "115 min",
    genre: "Action, Adventure, Fantasy",
    stars: 7,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0RMLEW8S27I8L4H5SUXAJEYK6R/ref=imdbref_wl_li_mwbr_pvs_piv?tag=imdbtag_wl_li_mwbr_pvs_piv-20"
},
  {
    id: 6,
    name: "The Avengers",
    group: "Avengers",
    year: 2012,
    price: "$19.99",
    image: 'Avengers.jpg',
    rating: "PG-13",
    length: "143 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 8,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0LGXVICHDN124GSDWO0XOIVP7I/ref=imdbref_wl_li_mwbr_pvs_piv?tag=imdbtag_wl_li_mwbr_pvs_piv-20"
},
  {
    id: 7,
    name: "Iron Man 3",
    group: "Iron Man",
    year: 2013,
    price: "$19.99",
    image: 'IronMan3.jpg',
    rating: "PG-13",
    length: "130 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.2,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0U43X495JA74SM0SQE52MX1EC8/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 8,
    name: "Thor: The Dark World",
    group: "Thor",
    year: 2013,
    price: "$19.99",
    image: 'ThorTheDarkWorld.jpg',
    rating: "PG-13",
    length: "112  min",
    genre: "Action, Adventure, Fantasy",
    stars: 6.9,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0RZDRSPBHQXZET45F0GBXQZ46I/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 9,
    name: "Captain America: The Winter Soldier",
    group: "Captain America",
    year: 2014,
    price: "$19.99",
    image: 'CaptainAmericaTheWinterSoldier.jpg',
    rating: "PG-13",
    length: "136 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.7,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0R9T209TXBQ44U4RHG4GCLQH7D/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 10,
    name: "Guardians of the Galaxy",
    group: "Guardians",
    year: 2014,
    price: "$19.99",
    image: 'GuardiansoftheGalaxy.jpg',
    rating: "PG-13",
    length: "121 min",
    genre: "Action, Adventure, Comedy",
    stars: 8,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0IZFDA7F2J00WMDB3QRYJ8D26L/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 11,
    name: "Guardians of the Galaxy Vol. 2",
    group: "Guardians",
    year: 2017,
    price: "$19.99",
    image: 'GuardiansoftheGalaxyVol2.jpg',
    rating: "PG-13",
    length: "136 min",
    genre: "Action, Adventure, Comedy",
    stars: 7.9,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0J3PZFXQ3UIA5BC2UWX0F0EZYJ/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 12,
    name: "Avengers: Age of Ultron",
    group: "Avengers",
    year: 2015,
    price: "$19.99",
    image: 'AvengersAgeofUltron.jpg',
    rating: "PG-13",
    length: "141 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.3,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0G0V1VJW689TMXC6UAFZF64MYR/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 13,
    name: "Ant-Man",
    group: "Ant-Man",
    year: 2015,
    price: "$19.99",
    image: 'AntMan.jpg',
    rating: "PG-13",
    length: "117 min",
    genre: "Action, Adventure, Comedy",
    stars: 7.3,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0FJT8NZHKSJUJC8VTSAWRGF4QR/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 14,
    name: "Captain America: Civil War",
    group: "Captain America",
    year: 2016,
    price: "$19.99",
    image: 'CaptainAmericaCivilWar.jpg',
    rating: "PG-13",
    length: "147 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.8,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0RZDWMBYY3BHRR1VMRNOVDQA6K/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 15,
    name: "Spider-Man: Homecoming",
    group: "Spider-Man",
    year: 2017,
    price: "$19.99",
    image: 'SpiderManHomecoming.jpg',
    rating: "PG-13",
    length: "133 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.4,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0RZF4HEYG5480M36FIKJBK9U1Q/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 16,
    name: "Doctor Strange",
    group: "Doctor Strange",
    year: 2016,
    price: "$19.99",
    image: 'DoctorStrange.jpg',
    rating: "PG-13",
    length: "115 min",
    genre: "Action, Adventure, Fantasy",
    stars: 7.5,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0L8FLGCF6N45QH6KEWENPCPUFR/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 17,
    name: "Thor: Ragnarok",
    group: "Thor",
    year: 2017,
    price: "$19.99",
    image: 'ThorRagnarok.jpg',
    rating: "PG-13",
    length: "130 min",
    genre: "Action, Adventure, Comedy",
    stars: 7.9,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0PQFVW3EZ8H7OI16TE4CP0QQQ3/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 18,
    name: "Black Panther",
    group: "Black Panther",
    year: 2018,
    price: "$19.99",
    image: 'BlackPanther.jpg',
    rating: "PG-13",
    length: "134 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.3,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0QOJTFOVJ2PHHQX4JPVK1DR0LE/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 19,
    name: "Avengers: Infinity War",
    group: "Avengers",
    year: 2018,
    price: "$19.99",
    image: 'AvengersInfinityWar.jpg',
    rating: "PG-13",
    length: "149 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 8.5,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0LTSHCE776QK2JIZXIR8W9XGRB/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 20,
    name: "Ant-Man and the Wasp",
    group: "Ant-Man",
    year: 2018,
    price: "$19.99",
    image: 'AntManandtheWasp.jpg',
    rating: "PG-13",
    length: "118 min",
    genre: "Action, Adventure, Comedy",
    stars: 7.1,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0IMPG9QW50FQFFBEXXI9G5H7AA/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 21,
    name: "Captain Marvel",
    group: "Captain Marvel",
    year: 2019,
    price: "$19.99",
    image: 'CaptainMarvel.jpg',
    rating: "PG-13",
    length: "123 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 6.9,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0NHHRFV9V26IC2RU42D3B31F9H/ref=imdbref_wl_li_mwbr_pvt_aiv?tag=imdbtag_wl_li_mwbr_pvt_aiv-20"
},
  {
    id: 22,
    name: "Spider-Man: Far From Home",
    group: "Spider-Man",
    year: 2019,
    price: "$19.99",
    image: 'SpiderManFarFromHome.jpg',
    rating: "PG-13",
    length: "129 min",
    genre: "Action, Adventure, Sci-Fi",
    stars: 7.5,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
    amazonurl: "https://www.amazon.com/Spider-Man-Far-Home-4K-UHD/dp/B07TM1R5VZ/ref=tmm_aiv_swatch_1?_encoding=UTF8&qid=&sr="
},
  {
    id: 23,
    name: "Avengers: Endgame",
    group: "Avengers",
    year: 2019,
    price: "$19.99",
    image: 'AvengersEndgame.jpg',
    rating: "PG-13",
    length: "181 min",
    genre: "Action, Adventure, Drama",
    stars: 8.4,
    watched: "Mark as Watched",
    watchlist: "Add to Watchlist",
    info: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    amazonurl: "https://www.amazon.com/gp/video/detail/0P5699HX4S6UTRBOYYMCIGWTK3/ref=imdbref_tt_wbr_pvt_aiv?tag=imdbtag_tt_wbr_pvt_aiv-20"
}
]

export default mock;