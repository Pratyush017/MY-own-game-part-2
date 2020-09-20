class Paddle{
    constructor(x,y,width,height,a){

        this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.a = a;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        fill(this.a);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //imageMode(CENTER);
        //image(this.img1,0,0,10,20);
        pop();
    }
    }
