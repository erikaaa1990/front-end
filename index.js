// data for header
const lis_header = [
  {id:1, name: "Playhouse Theatre"},
  {id:2, name:'What\'s on'},
	{id:3, name: 'BookNow'},
	{id:4, name: 'Critiques'},
  {id:5, name: 'AboutUs'},
  {id:6, name: 'Login'},
  {id:7, name: 'SignUp'},

]

//data for footer
const lis_footer = [
  {id:1, name: "Home"},
  {id:2, name:'What\'s on'},
	{id:3, name: 'Your Visit'},
	{id:4, name: 'Contact'},
  {id:5, name: 'Privacy Policy'},
]

//data for slider img
const slider_imag = [
    {id:1, name: "Swan Lake", src:"./images/swan-lake-1280w.jpg"},
    {id:2, name:'Romeo and Juliet Year 1968', src:"./images/romeo-juliet-550w.jpg"}, 
  
]


//data for news img
const news_imag = [
  {id:1, name: 'Romeo and Juliet', src:"./images/romeo-juliet-550w.jpg"},
  {id:2, name: 'Silent', src: "./images/breaking-news2.jpg"},
]


//data for critique img
const critique_img = [
  {id:1, name: 'Name of Critique one', src:"./images/critique1.jpg"},
  {id:2, name: 'Name of Critique two', src:"./images/critique2.jpg"},
  {id:3, name: 'Name of Critique Three', src:"./images/critique3.jpg"},
  {id:4, name: 'Name of Critique Four', src:"./images/critique1.jpg"}
]

const divider_data = [
  {id:1, name: 'Feminism'},
  {id:2, name: 'New Wave'},
  {id:3, name: 'Script Writer'},
  {id:4, name: 'Theme'},
]

let movie={
	name:"Swan Lake",
	room:"2",
	date:"2021/11/6",
	time:"10:30",
	price:19.8
}


//create header part

/*class Header extends React.Component {
  render() {
    return (
    <div className = "header-master">
         <div className = "logo">
           <img src = "./images/logo-mini.png"></img>
           <span className = "companyName">{lis_header[0].name}</span>
         </div>
         <nav  className = "nav">
           <ul>{lis_header.slice(1, 5).map(item=><li key = {item.id}><a className="">{item.name}</a></li>)}</ul>  
         </nav>
         <div className = "search"><input className = "search-input" type="text" id="search" placeholder="search" size = "40"></input></div>
         
         <nav className = "register">
           <span><i class="fa-solid fa-magnifying-glass fa-sm"></i></span>
           <ul>{lis_header.slice(5,7).map(item =><li key = {item.id}><a className="">{item.name}</a></li>)}</ul>  
         </nav>
    </div>)

  }
}*/


//create footer part

  class Footer extends React.Component {
    render() {
      return(
        
        <div className="footer-master">
          <div className = "find"><ul>{lis_footer.map(item => <li key = {item.id}><a>{item.name}</a></li>)}</ul></div>
          <div className = "address">
            <span>Box Office</span>
            <address>
            1 Taranaki Street, Te Aro, Wellington, 6011<br></br>
            2022 Opening Hours:<br></br>
            Monday – Saturday: 10am – 2pm<br></br>
            Sunday: 1pm – 4pm<br></br>
            </address>
          </div>
          <div className = "contact">
            <p>Contact Us</p>
            <p>Booking Line: 04 123 4567</p>
            <p>Booking Line: 04 123 4568</p>
            <a href="mailto:playhouse@playhouse.co.nz">playhouse@playhouse.co.nz</a><br></br>
            <p>for any ticketing queries, group bookings or general Box Office related questions.</p>
          </div>
        </div>
      )
    }
  }


//create news part
class BreakingNews extends React.Component {
  render(){
    return(
      <div className = 'news'>
        <div className = "breaking-news">Breaking-news</div>
        <div className = "breaking-news-imgs">{news_imag.map(item => <figure key = {item.id}><a><img src = {item.src} alt = {item.name}></img><figcaption>{item.name}</figcaption></a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex libero, vulputate ac maximus ac, finibus a nibh. Fusce vestibulum porttitor velit. Mauris venenatis fermentum tortor, et accumsan eros tempus eget. Duis et consequat erat, vitae volutpat velit. Suspendisse vitae nunc at neque porttitor finibus vel quis nisi. </p></figure>
        )}</div>
      </div>
    )


  }
}

// divider  

class Divider extends React.Component {
  render(){
    return(
      <div className = "divider-master">
        {divider_data.map(item => <span key = {item.id}><a>{item.name}</a></span>)} 
      </div>
    )
  }
}

//create critique part

class Critique extends React.Component {
  render(){
    return(
      <div className = 'critique'>
        <div>Critiques</div>
        <div>{critique_img.map(item => <figure key = {item.id}><img src = {item.src} alt = {item.name}></img></figure>)}</div>   
      </div>
    )
  }
}



/*const array = [[1,0,0],
                [0,1,1,0],
                [1,0,0,0]
              ]*/


