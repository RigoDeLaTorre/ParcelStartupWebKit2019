//Animate on scroll library = https://github.com/michalsnik/aos

import AOS from "./aos";

AOS.init({
  duration: 1200
});

//test function on index.html h1 tag
const getElement = name => {
  console.log(name);
};

export { getElement };
