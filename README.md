# Website Image Optimisation Script
This is for a CO650 consultancy module to help a client reduce the size of their website - here is a script that should help automate the process of optimising images in bulk.
---------------

## How do I install and run this?
Firstly, you'll need to clone down this directory, which you can do by running:

```bash
git clone URL
```
You'll need to have Node.JS installed on your machine, which you can download from [this link](https://nodejs.org/en/download/). Make sure you have this installed, otherwise nothing will work. 

Then you'll need to navigate to where ever you've cloned this file to, then you'll need to download the relevant packages, this can be done with the following:

```bash
cd /Documents/Git/tinyPNGBulk
npm i
```

After NPM has finished installing, you can then run:
```bash
node index.js
```

---------------

## How to use tinyPNGBulk
In order to use this, place your unoptimised images into the "unop" folder. After this, you can then run:
```bash
node index.js
```
and your now-optimised files will be saved to the "op" folder. 
