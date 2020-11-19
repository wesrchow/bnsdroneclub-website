// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
    transitions: [
        {
            name: "fade",
            leave() {},
            enter() {}
        }
    ]
})