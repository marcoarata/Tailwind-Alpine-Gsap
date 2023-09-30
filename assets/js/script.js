// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
gsap.to(".green", {rotation: 360, x: 335, duration: 10});

// target the element with a class of "orange" - rotate and move FROM 100px to the left over the course of 1 second.
gsap.from(".purple", {rotation: -360, x: -100, duration: 10});

// target the element with a class of "grey" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second.
gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 165, duration: 10});
