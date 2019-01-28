var phoneToEdit = '';

function loadContacts() {
    $.ajax('data/contacts.json').done(function(contacts){
        console.info('contacts loaded', contacts);
        window.globalContacts = contacts;
        displayContacts(contacts);
    });
}

function getNewRow() {
    return `<tr>
            <td><input type="text" name="firstName" placeholder="First Name"/></td>
            <td><input type="text" name="lastName" placeholder="Last Name"/></td>
            <td><input type="text" name="phone" placeholder="Phone"/></td>
            <td><button onclick="saveContact()">Save</button></td>
        </tr>`;
}

function saveContact() {
    var firstName = document.querySelector('input[name=firstName]').value;
    var lastName = $('input[name=lastName]').val();
    var phone = $('input[name=phone]').val();
    console.debug('saveContact...', firstName, lastName, phone);
    
    // var actionUrl = '';
    // if (phoneToEdit){ actionUrl = 'contacts/update' } else {actionUrl = 'contacts/create'}
    var actionUrl = phoneToEdit ? 'contacts/update?phone=' + phoneToEdit : 'contacts/create';
    
    $.post(actionUrl, {
        firstName, // shortcut from ES6 (key is the same as value variable name)
        lastName,
        phone: phone // ES5 (key = value)
    }).done(function(response){
        console.warn('done create contact', response);
        phoneToEdit = '';
        if (response.success) {
            loadContacts();
        }
    });
}

function displayContacts(contacts) {
    var rows = contacts.map(function(contact) {
        console.log('transform contact', contact);
        return `<tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td>
                <a href="/contacts/delete?phone=${contact.phone}">&#10006;</a>
                <a href="#" class="edit" data-id="${contact.phone}">&#9998;</a>
            </td>
        </tr>`;
    });
    console.warn('rows', rows);
    
    //rows.push(getNewRow()); // simplified
    var actions = getNewRow();
    rows.push(actions);

    document.querySelector('tbody').innerHTML = rows.join('');
}

function initEvents() {
    // TODO use native click
    $("tbody").delegate( "a.edit", "click", function() {
        phoneToEdit = this.getAttribute('data-id');

        var contact = globalContacts.find(function(contact){
            return contact.phone == phoneToEdit;
        });
        console.log('edit', phoneToEdit, contact);
        
        document.querySelector('input[name=firstName]').value = contact.firstName;
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=phone]').val(contact.phone);
    });
}

// - start app

loadContacts();
initEvents();