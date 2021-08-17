class Runner{

constructor(){

    this.thomas = createSprite(300,550,30,30);
    this.thomas.addAnimation("stand",stand);
    this.thomas.addAnimation("left",left);
    this.thomas.addAnimation("right",right);
    this.thomas.scale = 0.08;

}
    display()
    {
     if(keyDown(LEFT_ARROW)){
        this.thomas.x = this.thomas.x - 3
        this.thomas.changeAnimation("left");
     }
     else if(keyDown(RIGHT_ARROW)){
        this.thomas.x = this.thomas.x + 3
        this.thomas.changeAnimation("right",right);

     }
     else if(keyDown(DOWN_ARROW)){
        this.thomas.y = this.thomas.y + 3
        this.thomas.changeAnimation("stand",stand);

    }
    else if(keyDown(UP_ARROW)){
        this.thomas.y = this.thomas.y - 3
        this.thomas.changeAnimation("stand",stand);

    }
     
    }
    
}