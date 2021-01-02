

var about = document.getElementById('About')
var home = document.getElementById('Home')
var skills = document.getElementById('Skills')
var projects = document.getElementById('Projects')
var education = document.getElementById('Education')

var aboutLink = document.getElementById('aboutLink');
var homeLink = document.getElementById('homeLink')
var skillsLink = document.getElementById('skillsLink')
var proLink = document.getElementById('proLink')
var educationLink = document.getElementById('educationLink')
var currentIndex = 0;
var viewMore = false;
var projectList = [
{
    name:'Xcelerator App',
    description:`Xcelerator app(Exn app) is a hybrid mobile application developed using react native.Its a learning application as well as job seeking application which allows user to build a portfolio of skills aligned to their career aspirations .`,
    descriptionHtml:`
    Xcelerator app(Exn app) is a hybrid mobile application developed using react native.Its a learning application as well as job seeking application which allows user to build a portfolio of skills aligned to their career aspirations .
    <br><br>
    <ul>
    <li>Custom component architecture. </li>
    <li>We have made the whole project into screens, module components and element components.</li>
    <li>Redux architecture for state management.</li>
    <li>We have used redux thunk which will give more flexibility.</li>
    <li>We have used axios for server side interactions.</li>
    </ul>
    `,
    languages:[languagesConstants.reactnative]
},
{
    name:'BizgoJi App',
    description:`Bizgoji app(Exn app) is a hybrid mobile application developed using react native.Its a bussiness application for Traders and Wholesalers .`,
    descriptionHtml:`
    Bizgoji app(Exn app) is a hybrid mobile application developed using react native.Its a bussiness application for Traders and Wholesalers .
    <br><br>
    <ul>
    <li>Custom component architecture. </li>
    <li>We have made the whole project into screens, module components and element components.</li>
    <li>Redux architecture for state management.</li>
    <li>We have used redux thunk which will give more flexibility.</li>
    <li>We have used axios for server side interactions.</li>
    </ul>
    `,
    languages:[languagesConstants.reactnative]
},
{
    name:'ABC LMS',
    description:'LMS is a learning management system thats developed for ABCForTechnology. This is useful for users who are searching for online courses on various technologies including java, python etc which will contains videos,tasks etc.',
    languages:[languagesConstants.vue,languagesConstants.html, languagesConstants.css],
    descriptionHtml:`
    LMS is a learning management system thats developed for ABCForTechnology. This is useful for users who are searching for online courses on various technologies including java, python etc which will contains videos,tasks etc.
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We have made the whole project into screens and module components which includes video task, audio task, question task coding task etc.</li>
    <li>We are using vuetify for beautification and responsiveness.</li>
    <li>Have included a code editor for coding task where we have used code mirror package. The code editor we have developed for this application will support java, python and c.</li>
    </ul>
    `,
},
{
    name:'ABC ATOMS',
    description:'ATOMS is a training operation management system thats developed for ABCForTechnology. This is useful for managing their offline training processes .',
    languages:[languagesConstants.vue,languagesConstants.html, languagesConstants.css],
    descriptionHtml:`
    ATOMS is a training operation management system thats developed for ABCForTechnology. This is useful for managing their offline training processes .
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We have made the whole project into screens, module components which will be useful for styling .</li>
    <li>We are using vuetify for beautification and responsiveness .</li>
    <li>We are using both tabular view and big calendar view for displaying lists of sessions for a trainer.</li>
    </ul>
    `,
},


{
    name:'ATOMS App',
    description:' ATOMS App is used to manage students activity for a trainer which includes a qrcode scanner for marking the attendance of students .',
    languages:[languagesConstants.flutter],
    descriptionHtml:`
    ATOMS App is used to manage students activity for a trainer which includes a qrcode scanner for marking the attendance of students .
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We have made the whole project into screens, module components and element components which includes text, buttons etc</li>
    <li>We are using scoped model for state management.</li>
    <li>We are using qr_flutter package for reading the qrcode.</li>
    <li>After scanning the qrcode in every 5 minutes api will be called inorder to upload the attendance to the server .</li>
    </ul>
    `,
},

{
    name:'Online Design Tool',
    description:' Its a Design tool which is use full for the developers and designers to design a website and get the code for that.',
    languages:[languagesConstants.react,languagesConstants.nodejs],
    descriptionHtml:`
    Its a Design tool which is use full for the developers and designers to design a website and get the code for that.
    <br><br>
    <ul>
    <li>We can create design just by drag and drop</li>
    <li>After creation we will be able to see the styles of that particular component.</li>
    </ul>
    `,
},
    
{
    name:'VVFrameWork',
    description:`Its a simple framework written in java which will create and write the react-js code based on the code written in .vv file.`,
    descriptionHtml:`
    Its a simple framework written in java which will create and write the react-js code based on the code written in .vv file.
    <br><br>
    <ul>
    <li>Creation of Screens and components will happen from a single place.</li>
    <li>Writing apis and its redux flow becomes simplified.</li>
    <li>All the apis can be listed in one file with more readable format.</li>
    </ul>
    `,
    languages:[languagesConstants.java]
},
{
    name:'Storybook App',
    description:' Its a reactnative app which will allows you to read and write stories,poems etc.Its a  good platform to display your writing skills.',
    languages:[languagesConstants.reactnative,languagesConstants.nodejs],
    descriptionHtml:`
    Its a reactnative app which will allows you to read and write stories,poems etc.Its a  good platform to display your writing skills.
    <br><br>
    <ul>
    <li>Easy to write and edit the contents using  powerful rich text editor quilljs.</li>
    <li>Easy to share your works as pdf</li>
    <li>You can read the works of others and share them</li>
    </ul>
    `,
},
{
    name:'Ampliz Extension',
    description:' Ampliz extension can be used to get the information of the websites which includes their revenues, employees etc. If we took one website and open the ampliz extension we will get the informations about that website.',
    languages:[languagesConstants.angular,languagesConstants.html,languagesConstants.css],
    descriptionHtml:`
    Ampliz extension can be used to get the information of the websites which includes their revenues, employees etc. If we took one website and open the ampliz extension we will get the informations about that website.
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We are using bootstrap for styling and responsiveness.</li>
    <li>We have made the whole project into screens, module components .</li>
    </ul>
    `,
},
{
    name:'VITA Web',
    description:' VITA is a Virtual interactive training and assessment platform where we can create trainings via phone calls based on IVR. We are using the apis provided by variform solutions for creating trainings based on IVR . This product mainly concentrates on employees who doesn’t have smartphones so that they can attend the training using interactive voice response .',
    languages:[languagesConstants.angular],
    descriptionHtml:`
    VITA is a Virtual interactive training and assessment platform where we can create trainings via phone calls based on IVR. We are using the apis provided by variform solutions for creating trainings based on IVR . This product mainly concentrates on employees who doesn’t have smartphones so that they can attend the training using interactive voice response .
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We are treating most of the screens as components which makes styling easier.</li>
    <li>We are using bootstrap for styling.</li>
    <li>We are using IVR(Interactive voice response) based solution apis provided by variform.</li>
    </ul>
    `,
},

{
    name:'Mobe App',
    description:' VITA is a Virtual interactive training and assessment platform where we can create trainings via phone calls based on IVR. We are using the apis provided by variform solutions for creating trainings based on IVR . This product mainly concentrates on employees who doesn’t have smartphones so that they can attend the training using interactive voice response .',
    languages:[languagesConstants.reactnative],
    descriptionHtml:`
    VITA is a Virtual interactive training and assessment platform where we can create trainings via phone calls based on IVR. We are using the apis provided by variform solutions for creating trainings based on IVR . This product mainly concentrates on employees who doesn’t have smartphones so that they can attend the training using interactive voice response .
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>We are treating every small pieces as components which makes styling easier.</li>
    <li>We are using redux for state management.</li>
    <li>We have used axios for server side interactions.</li>
    </ul>
    `,
},

{
    name:'Staffroom App',
    description:' Staffroom app is a hybrid mobile app developed for managing the students in a class which can be used by professors.We can mark the attendance , internal marks of the students etc using this. We will get the whole details in excel format. Its easy to find the students who has less attendance and internal marks using this and there by student management becomes easier.',
    languages:[languagesConstants.flutter],
    descriptionHtml:`
    Staffroom app is a hybrid mobile app developed for managing the students in a class which can be used by professors.We can mark the attendance , internal marks of the students etc using this. We will get the whole details in excel format. Its easy to find the students who has less attendance and internal marks using this and there by student management becomes easier.
    <br><br>
    <ul>
    <li>Custom component architecture .</li>
    <li>Every small pieces of this app is created as components which includes text, buttons etc.</li>
    <li>We are using scoped model for state management.</li>
    <li>We are using shared preferences for storing the details in the phone itself. </li>
    </ul>
    `,
},
// VITA Web

]

