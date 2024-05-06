const heading =React.createElement("h1",{id:"heading"},"Hello World1234");
console.log(heading) //the react.createelement wiil return a javascript object
//const root =ReactDOM.createRoot(document.getElementById("root"));
//console.log(root)
//root.render(heading); //when we do render the javacsript object will be converted into h1 tag behind the scenes inside the root

const parent= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child",key:"11111"},
[React.createElement("h1",{key:"12"},"This is  h1 tag"),React.createElement("h2",{key:"122"},"This is  h2 tag")])
,React.createElement("div",{id:"child1",key:"222222"},[React.createElement("h1",{key:"123"},"This is  h1 tag"),React.createElement("h2",{key:"1222"},"This is  h2 tag")])]);
console.log(parent);
const root1 =ReactDOM.createRoot(document.getElementById("root"));
console.log(root1)
root1.render(parent)