//switching tab
const tab_nav = document.querySelector('.nav');
const register = document.querySelector('.register');
const main_contents = document.querySelectorAll('.main-content');
tab_nav.addEventListener('click', function(e){
  if(e.target.tagName === 'A'){
	  
	tab_nav.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
	for(let i = 0; i < main_contents.length; i ++){
          main_contents[i].style.display = 'none';
        }
        main_contents[e.target.dataset.id].style.display = 'flex';
  }
})

register.addEventListener('click', function(e){
	if(e.target.tagName === 'A'){
		register.querySelector('.active').classList.remove('active');
		e.target.classList.add('active');
		for(let i = 0; i < main_contents.length; i++){
			main_contents[i].style.display = 'none';
		}
		main_contents[e.target.dataset.id].style.display = 'flex';
		
	}
})
//add event for a
/*const as = document.querySelectorAll('.nav ul li a');
const main_contents = document.querySelectorAll('.main-content');
for (let i = 0; i < as.length; i ++){
	as[i].addEventListener('click', function(){
		console.log('click');
		document.querySelector('.nav .active').classList.remove('active')
		this.classList.add('active');
		
		document.querySelectorAll('.main-content .active').classList.remove('active');
		document.querySelectorAll(`.main-content:nth-child(${i+1})`).classList.add('active');
		
		//add active to e.event target
		
	})
}*/


//hide search input first then appear by clicking icon
const i = document.querySelector('i');
const search = document.querySelector('.search');
const registerUl = document.querySelector('.registerUl');
const listName = document.querySelector('.listName');
const searchInput = document.querySelector('.search-input');
const a = document.querySelectorAll('.listName li');
iconBigger =()=>{
	i.classList.remove('fa-sm');
	i.classList.add('fa-lg');
}
iconSmaller=()=>{
	i.classList.remove('fa-lg');
	i.classList.add('fa-sm');
}
searchAppear=()=>{
	search.classList.remove("hidden");
	registerUl.style.display = 'none';
	
}
searchInput.addEventListener('focus', function(){
	listName.style.display = 'block';
})

searchInput.addEventListener('blur', function(){
	listName.style.display = 'none';
})

i.addEventListener('click', searchAppear);
i.addEventListener('mouseover', iconBigger);
i.addEventListener('mouseleave', iconSmaller);

function filterFunction(){
	let filter = searchInput.value.toUpperCase();
	for(let i = 0; i < a.length; i ++){
		txtValue = (a[i].textContent || a[i].innerText).toUpperCase();
		if(txtValue.indexOf(filter) > -1){
			a[i].style.display = "block";
		} else {
			a[i].style.display = "none";
		}
	}
}
searchInput.addEventListener('keyup', filterFunction);

//click search icon and create search input
/*const i = document.querySelector('i');
const registerSpan = document.querySelector('.register span');
const search = document.querySelector('.search');
const registerUl = document.querySelector('.register ul');
const registerInput = document.createElement('input');
	register.insertBefore(registerInput, registerSpan);
	registerInput.type = "text";
    registerInput.classList.add("search-input", "hidden");
	registerInput.id = "search";
	registerInput.placeholder = "search";
	registerInput.size = "20";
	
iconBigger =()=>{
	i.classList.remove('fa-sm');
	i.classList.add('fa-lg');
}
iconSmaller=()=>{
	i.classList.remove('fa-lg');
	i.classList.add('fa-sm');
}
registerInputToggle=()=>{
	registerInput.classList.toggle("hidden");
	//control the appear of login/register
	if(!registerInput.classList.contains('hidden')){
		document.querySelector('.register ul').style.display = 'none';
	}
	if(registerInput.classList.contains('hidden')){
		document.querySelector('.register ul').style.display = 'flex';
	}
}

//mouse event of icon
i.addEventListener('click', registerInputToggle);
i.addEventListener('mouseover', iconBigger);
i.addEventListener('mouseleave', iconSmaller);
/*registerInput.addEventListener('keyup', function(e){
	if(e.key === 'Enter'){
		//console.log(11);
	}
})*/

/*//sticky header
//when the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
//get the header
const header = document.getElementById("header-container");
//get the offset position of the header
const sticky = header.offsetTop;
//add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(){
	if (window.pageYOffset > sticky){
		header.classList.add('sticky');
	}else {
		header.classList.remove('sticky');
	}
}*/
window.onscroll = function(){myFunction()};
const header = document.querySelector('header');
const sticky = header.offsetTop;
function myFunction(){
	if(window.pageYOffset > sticky){
		header.classList.add('sticky')
	} else{
		header.classList.remove('sticky')
		
	}
}
