function customRender(reactElement, container){
   /*  
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement); 
    */

   //Let's rewrite the above
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    //create a loop the props so that no matter how many props we have it will set them all
    for(const prop in reactElement.props){
        if (prop === 'children') continue; //skip children prop 
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
        children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);