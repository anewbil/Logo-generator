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

class Triangle extends Shape{
    render(){
        return `
        <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">

        <polygon points="60,10 10,110 110,110" fill="${this.color}" />
  
    <text x="50" y="90" font-size="20" text-anchor="middle" fill="${this.tColor}" dominant-baseline="central">${this.text}</text>
</svg>
        `
    }
}

class Square extends Shape{
    render(){
        return `
        <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="100" height="100" fill="${this.color}" />
  
    <text x="50" y="90" font-size="20" text-anchor="middle" fill="${this.tColor}" dominant-baseline="central">${this.text}</text>
</svg>
        `
    }
}


module.exports={
    Circle,Square,Triangle
}