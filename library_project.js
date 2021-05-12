// single element selectors

// console.log(window)       -----> there are several methods ofwindow,,, document is one of them
// window object is the parent object of the browser

// console.log(document.getElementById('my-form'))

// console.log(document.querySelector('h1'))       // it can select any element class or id..single selector only


// multiple element selectors
// console.log(document.querySelectorAll('.item'))  // it gives nodelist...which is same as array..and we can run functions on it

//we can also use
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementById

// how to run loop,,,,,

// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item))


// some of  the selector methods.........................................................

// const ul = document.querySelector('.items')
// ul.remove();                                   // get rid of element
// ul.lastElementChild.remove();                 // remove last element

// ul.firstElementChild.textContent = 'Sourabh';        // change element to any content you want

// ul.children[1].innerText = 'Me';                    // accessing elements and changing content

// ul.lastElementChild.innerH/TML = '<h1>indiranagar ka gunda</h1>'     // replacing last element by html code dynamically


// const btn = document.querySelector('.btn');
// btn.style.background = 'red'                                    // changing style of button 


//  events listner ==--------------------------------------------------------------------

const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) => {                               // when button clicks, function operates
//     e.preventDefault();                                             // to avoid flash click
//     console.log('click')
//     console.log(e)                                                  // check attributes of eventlistner
// })

// btn.addEventListener('click', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('.items').lastElementChild.textContent = 'why fucking clicked'
    
// })

// btn.addEventListener('mouseover', (e)=> {                                                        // when we hover over button
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('.items').lastElementChild.textContent = 'why fucking clicked'
    
// })

// btn.addEventListener('mouseout', (e)=> {                                                       // when we take mouse out from button
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('.items').lastElementChild.textContent = 'why fucking clicked'
    
// })



// -------------------------- PROJECT STARTS ---------------------------------------------

const myForm = document.querySelector('#my-form')
const bookName = document.querySelector('#name')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const msg = document.querySelector('.msg')
const bookList = document.querySelector('#books')


myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    // console.log(bookName.value);                         // to get value of element

    // form validation

if(bookName.value === '' || author.value === '' || pages.value === ''){
    // alert('please enter fields')                                             // old method
    msg.classList.add('error')                                                  // to show error
    msg.innerHTML = 'PLease enter all fields';                                      // modern way

    setTimeout( () => msg.remove(), 3000)                                       // to disappear msg after some time....3000 is millisec
}
else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(` ${bookName.value} by ${author.value} with ${pages.value} pages`))

    bookList.appendChild(li);

 
}

}