const seatRows = [15,16,17,17,17,17,17,18,18,18,18,18,10,14]
// create seat plan
/*class Row extends React.Component{
  render(){
    return(
	    array.map((seatRow, rowIdx) =><ul>{
        seatRow.map((seatColumn, colIdx) => 
          <li className={seatColumn ? "checked" : "uncheck"} data-row={rowIdx} data-column={colIdx}>{seatColumn}</li>)
      }</ul>)
    )
  }
}*/
// create seat plan2

/*class SeatsPlan extends React.Component{
  render(){
    return(
	    seatRows.map((seatRow, rowIdx) =><ul><span>{rowIdx}</span>{
        Array.from(Array(seatRow).keys()).map((colNum, colIdx) => 
          <li key={colIdx} className="uncheck" data-row={rowIdx} data-column={colIdx}>•</li>)
      }</ul>)
    )
  }
}*/

class SeatsPlan extends React.Component{
  render(){
    return(
      
    <div className="seats-plan">
    <figure><img src="./images/Ballet-Buxton-1200.jpg"></img></figure>
    <div className="theare-info-section">
    <div className="theatre-info">  
			<div className="theatre-name">{movie.name}</div>
			<div className="theater-day">
				<div className="theatre-room">Room: {movie.room}</div>
				<div className="theatre-date">Date: {movie.date}</div>
				<div className="theatre-time">Screens:<br></br><button className="theatre-time-button">{movie.time}</button></div>
        <div className="book-button">
          <button>Book NoW</button>
          <button>Add TO My List</button>
        </div>
			</div>
		</div>
		<div className="theater-content"> 
    {seatRows.map((seatRow, rowIdx) =><div className="theater-seats"><span className="theater-row">{rowIdx}</span>{
        Array.from(Array(seatRow).keys()).map((colNum, colIdx) => 
          <span className="theater-plan-model uncheck" key={colIdx-rowIdx} data-row={rowIdx} data-column={colIdx}>•</span>)
      }</div>)}
      <div className="seats-bottom">
			<div className="seats-bottom-Left"></div>
			<div className="seats-bottom-right">$<span className="seats-price">{movie.price}</span></div>
		</div>
    </div>
		
	</div>
  </div>
	    
    )
  }
}



//form component

//prepare regx 
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      firstNameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "emailAddress",
      "password",
      "passwordConfirmation"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match";

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === "";
  }

  render() {
    return (
      <div className="registration-master" >
        <div className="registration-form" >
        <h3>Welcome</h3>
        {this.state.isFormSubmitted ? (
          <div className="registration-details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div><a>back to home page</a></div>
          </div>
        ) : (
          <div  className="registration-input" style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}
            
            <button>Signup</button>
            <div><span>Already a user? <a>Login Here</a></span></div>
          </form>
          </div>
        )}
      </div>
      <div className="squre">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="circle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      </div>
      
    );
  }
}

//news-page

class NewsComponent extends React.Component{
  render(){
    return(
      <div className="news-master">
        <div className="news-image">
        <img src="./images/romeo-juliet-550w.jpg"></img>
        </div>
        <article>
          <div className="news-title">
            News Title
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere euismod velit in rhoncus. Donec molestie nulla quis nulla fringilla elementum. Nullam scelerisque, lorem in vestibulum finibus, ipsum metus sollicitudin leo, tempus lacinia est felis et purus. Sed facilisis rhoncus semper.</p>
          <p>Nullam dignissim augue dui, sit amet interdum diam viverra eleifend. Nullam vitae nunc quam. Sed malesuada tristique mauris, non ultrices ipsum hendrerit non. </p>
          <p>Mauris congue ac dolor ac tincidunt. Donec elementum erat ac diam tincidunt pellentesque. Vivamus lobortis tortor eget arcu aliquet, vel fringilla lacus finibus. Cras cursus luctus rhoncus. Donec dictum id lorem ac egestas. Mauris dui quam, consequat vel interdum eu, aliquam nec mauris. </p>
        </article>
      </div>
    )
  }
}


//tab switching

// render component
/*ReactDOM.render(<Header />, document.querySelector('header'))*/
ReactDOM.render(<Footer />, document.querySelector('footer'))
ReactDOM.render(<Critique />, document.querySelector('.critique-master'))
ReactDOM.render(<BreakingNews />, document.querySelector('.news-master'))
ReactDOM.render(<Divider />, document.querySelector('.divider'))
/*ReactDOM.render(<Row />, document.querySelector('.test'))*/
//ReactDOM.render(<SeatsPlan />, document.querySelector('.seat-plan'))
ReactDOM.render(<SeatsPlan />, document.querySelector('main[data-id="1"]'));
ReactDOM.render(<FormComponent />, document.querySelector('main[data-id="3"]'));
ReactDOM.render(<NewsComponent />, document.querySelector('main[data-id="2"]'));


/*const domContainer = document.querySelector('body');
const root = ReactDOM.createRoot(domContainer);
root.render(<Header />);*/


