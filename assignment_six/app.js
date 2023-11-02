//This is pathetically commented, if at all, as I basically did it right before class, but hey at least it works (barely)
const vm = Vue.createApp({
    data() {
      return {
        name: 'Kyle Niswander',
        course: 'N320',
        assignment: 'Homework 6',
        level: 6,
      };
    },
  });
  
  vm.mount('#moreVue');

  const li = ["Tape", "Poison", "Vegetables", "Sand", "A hammer", "Slugs", "100% pure oxygen"]

  document.getElementById('favorite').onclick = function() {
    const h6 = document.createElement('h6');
    h6.innerHTML = "My favorite thing to not eat is " + li[Math.floor(Math.random() * 7)];
    document.body.appendChild(h6);
  };

  document.getElementById('add').onclick = function() {
    const epic = document.createElement('li');
    const cool = document.getElementById('cool');
    epic.innerHTML = cool.value;
  
    const myListElements = document.getElementsByClassName('myList');
  
    // Assuming you want to append 'epic' to all elements with class 'myList'
    for (let i = 0; i < myListElements.length; i++) {
      myListElements[i].appendChild(epic);
    }
  };
  