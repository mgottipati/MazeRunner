class Form{
    constructor(){
        this.h5 = createElement('h2', 'Welcome To The Maze Runner Game');
        this.startButton = createButton('How to play');
        // this.h6 = createElement('h3', 'How to play:');
        // this.h7 = createElement('h3', 'Use the arrow keys to move around in the maze');
        // this.h8 = createElement('h3', 'Finish the two mazes before the timer runs out');
        // this.h9 = createElement('h3', 'Collect the key to open the lock');

        // this.h6.position(-230, 50);

        this.button = createButton('Start');
        this.button.hide();

    }

    display(){
        this.h5.style('color', 'green');
        this.h5.position(100, 20);
        this.h5.html('Welcome To The Maze Runner Game');


        this.startButton.position(240, 160);

        this.startButton.mouseClicked(()=>{

        this.h6 = createElement('h3', 'How to play:');
        this.h7 = createElement('h3', 'Use the arrow keys to move around in the maze');
        this.h8 = createElement('h3', 'Finish the two mazes before the timer runs out');
        this.h9 = createElement('h3', 'Collect the key to open the lock');

            this.h6.style('color', 'gray');
            this.h6.position(230, 50);
            this.h6.html('How to play:')
            
    
            this.h7.style('color', 'gray');
            this.h7.position(110, 70);
            this.h7.html('Use the arrow keys to move around in the maze')
    
            this.h8.style('color', 'gray');
            this.h8.position(110, 90);
            this.h8.html('Finish the two mazes before the timer runs out')
    
            this.h9.style('color', 'gray');
            this.h9.position(170, 110);
            this.h9.html('Collect the key to open the lock')

            this.button.show();


        })


        this.button.position(255, 200);
        this.button.mouseClicked(()=>{
            gameState = PLAY;
            this.button.hide();
            this.startButton.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
        })
    }
}