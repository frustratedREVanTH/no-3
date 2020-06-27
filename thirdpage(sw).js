class thirdpage {
    constructor(){
        //this.back=createButton("Back")
        this.homework=createButton("Homework")
        this.classwork=createButton("Classwork")
    }

displaytp3(){
    this.back.Position(200,200)
    this.homework.Position(610,50)
    this.classwork.Position(575,200)
    
    this.back.mousePressed(()=>{
    this.back.hide();
    sp.displaysp2();
     })
     this.homework.mousePressed(()=>{
     this.back.hide();
     })
     this.classwork.mousePressed(()=>{
        this.back.hide();
     })
}


}