/* 01 - UI TABS :: Complete AFTER variables */
var membershipHTML = `
  <h2>Join Us Today!</h2>
  <p>
    You can be part of the Paley Center Community as an <em>Individual Member</em>, <em>Patron Member</em>,
    <em>Media Council Member</em> or <em>Corporate Member</em>. All include very special benefits for YOU
    while supportin the Paley Center's essential programs.
  </p>
  <p>
    <small>The Paley Center is a 501(c)3 nonprofit organization; our work and our programs are dependent on your
    support</small>
  </p>
`

var programsHTML = `
  <h2>Public Programs</h2>
  <ul>
    <li>PaleyLive LA</li>
    <li>PaleyLive NY</li>
    <li>Paley Impact</li>
    <li>Patron Circle & President Circle</li>
  </ul>
`

var screeningsHTML = `
  <h2>Join us Today!</h2>
  <p>
    Saturdays and Sundays in New York and Los Angeles.
  </p>
  <p>
    12:00 to 4:00 local time • FREE ADMISSION.
  </p>

  <p>
    <a href="#">Visit New York</a> | Visit Los Angeles
  </p>

  <p>
    Weekend Screenings from the Paley Archive on the Big Screen in
    NY & LA offer great family entertainment, PLUS programming
    selected for our members and screened for the public. You haven't
    really experienced TV until you've seen it on a movie screen with
    fellow fans.
  </p>
`

var pressHTML = `
  <h2>Press Info</h2>
  <hr/>
  <h4>Current Press Release</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Release Archive</h4>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Press Kit/Logos</h4>
  <p>View and download press materials</p>
  <p><a href="#">Read More</a></p>
  <hr/>
  <h4>Register for Press Information</h4>
  <p><a href="#">Click to download and fill out form</a></p>
  <hr/>
`

/* 01 - UI TABS :: Your code below.... */
var contentEl = document.querySelector('.ui-tabs__content')
var menuList = document.querySelector('.ui-tabs__tabslist')
var membership = document.querySelector("li[data-tab='membership']")
// console.log(membership);
var programs = document.querySelector("li[data-tab='programs']")
var screenings = document.querySelector("li[data-tab='screenings']")
var press = document.querySelector("li[data-tab='press']")


function handleSelectedClass(e){
    var allMenuEl = [...document.querySellectorAll('.ui-tabs__tab')]
    var selectContent = e.target.innerHTML.toLowerCase()
    var selectMenuEl =document.querySelector(`li[data-tab=${selectContent}]`)

    allMenuEl.forEach(function removeClass(i){
      i.classList.remove('ui-tabs__tab--selected')
    })

    selectMenuEl.classList.add('ui-tabs__tab--selected')
 }

 membership
  .addEventListener('click', function showCurrentContent(e){
    contentEl.innerHTML = membershipHTML
  })

programs
  .addEventListener('click', function showCurrentContent(e){
    contentEl.innerHTML = programsHTML
  })

screenings
  .addEventListener('click', function showCurrentContent(e){
     contentEl.innerHTML = screeningsHTML
  })

press
  .addEventListener('click', function showCurrentContent(e){
    contentEl.innerHTML = pressHTML
  })
