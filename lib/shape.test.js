const {Circle,Square,Triangle}=require("./shape")

describe("circle",()=>{
    it("should create a red circle with blue text with the letters abc",()=>{
        const shape=new Circle()
        const expectedResult=`
        <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">

    <circle cx="60" cy="60" r="50" fill="red"/>
  
    <text x="60" y="60" font-size="20" text-anchor="middle" fill="blue" dominant-baseline="central">Abc</text>
</svg>
        `
        shape.setColor("red")
        shape.setTextColor("blue")
        shape.setText("Abc")
        expect(shape.render()).toEqual(expectedResult)
    })
})