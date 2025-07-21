function displayMenu(){
    console.log("Contact Book Menu:");
    console.log("1. Add Contact");
    console.log("2. View Contact");
    console.log("3. Edit Contact");  
}

function addContact(contact_book){
    let name = prompt();
    if (name in contact_book){
        console.log("Contact already exists!")
        return;
    }
    let phone = prompt();
    let email = prompt();
    let address = prompt();
    contact_book[name] = {'phone': phone, 'email': email, 'address': address}
    console.log("Contact added successfully!");
}

function viewContact(contact_book){
    let name = prompt();

    if (!name){
        console.log("Name cannot be empty!");
        return;
    }

    if (name in contact_book){
        let contact = contact_book[name];
        console.log(`Name: ${name}`);
        console.log(`Phone: ${contact['phone']}`);
        console.log(`Email: ${contact['email']}`);
        console.log(`Address: ${contact['address']}`);
    } else {
        console.log("Contact not found!")
    }
}

function editContact(contact_book){
    let name = prompt().trim();

    if (name in contact_book){
        let phone = prompt().trim();
        let email = prompt().trim();
        let address = prompt().trim();

        contact_book[name] = {
            'phone': phone || contact_book[name].phone,
            'email': email || contact_book[name].email,
            'address': address || contact_book[name].address}
        console.log("Contact updated successfully!")
    } else {
        console.log("Contact not found!")
    }
}

function deleteContact(contact_book){
    let name = prompt().trim();

    if (name in contact_book){
        delete contact_book[name];
        console.log("Contact deleted successfully!")
    } else {
        console.log("Contact not found!")
    }
}

function listAllContacts(contact_book){
    if (Object.keys(contact_book).length === 0) {
        console.log("No contacts available.")
    } else {
        for (const [name, details] of Object.entries(contact_book)){
            console.log(`Name: ${name}`);
            console.log(`Phone: ${details.phone}`);
            console.log(`Email: ${details.email}`);
            console.log(`Address: ${details.address}`);
            console.log('');
        }
    }
}

function main(){
    let contact_book = {};
    let choice = '';

    while (true){
        displayMenu();
        choice = prompt();

        switch (choice){
            case '1':
                addContact(contact_book);
                break;
            case '2':
                viewContact(contact_book);
                break;
            case '3':
                editContact(contact_book);
                break;
            case '4':
                deleteContact(contact_book);
                break;
            case '5':
                listAllContacts(contact_book);
                break;
            case '6':
                return;
            default:
                console.log("Enter a choice.")
        }    
    }
}

main();
