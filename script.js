function cleanUpIndex() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function createSingleIndex(card) {
    return `<a href="page3.html"><div class="contact">${card.name}</div></a>`
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

function renderIndex(contactList) {
    let classMain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classMain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}