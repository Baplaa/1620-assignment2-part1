// Index Page JS //
function cleanUpIndex() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function createSingleIndex(card) {
    return `<a href="page3.html"><div class="contact">${card.name}</div></a>`
}

function renderIndex(contactList) {
    let classMain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classMain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

// View Page JS // 
function cleanUpView() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function renderView(contact) {
    let classMain = document.querySelector('.main')

    // Top Part //
    classMain.insertAdjacentHTML('afterbegin', `<div class='contactinfo'></div>`)
    let contactInfo = document.querySelector('.contactinfo')

    let contactAvatar = `<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">`
    contactInfo.insertAdjacentHTML('beforeend', contactAvatar)

    // Middle Part //
    let contactType = ['name', 'email', 'phone', 'address']
    let pushedContent = []
    pushedContent.push(`<div class="contact${contactType[0]}">${contact[contactType[0]]}</div>`)

    for (let i = 1; i <= 3; i++) {
        pushedContent.push(`<div class="contact${contactType[i]}">${contactType[i]}: ${contact[contactType[i]]}</div>`)
    }

    for (let i = 0; i <= 3; i++) {
        contactInfo.insertAdjacentHTML('beforeend', pushedContent[i])
    }

    // Bottom Part //
    let viewButtons = 
    `<div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>`
    contactInfo.insertAdjacentHTML('beforeend', viewButtons)
}

// I used the sample contactList, very cool Jeremy! //
const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},
    {    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]