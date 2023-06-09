//Magenta Spaceship prefab
class Magenta extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed+3;
    }

    update(){
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}