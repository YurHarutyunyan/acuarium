import{createId} from "./aboutUsCreateId" 
import {createInnerHtml} from "./aboutUsCreateInnerHtml"
import {memberCard} from "./aboutUsMemberCard"
import {createTestimotional} from "./aboutUsCreateTestimotional"
export function aboutUsComponent() {
    let aboutUsElement = document.createElement('div')
    aboutUsElement.id = "aboutUs";
    console.log(aboutUsElement)

    let section1Div1 = document.createElement('div')
    section1Div1.id = "section1Div1";

    let section1Div2 = document.createElement('div')
    section1Div2.id = "section1Div2";
    section1Div2.innerHTML = ` <h1>Awesome Aquarium Design </h1>
<p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.</p>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
Semper at tempufddfel.  <p>`;

    aboutUsElement.append(section1Div1, section1Div2)


    let section2 = document.createElement("section");
    createId(section2, "section2_container");

    aboutUsElement.append(section2);

    let section2Div1 = document.createElement("div");
    createId(section2Div1, "section2Div1");
    section2.append(section2Div1)

    createInnerHtml(section2Div1, "<h1 > Our Team <h1> ")
    createInnerHtml(section2Div1, "<h4>Introducing our team members</h4>")

    let section2Div2 = document.createElement("div");
    createId(section2Div2, "section2Div2");
    section2.append(section2Div2);

    memberCard(section2Div2, "Daniel Tadevosyan", "section2Div2_container1", "memberCardContainer", "../static/images/Daniel.jpg", "https://github.com/danieltadevosyan")
    memberCard(section2Div2, "Yuri Harutyunyan", "section2Div2_container2", "memberCardContainer", "../static/images/Yura.png", "https://github.com/YurHarutyunyan")
    memberCard(section2Div2, "Harutyun Ghazaryan", "section2Div2_container3", "memberCardContainer", "../static/images/Harut.png", "https://github.com/HarutyunGhazaryan")
    memberCard(section2Div2, "Margarita Mkrtchyan", "section2Div2_container4", "memberCardContainer", "../static/images/Maga.png", "https://github.com/Margaritta2023")
    let section3 = document.createElement("section");
    createId(section3, "section3_container");

    aboutUsElement.append(section3);

    let section3Div1 = document.createElement("div");
    createId(section3Div1, "section3Div1");
    section3.append(section3Div1)

    createInnerHtml(section3Div1, "<h1> Our skills <h1> ")
    createInnerHtml(section3Div1, "<h5>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>")

    let section3Div2 = document.createElement("div");
    createId(section3Div2, "section3Div2");

    // left part  of our skills
    const section3Div2_1Container = document.createElement("div")
    createId(section3Div2_1Container, "section3Div2_1Container");
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
    createInnerHtml(section3Div2_1Container, skill1)

    //right part

    const section3Div2_2Container = document.createElement("div")
    createId(section3Div2_2Container, "section3Div2_2Container");

    section3Div2.append(section3Div2_2Container)
    let skill2 = `
<p>Consultation</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "150px">
<p>Aquarium Supplies</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "180px">
<p>Cleaning Services</p>
<hr style = "border: 1px solid rgb(235, 159, 83)" width = "200px">
`
    createInnerHtml(section3Div2_2Container, skill2);

    let section3Div3 = document.createElement("div");
    createId(section3Div3, "section3Div3");
    section3.append(section3Div3)

    let section3Button = document.createElement("button");
    section3Button.innerHTML = "Home";
    section3Button.className = "button-design";
    // section3Button.onclick = ()=>{location.href = 'https://www.google.com'}

    section3Div3.append(section3Button)
    let section4 = document.createElement("section");
    createId(section4, "section4_container");

    aboutUsElement.append(section4);

    let section4Div1 = document.createElement("div");
    createId(section4Div1, "section4Div1");
    section4.append(section4Div1)

    createInnerHtml(section4Div1, "<h1> Testimonials <h1> ")
    createInnerHtml(section4Div1, "<p>Differetnt people all over the world use our products, and here is what they say:</p>")

    let section4Div2 = document.createElement("div");
    createId(section4Div2, "section4Div2");

    section4.append(section4Div2)

    //Tesla comments

    createTestimotional(section4Div2, "section4Div2_container1", "Nikola tesla", '"Great job, now my electric catfish (էլեկտրական կատվաձուկ) has a good acuarium"', "static/images/Nikola.jpeg")

    createTestimotional(section4Div2, "section4Div2_container2", "Albert Einstein", '"Everybody is a genius, but if you judge a fish by it’s ability to climb a tree, it will spend it’s whole life believing that it is stupid "',
     "static/images/Einstein.jpg")

    createTestimotional(section4Div2, "section4Div2_container3", "Tupac Amaru Shakurn", '"I see many changes in your acuarium"', "static/images/Tupac.jpg")

    createTestimotional(section4Div2, "section4Div2_container4", "Kyle Simpson", '"Looking for job"', "static/images/Kyle.jpg")

    return aboutUsElement;
}