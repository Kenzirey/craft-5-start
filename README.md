# Craft CMS 5 + DDEV + Vite

A starter project for Craft CMS + DDEV + Vite. Created for students of [CraftQuest.io](https://craftquest.io) video courses on Craft CMS and modern web development.

## Vite

This project is set up to use Vite for front-end tooling. Vite + Craft CMS 5 work together because of Andrew Welch's [Vite plugin for Craft CMS](https://nystudio107.com/plugins/vite). This project comes with the Vite plugin installed and configured.

For more information about DDEV + Vite, check out the CraftQuest course [DDEV and Craft CMS Quick-Start Guide](https://craftquest.io/courses/ddev-and-craft-cms-quick-start-guide/43674) (links to the video on DDEV + Vite). 

## Pre-requisites

In order to use this project, you need:

- DDEV installed and working
- Git installed


## Setting Up the Project

To set up this project locally using DDEV:

1. Clone the Git repository in the current directory (`craft5`):
    ```bash
    git clone git@github.com:CraftQuest/craft-5-start.git
    ```

2. Start DDEV to spin up the project, load the starter database from the export, and install Composer packages:
    ```bash
    ddev start
    ```
3. Install the NPM packages in the `package.json` file:
   ```bash
   ddev npm install
   ```
4. Do an initial build of the assets:
   ```bash
   ddev npm run build
   ```
5. Start the Vite server:
   ```bash
   ddev npm run serve
   ```
Access the project in your web browser:
- Front-End: https://craft5.ddev.site/
- Control Panel: https://craft5.ddev.site/admin

## Start Learning

This project was built to be used with CraftQuest's courses. Ready to learn with us?! 

https://craftquest.io

## Resources Used to Create This Repository

* [Vite.js](https://vitejs.dev/)
* [nystudio107/craft-vite: Allows the use of the Vite.js next generation frontend tooling with Craft CMS](https://github.com/nystudio107/craft-vite/)
* [craft-vite documentation](https://nystudio107.com/plugins/vite/documentation)
* [Defining Custom Services - DDEV-Local Documentation](https://ddev.readthedocs.io/en/latest/users/extend/custom-compose-files/)
* [onedarnleyroad/craftcms: A Craft CMS starter project using DDEV for local hosting and Vite for front-end bundling and HMR.](https://github.com/onedarnleyroad/craftcms)
