const resizer = document.querySelector("#resizer");
const sidebar = document.querySelector("#sidebar");

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false);
  }, false);
});

function resize(e) {
  const size = `${e.x}px`;
  sidebar.style.flexBasis = size;
}

/** 
 * Helpers 
 */

const date = new Date();
            const [hour, minutes, day, month, year] = [
                  date.getHours(),
                  date.getMinutes(),
                  date.getDate(),
                  date.getMonth(),
                  date.getFullYear()
            ]
            let fMonth = month+1;
            if(fMonth<10){
              fMonth = `0${fMonth}`
            }
            
            


sidebar.style.flexBasis = '325px';
const mainContent = document.querySelector("#main-content-wrapper");

const persons = [
  ['img/icons/telegram.svg','Telegram', '#1'],
  ['img/icons/somebody.jpg','Somebody', '#2'],
  ['img/icons/rasul.jpg','Rasul', '#3'],
  ['img/icons/konul.jpg','Könlümün Sevgili Məhbubu dfvfrd', '#4'],
  ['img/icons/chubby.jpg','Chubby', '#5']
]
let personsLen = persons.length;
class Person {
  constructor(src, title){
    this.src = src
    this.title = title
  }
}
const sidebarList = document.querySelector('.sidebar-list')
const chatInfo = document.querySelector('.chat-info')

const avatar = document.querySelector('.avatar')
const title = document.querySelector('.title')
let url = window.location.href

const activeUrl = url.substr((url.length - 2), 2)
const id = url.substr((url.length - 1), 1)

if(personsLen === 0){
  sidebarList.style.display = "none";
}
for(let i = 0; i < personsLen; i++){

  const person = new Person(persons[i][0], persons[i][1]);
  sidebarList.innerHTML += `
  <div class="list-item" id="list-item">
      <a href="${persons[i][2]}" class="list-item-btn" role="button">
          <div class="status">
              <div class="avatar">
              <img src="${person.src}">
              </div>
          </div>
          <div class="info">
              <div class="info-row">
                  <div class="title">
                  <h3 class="full-name">${person.title}</h3>
                  </div>
                  <div class="seperator"></div>
                  <div class="last-message-meta">
                      <span class="time"><img src="img/icons/tik.svg" alt="" style="margin-right:3px;">${hour}:${minutes}</span>
                  </div>
              </div>
              
              <div class="subtitle">
                  <div class="last-message">
                     <p>Last Message Last Message Last MessageLast Message Last Message Last Message</p> 
                  </div>
              </div>
          </div>
      </a>
  </div>
`

    chatInfo.innerHTML = `
            <div class="status">
                <div class="avatar">
                
                </div>
            </div>
            <div class="info">
                <div class="info-row">
                    <div class="title">
                    
                    </div>
                </div>
                
                <div class="subtitle">
                    <div class="last-seen">
                      <p>5 min ago</p> 
                    </div>
                </div>
            </div>
  `
  
}


// Get the container element
const btnContainer = document.getElementById("sidebar-list");

// Get all buttons with class="btn" inside the container
const btns = btnContainer.querySelectorAll(".list-item-btn");
const current = document.getElementsByClassName("active");
const main = document.getElementById("main");

if(current.length === 0){
  main.style.opacity = "0";
}

if(!(btns===null)){
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      
        main.style.opacity = "1";
        const avatarImg = document.getElementsByClassName("avatar");
        const titleName = document.getElementsByClassName("title");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        const activeId = this.href.substr((this.href.length - 2), 2);
        for(var l = 0; l < personsLen; l++){
          if(activeId === persons[l][2]){
            console.log(avatar, avatarImg, avatarImg[personsLen], activeId, persons[l][2], personsLen)
            avatarImg[personsLen].innerHTML = `<img src="${persons[l][0]}">`
            titleName[personsLen].innerHTML = `<h3 class="full-name">${persons[l][1]}</h3>`




            const msgGroup = document.querySelector(".message-group");
                  msgGroup.id = activeId;
            const activeChat = document.getElementById(activeId);

            const input = document.querySelector(".message-input");
            const sendBtn = document.querySelector(".send-btn");

            
            const stickyDate = document.createElement('div')
            const time = document.createTextNode(`${day}.${fMonth}.${year}`)
                  stickyDate.classList = 'sticky-date'
                  stickyDate.appendChild(time)

            sendBtn.addEventListener("click", function(){
              if(activeChat.querySelector('.sticky-date') == null){
                activeChat.appendChild(stickyDate)
              }
              if(input.value != ""){


              
            const messageListItem = document.createElement('div')
                  messageListItem.classList = 'message-list-item'
                  messageListItem.id = "message1";
                  activeChat.appendChild(messageListItem);
                  
                
            const textContent = document.createElement('div')
                  textContent.classList = 'text-content'
                  if(messageListItem.querySelector('.text-content') == null){
                    messageListItem.appendChild(textContent);
                  }

            const messageContent = document.createElement('div')
                  messageContent.classList = 'message-content'
                  if(textContent.querySelector('.message-content') == null){
                    textContent.appendChild(messageContent);
                  }
            const messageMeta = document.createElement('span')
                  messageMeta.classList = 'message-meta'
                  if(textContent.querySelector('.message-meta') == null){
                    textContent.appendChild(messageMeta);
                  }
            const messageTime = document.createElement('span')
                  messageTime.classList = 'message-time'
            const d = new Date()
            let timeNow = `${d.getHours()}:${d.getMinutes()}`;
            console.log(timeNow)
                  if(messageMeta.querySelector('.message-time') == null){
                    messageMeta.appendChild(messageTime);
                    messageTime.innerText = timeNow;
                  }
            const seen = document.createElement('img');
                  seen.src = "img/icons/tik.svg";
                  seen.style.width = "12px";
                  if(messageMeta.querySelector('img') == null){
                    messageMeta.appendChild(seen);
                  }
            
                messageContent.innerText = input.value;
              }
              
              input.value = "";
            });







          }
        }
      this.className += " active";
    });
  }
}
