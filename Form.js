class Form{
    constructor(){
        this.button = createutton("Save")
    }
    display(){
    this.button.position(250, 200);
    this.button.mousePressed(() => {
      this.button.hide();
      final.update();
    });
}
}