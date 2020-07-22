# BrewCrew-Hackathon-Prototype

The winning project for the Constellation Brands 2020 internal Summer internship hackathon competition, as per judges selection.


# Notes
- The Docs folder contains the build of our website that is currently displayed at our [GitHub Pages URL](https://daniel-mccarthy.github.io/BrewCrew-Hackathon-Prototype/).

- The `/Website Source/` folder contains all the files necessary to generate a build of our website (these configuration files are used in conjunction with yarn).

- The `/Website Source/src/` folder contains the primary source files. Website.jsx and Website.css are the primary files we are working with currently.

- Using a command line, we can use yarn at our `/Website Source/` folder. Using the command `yarn` will locally download the required packages for the website (React, webpack, etc.). We can use `yarn build:prod` to create a production build of the site that will output to the `/docs/` folder. (We can then open the index.html file in the Docs folder to test our changes locally in our browser, and if we want to push the changes to the live GitHub pages link, we can use 'yarn deploy', which will run `yarn build:prod` and then create a commit that contains the new files in the `/docs/` folder. Once that is pushed to the GitHub repository, the website will update)
