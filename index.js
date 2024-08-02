const inquirer=require("inquirer")
const {Circle,Square,Triangle}=require("./lib/shape")
const fs=require("fs")

function makeLogo(){
inquirer.prompt([
    {
        type:"input",
        name:"text",
        message:"Enter 3 characters"
    },
    {
        type:"input",
        name:"textColor",
        message:"Enter the color for your text"
    },
    {
        type:"list",
        name:"shape",
        message:"What shape would you like",
        choices:["Circle","Square","Triangle"]
    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like your shape"
    }
])
.then((response)=>{
    console.log(response.shape)
    let shapeChoice;
    switch(response.shape){
        case"Circle":
        shapeChoice=new Circle();
        break;
        case"Square":
        shapeChoice=new Square();
        break;
        case"Triangle":
        shapeChoice=new Triangle();
        break;
    }
    console.log(shapeChoice)
    shapeChoice.setColor(response.shapeColor)
    shapeChoice.setText(response.text)
    shapeChoice.setTextColor(response.textColor)
    if(response.text>3){
        console.log("Text must be less than 3 characters")
        return
    }
    fs.writeFile("coolLogo.svg",shapeChoice.render(),(err)=>{
        err? console.error(err): console.log("your super cool logo has generated")
    })
})
}

makeLogo()