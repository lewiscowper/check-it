# Checkit!

Checkit is a CLI tool that queries files for certain things that the user is looking for and gets a response as to how many instances of that "thing" there is, line number, and code block. It also comes with log symbols, colored console logs, and messages.

The first iteration of checkit looks for instances of !important flags in CSS files and returns that information back to the developer running the command so they can reevaluate their CSS or understand what the hell is going on.

## Install
Navigate to the directory containing the CSS file.

Run
```
npm install -g check-it

```

Example command
```
checkit shitty.css

```

Running the command with the name of the file will return all the information for the !important flag.

## Collaboration

Clone the repo and run
```
npm install

```

Than after you make changes, please submit an awesome pull request.

Thanks!!
