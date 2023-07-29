# RoboticsTest

An app for visualizing a cleaning path, robot polygon and a cleaning gadget line from a JSON file


## Table of contents

- [Quick start](#quick-start)
- [General information](#general-information)
- [Author](#author)

> Features
- [x] Reading coordinates from a JSON file
- [x] Drawing the coordinates on a canvas
- [x] Selecting the FPS to animate the path
- [x] Animate the path

## General Information

- This app reads a JSON file with coordinates in the following format:
  ```
  {
    "robot": [
      [x0, y0], [x1, y1], [x2, y2], [x3, y3]
    ],
    "cleaning_gadget": [
      [x0, y0], [x1, y1]
    ],
    "path": [
      [x0, y0],
      [x1, y1],
      ...,
      [xN, yN]
    ]
  }
  ```
- Depending on the path extend, the app scales coordinates of the shapes and path to fit the standard canvas size (currently 600 x 300)
- The animation of the path can be started only when a JSON file is provided
- The standard animation FPS of 60 can be changed using a dedicated slider

## Quick start

```bash
# clone the repo from github
git clone https://github.com/lukegiglio/kaercher_roboticstest.git

# change directory
cd kaercher_roboticstest

# install the app with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 

### Author
* Author  : Lucas Giglio
