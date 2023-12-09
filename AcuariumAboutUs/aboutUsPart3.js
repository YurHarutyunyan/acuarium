let section3 = createElement("section");
createId(section3,"section3_container");

rootId.append(section3);

let section3Div1 = createElement("div");
createId(section3Div1,"section3Div1");
section3.append(section3Div1)

createInnerHtml(section3Div1,"<h1> Our skills <h1> ")
createInnerHtml(section3Div1,"<h5>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>")

let section3Div2 = createElement("div");
createId(section3Div2,"section3Div2");

// left part  of our skills
const section3Div2_1Container = createElement("div")
createId(section3Div2_1Container,"section3Div2_1Container");
section3.append(section3Div2)

section3Div2.append(section3Div2_1Container)
let skill1 = `
<p>Maintenance</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "150px">
<p>Health Services</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "180px">
<p>Design</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "200px">
`
createInnerHtml(section3Div2_1Container,skill1)

//right part

const section3Div2_2Container = createElement("div")
createId(section3Div2_2Container,"section3Div2_2Container");

section3Div2.append(section3Div2_2Container)
let skill2 = `
<p>Consultation</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "150px">
<p>Aquarium Supplies</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "180px">
<p>Cleaning Services</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "200px">
`
createInnerHtml(section3Div2_2Container,skill2);

let section3Div3 = createElement("div");
createId(section3Div3,"section3Div3");
section3.append(section3Div3)

let section3Button = createElement("button");
section3Button.innerHTML = "Home";
section3Button.className = "button-design";
// section3Button.onclick = ()=>{location.href = 'https://www.google.com'}

section3Div3.append(section3Button)








    
