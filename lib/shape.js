class Shape{
    constructor(){
        this.color=""
        this.text=""
        this.textColor=""
    }
    setColor(color){
        this.color=color

    }
    setText(text){
        this.text=text
    }
    setTextColor(tColor){
        this.tColor=tColor
    }
}

class Circle extends Shape{
    render(){
        return `
        <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">

    <circle cx="60" cy="60" r="50" fill="${this.color}"/>
  
    <text x="50" y="90" font-size="20" text-anchor="middle" fill="${this.tColor}" dominant-baseline="central">${this.text}</text>
</svg>
        `
    }
}