# Choose your data ⚙️

This project uses the OBA Search API to collect data about books. It can search for certain titles, and you can decide what data is used about you for searching for recommendations.

![Project Image](https://github.com/kylebot0/web-app-from-scratch-1920/blob/master/gh-images/hoofdpagina.png)
> Overview page

## Table of Contents 🗃
- [Choose your data ⚙️](#choose-your-data---)
  * [Table of Contents 🗃](#table-of-contents---)
  * [Live demo](#live-demo)
  * [To Do and features 📌](#to-do-and-features---)
  * [Description 📝](#description---)
  * [Installing 🔍](#installing---)
    + [Packages and Technologies](#packages-and-technologies)
  * [API 🐒](#api---)
  * [Keep up to date](#keep-up-to-date)
  * [Contributing](#contributing)
  * [Sources 📚](#sources---)
    + [Credits](#credits)
  * [Licence 🔓](#licence---)

## Live demo
[Direct link](https://kylebot0.github.io/project-1-1920/)
```
https://kylebot0.github.io/project-1-1920/
```

## To Do and features 📌
Things to do in this project:

- [ ] Add all the options in profile to recommendations.
- [ ] Instead of using 1 / 5 of the loan data, use the entire dataset.
- [ ] Add detail pages.
- [ ] Filters.

Features:

- [x] Search for books.
- [x] Choose which data you wanna use.
- [x] Change what you want in your profile, except for important data.
- [x] Get recommendations based on your preferences.

## Description 📝
Choose your data uses the OBA Search API to collect data about books. It's focused on getting back the privacy you own. It can search for certain titles, and you can decide what data is used about you for searching for recommendations. If everything is turned off OBA, will not use your data for getting you recommendations. 

![Detail page](https://github.com/kylebot0/web-app-from-scratch-1920/blob/master/gh-images/detailpagina.png)
> Detail page

## Installing 🔍
To install this application and enter the repo write the following into your terminal:
```
git clone https://github.com/kylebot0/project-1-1920.git && cd project-1-1920
```

Because this project uses different modules, you'll have to npm install to get the different dependecies
```
npm install
```
To build all the modules, run
```
npm run watch
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * Webpack

## API 🐒
The data used throughout the application is from the OBA Search API ```zoeken.oba.nl/api/v1```.
It is a free public api with a rate limit of 200 requests per hour.

Because i call the API, from different links the data can vary.
The data has i.e. the following structure:
```javascript
{
    "inboekdatum": "15-06-17",
    "taal": "dut",
    "genre": "",
    "jaar publ.": 2017,
    "PPN": 410247596,
    "ISBN": "9,78905E+12",
    "matsrt": "JROM",
    "inschr. datum": "24-04-09",
    "woonplaats": "Amsterdam",
    "geslacht": "Vrouwelijk",
    "Lener": 37857,
    "Locatie": "BBS",
    "lencat": "JGD",
    "exbarc": 10000038673026,
    "titel": "Rafa wil drummen",
    "fm. auteur": "Grift",
    "vn. auteur": "Hester van de",
    "kast": "A-GRIF",
    "transtype": "Uitlening",
    "transdat": "11-01-18",
    "geboortejaar": 2008,
    "postcode": 1034,
    "": "",
    "__1": ""
  }
```

If you want to look at the docs from the API, and or are interested in easily seeing how it works. 
OBA has a page for that.
```
zoeken.oba.nl/api/v1
```

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using 
```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources 📚
Sources i used throughout the project.

* zoeken.oba.nl/api/v1

### Credits

  * None

## Licence 🔓
MIT © [Kyle Bot](https://github.com/kylebot0)
