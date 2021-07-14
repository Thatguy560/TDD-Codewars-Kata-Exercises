const isAgeDiverse = require("./HigherOrderFunctionsSeriesIsTheMeetupAgeDiverse");

describe("isAgeDiverse", () => {
  it("Will return true if all groups are covered", () => {
    expect(
      isAgeDiverse([
        {
          firstName: "Harry",
          lastName: "K.",
          country: "Brazil",
          continent: "Americas",
          age: 19,
          language: "Python",
        },
        {
          firstName: "Kseniya",
          lastName: "T.",
          country: "Belarus",
          continent: "Europe",
          age: 29,
          language: "JavaScript",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Noa",
          lastName: "A.",
          country: "Israel",
          continent: "Asia",
          age: 40,
          language: "Ruby",
        },
        {
          firstName: "Andrei",
          lastName: "E.",
          country: "Romania",
          continent: "Europe",
          age: 59,
          language: "C",
        },
        {
          firstName: "Maria",
          lastName: "S.",
          country: "Peru",
          continent: "Americas",
          age: 60,
          language: "C",
        },
        {
          firstName: "Lukas",
          lastName: "X.",
          country: "Croatia",
          continent: "Europe",
          age: 75,
          language: "Python",
        },
        {
          firstName: "Chloe",
          lastName: "K.",
          country: "Guernsey",
          continent: "Europe",
          age: 88,
          language: "Ruby",
        },
        {
          firstName: "Viktoria",
          lastName: "W.",
          country: "Bulgaria",
          continent: "Europe",
          age: 98,
          language: "PHP",
        },
        {
          firstName: "Piotr",
          lastName: "B.",
          country: "Poland",
          continent: "Europe",
          age: 128,
          language: "JavaScript",
        },
      ])
    ).toEqual(true);
  });

  it("Will return false if all groups arent' covered", () => {
    expect(
      isAgeDiverse([
        {
          firstName: "Kseniya",
          lastName: "T.",
          country: "Belarus",
          continent: "Europe",
          age: 29,
          language: "Ruby",
        },
        {
          firstName: "Amar",
          lastName: "V.",
          country: "Bosnia and Herzegovina",
          continent: "Europe",
          age: 32,
          language: "Ruby",
        },
      ])
    ).toEqual(false);
  });
});