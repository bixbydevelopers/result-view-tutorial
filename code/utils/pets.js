// array of pet objects. Hardcoded data to display in the capsule.
const pets = [
  {
    name: "Moxie",
    species: "cat",
    gender: "Female ♀",
    image: "/images/moxie.jpg",
    images: [{url:"/images/moxie.jpg"}, {url:"/images/moxie-1.png"}, {url:"/images/moxie-2.png"}, {url:"/images/moxie-3.png"}],
    height: 9.6,
    weight: 9.4,
    age: '3 yrs',
    bio:
    "Moxie works very hard every day to become Instagram famous, shameless plug: @moxie.the.calico\n\nAfter a tough life on the streets, she currently resides with her owner where she loves being irresistably cute, seeing how long she can stretch a single meow, and playing fetch with her human. Moxie loves cuddles, watching birds, and punching her evil doppelganger in the mirror.",
    interests: [
      "Sitting on keyboards",
      "Maining Pikachu in SSBU",
      "Reading books 🎓",
      "Sleeping on her owner's face 😻",
      "Asking for food at 4am",
    ],
    link: "https://www.instagram.com/moxie.the.calico/",
    linkDescription: "Moxie's Instagram"
  },
  {
    name: "Colonel Whiskers",
    species: "cat",
    gender: "Female ♀",
    image: "/images/kitten-compressed.jpg",
    height: 5,
    weight: 2.5,
    age: '2 mos',
    bio:
    "Colonel Whiskers has seen many things she cannot unsee; ranging from giant brown logs in clay, delicious foods that she cannot eat, to bipedal giants that fill up her food bowl. Rest assured, Colonel Whiskers will charm you with her playfulness and wit.",
    interests: [
      "Chasing mysterious dots",
      "Staring",
      "Hiding",
      "Playing",
      "Rolling around",
    ],
  },
  {
    name: "Spot",
    species: "dog",
    gender: "Male ♂",
    image: "/images/puppy-compressed.jpg",
    height: 12,
    weight: 22,
    age: '6 mos',
    bio:
    "Spot may not have any spots on him but he will always have a spot in his heart for you. Not only is Spot cute and adorable, Spot loves to jump and has aspirations to become the next Air Bud.",
    interests: [
      "Jumping",
      "Learning where to potty",
      "Doing dog things",
      "Flooping",
    ],
  },
  {
    name: "Daisy",
    species: "dog",
    gender: "Female ♀",
    image: "/images/dog-compressed.jpg",
    height: 36,
    weight: 45,
    age: '3 yrs',
    bio:
    "The only thing Daisy is bad at is not being a big lovable ball of fluff and slobber as she showers you with affection.",
    interests: [
      "Chasing squirrels",
      "Playing dead",
      "Sitting",
      "Rolling",
      "Shaking",
    ],
  },
  {
    name: "Mr Mittens",
    species: "cat",
    gender: "Male ♂",
    image: "/images/cat-2-compressed.jpg",
    height: 9.9,
    weight: 15.1,
    age: '4 yrs',
    bio:
    "Mr Mittens is a human loving feline with a penchant for sleeping and cuddles. He loves cozying up to his human to make sure that you know that he loves you.",
    interests: ["Eating", "Sleeping", "Cuddling", "Zoomies"],
  },
  {
    name: "Cereal",
    species: "cat",
    gender: "Female ♀",
    image: "/images/kitten-2-compressed.jpg",
    height: 4,
    weight: 1.5,
    age: '3 mos',
    bio:
    "Cereal was rescued from the cereal box that she was found in. She loves milk, sleeping in bowls, and meowing at her human. Cereal's favorite cereal is Meow Mix.",
    interests: [
      "Lapping lactose free milk",
      "Making the world a cuter place",
      "Sleeping in bowls",
      "Meowing at her human",
    ],
  },
  {
    name: "Doge",
    species: "dog",
    gender: "Female ♀",
    image: "/images/doge.jpg",
    images: [{url:"/images/doge.jpg"}, {url:"/images/doge-meme-1.jpg"}, {url:"/images/doge-meme-2.jpg"}, {url:"/images/doge-meme-3.jpg"}],
    height: 14,
    weight: 17,
    age: '16 yrs',
    bio:
    "Doge, AKA Kabosu, is a rescue-adopted Shiba Inu in Japan. Since October 28th, 2010, Kabosu has graced the internet with countless memes.",
    interests: [
      "Wow",
      "Meming since 2010",
      "Much doge",
    ],
  },
];

module.exports = {
  pets:pets,
}