window.onload = () => {
    addProjectCards();
}

var currentActiveElement;



function isHidden(el) {
    return (el.offsetParent === null)
}

getCurrentActiveClass = () => {
    setActiveLink(about, aboutLink);
    setActiveLink(home, homeLink);
    setActiveLink(skills, skillsLink);
    setActiveLink(projects, proLink);
    setActiveLink(education, educationLink);
    // checkOnlyOne();
}

setActiveLink = (el, linkEl) => {
    if(elementInViewport(el)) {
        linkEl.className  = ' nav-link active'; 
        currentActiveElement = el;
    } else {
        linkEl.className  = 'nav-link'; 
    }
}

checkOnlyOne = () => {
    if(skillsLink.className === 'nav-link active') {
        aboutLink.className = '';
    }
    if(aboutLink.className ==='nav-link active') {
        homeLink.className = ''
    }
    if(currentActiveElement===skills) {
        skillsLink.className = 'nav-link active';
    }
    if(currentActiveElement===projects) {
        proLink.className = 'nav-link active';
    }
    if(currentActiveElement===education) {
        educationLink.className = ' nav-link active';
    }
}


addProjectCards = (viewMoreOption=false) => {
    document.getElementById('projectList').innerHTML = '';
    let renderLists = viewMore==false?projectList.slice(0,6):projectList;
    viewMore = renderLists.length !== projectList.length;
    renderLists.forEach((item, index) => {
        var languages = '<h6 style="height:30px" class="card-subtitle mb-2 text-muted">';
        item.languages.forEach((lang, langIndex) => {
            languages = languages + lang.name + `<img src="${lang.url}"
                            height="20px" width="20px" />`+ ((langIndex<item.languages.length-1)?', ':'')
        })
        languages = languages + '</h6>'
        var card = `<div class="col-md-4 my-3" style="min-height:100%">
                            <div class="card" style="min-height:100%">
                            <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <h6>Language</h6>
                            <hr>
                            ${languages}
                            <p class="card-text" style="height:100px;overflow:hidden">${item.description}</p>
                            <button onclick=\"openDetails(${index})\" class="btn btn-dark form-control" style="color: aliceblue;">More details</button>
                            </div>
                        </div>
                    </div>`;
    const ele = document.createElement('div');
    ele.innerHTML = card;
    document.getElementById('viewMoreButton').innerHTML = viewMore?'View More':'View Less';
    document.getElementById('projectList').appendChild(ele.firstChild);
    });
    viewMore==true&&viewMoreOption==true?goToSection('projects'):null;
}

