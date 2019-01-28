function loadContacts(){
    $.ajax('contacts.json').done(function (contacts) {
displayContacts(contacts);
    })
}

function displayContacts(contacts){
    var rows = contacts.map(function(contact) {
        console.log(contact);
        return `<tr>
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.phoneNumber}</td>
        <td><a href="contacts/delete?phone=${contact.phoneNumber}">X</a></td>
        </tr>`;
    });
    console.warn(rows);
    document.querySelector('tbody').innerHTML = rows.join('');
}

// - start app
loadContacts();