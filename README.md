# Notes
A simple command line note logging app written in JavaScript and running on node.
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
**Node** and **npm**.
Run the following commands to install node and npm:
```bash
sudo apt update
```
```bash
sudo apt install nodejs
```
```bash
sudo apt install npm
```
To check which version of Node.js you have installed, run the command:
```bash
node -v
```
### Installing
Follow the following steps to install Notes app/dependencies on your local machine: 
1. Clone this repository on to your local machine.
2. In your terminal, cd into the root folder of the cloned repository.
3. run `npm install` to install npm dependencies.
## Usage
Notes app utilizes command line arguments to function.
### Available Commands
#### 1. Create a Note
To add a new note, run the command:
```bash
node app add --title "YourNoteTitleHere" --body "YourNoteBodyHere"
```
If no title of body are specified when using the `add` command, the new note created will be given an untitledX title and an empty body
#### 2. Read a Note
To print a note's content to the console, run the command:
```bash
node app read --title "YourNoteTitleHere"
```
#### 3. Rename a Note
To change the title of a note, run the command:
```bash
node app rename --title "YourNoteTitleHere" --newtitle "NewTitleHere"
```
#### 4. Edit a Note
To edit the body of a note run he command:
```bash
node app edit --title "YourNoteTitleHere" --newbody "NewBodyHere"
```
#### 5. Remove a Note
To delete a note, run the command:
```bash
node app remove --title "YourNoteTitleHere"
```
#### 6. List all Notes
To print all note titles to the console, run the command:
```bash
node app list
```
