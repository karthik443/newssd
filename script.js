console.log("Im working");

const nav_bar = document.getElementById("nav-bar");
const links = nav_bar.querySelectorAll("a");

console.log(links);

const sections = document.querySelectorAll('.removeDisplay');
console.log("Sections found:", sections.length);
let currentSection = null;


function showSection(id) {
 
  sections.forEach(sec => sec.classList.add("removeDisplay"));

  
  console.log("id ",id);
  const target = document.querySelector(id);
  if (target) {
    
      target.classList.remove("removeDisplay"); 
   
  }
}



links.forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    showSection(targetId);
    
  });
});


showSection("#about");