function openDetails(index) {
    console.log(index);
    currentIndex = index;
    var modal = document.getElementById("myModal");
    var modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = '';
    var languages = '<h6 class="card-subtitle mb-2 text-muted">Language:';
    projectList[index].languages.forEach((lang, langIndex) => {
            languages = languages + lang.name + `<img src="${lang.url}"
                            height="20px" width="20px" />`+ ((langIndex<projectList[index].languages.length-1)?', ':'')
        });
    languages = languages + '</h6>'

    var descriptionHtml = `
    <div>
        <span class="close" onclick="closeDetails()">&times;</span>
      <h1>${projectList[index].name}</h1>
      ${languages}
      <div>${projectList[index].descriptionHtml}</div>
  </div>
  `;
  var ele = document.createElement('div');
  ele.innerHTML = descriptionHtml;
  console.log(ele);
  modalBody.appendChild(ele);
    modal.style.display = "block";
    setTimeout(() => {
        modalBody.style.top = "20px";
    }, 10);
}

function closeDetails() {
    var modal = document.getElementById("myModal");
    var modalBody = document.getElementById("modalBody");
    modalBody.style.top = "20%";
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}
function goToSection(item) {
    if(item == 'home') {
    home.scrollIntoView({behavior: 'smooth', block: 'center' });
    } else if(item == 'about') {
        about.scrollIntoView({behavior: 'smooth', block: 'center' });
    } else if(item == 'skills') { 
        skills.scrollIntoView({behavior: 'smooth', block: 'center' });
    } else if(item == 'projects'){
        projects.scrollIntoView({behavior: 'smooth', block: 'center' });
    } else if(item == 'education') {
        education.scrollIntoView({behavior: 'smooth', block: 'center' });
    }
}
checkExperience();

function checkExperience() {
    var joiningDate = new Date('2018-01-27');
    var currentDate = new Date();
    var milliseconds = currentDate-joiningDate;
    var seconds = Math.floor(milliseconds/1000);
    var min = Math.floor(seconds/60);
    var hour = Math.floor(min/60);
    var days = Math.floor(hour/24);
    var months = Math.floor(days/30);
    var years = (months/12).toString().substr(0,3);
    var element = document.getElementById('experience');
    element.innerText = "Experience: " + years.toString().substr(0,3) + " years";
    console.log(years);
}

function openUrl(item) {
    window.open(item);
}