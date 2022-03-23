
class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.path = '../assets/intro/';

   
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.load.image('room', 'room.png');
        this.load.image('overlay', 'overlay.png');        
        this.load.image('first-qw', 'surprise.png');
        this.load.image('lexi', 'lexi.png')
        this.load.image('surprise', 'happy.png');
        this.load.image('second-qw', 'surprise.png');
        this.load.image('happy', 'happy.png');
    }
 
    create ()
    {
        this.anims.create({
            key: 'snooze',
            start: 0,
            frames: [
                { key: 'room', duration: 1500 },
                // { key: 'surprise', duration: 1500 },
                // { key: 'second-qw', duration: 1500 },
                // { key: 'happy', duration: 1500 }
            ],
            frameRate: 1,
            
        });
       
        this.add.sprite(300, 450, 'room')
            .play('snooze'); 
        this.add.image(300, 450, 'overlay');
        this.add.image(300, 470, 'surprise');
        this.add.image(300, 460, 'lexi');
        const style = { font: "bold 30px Arial", fill: "#303052", wordWrap: true, wordWrapWidth: "373px"};
        this.add.text(100, 450, "I received an invitation to the party!", style);
        


        
        this.anims.create({
            key: 'snooze',
            frames: [
                { key: 'room', duration: 1500 },
                { key: 'happy', duration: 1500 },
                // { key: 'second-qw', duration: 1500 },
                // { key: 'happy', duration: 1500 }
            ],
            frameRate: 1,
            
        });
        

    }
    
    
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 900,
    backgroundColor: '#fbf0e4',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
