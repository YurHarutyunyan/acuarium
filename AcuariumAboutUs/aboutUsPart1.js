let section1 = document.createElement('section')
section1.id = "section1_container";

let rootId = document.getElementById('root')

rootId.append(section1);

let section1Div1 = document.createElement('div')
section1Div1.id = "section1Div1";

let section1Div2 = document.createElement('div')
section1Div2.id = "section1Div2";
section1Div2.innerHTML=` <h1>Awesome Aquarium Design </h1>
<p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.</p>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
Semper at tempufddfel.  <p>`;

section1.append(section1Div1, section1Div2)


