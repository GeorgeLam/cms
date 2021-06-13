const validateInput = (contentType, input, types = null, strict = false) => {
    let errors = [];

    if(!types) types = validationTypes[contentType];

    for(let type in types){
        if(!!strict && types[type].required === true && !input[type]) errors.push(`You didn't include the following mandatory field: '${type}'`);
        if(!input[type]) continue;

        if(typeof(input[type]) !== types[type].type) errors.push(`Failed type match on '${type}': you supplied a ${typeof(input[type])}, while the required type is a ${types[type].type}`);
        if(types[type].maxLength && typeof(input[type]) === 'string' && input[type].length > types[type].maxLength) errors.push(`Your input for '${type}' was too long: maximum length is ${types[type].maxLength}`);
        if(types[type].minLength && typeof(input[type]) === 'string' && input[type].length < types[type].minLength) errors.push(`Your input for '${type}' was too short: minimum length is ${types[type].minLength}`);
        
        if(types[type].mustContain) {
            types[type].mustContain.forEach(char => {
                if(input[type].indexOf(char) === -1) errors.push(`The field '${type}' must contain a ${char}`)
            });
        }
    }
    if(errors.length) return errors;
    return false;
}

const validationTypes = {
    "post": {
        'title': {
            'type': 'string',
            'required': true,
            'maxLength': 60
        },
        'content': {
            'type': 'string',
            'required': true,
            'maxLength': 5000,
            'minLength': 10
        },
        'blogId': {
            'type': 'number',
            'required': true
        },
        'authorId': {
            'type': 'number',
            'required': true
        }
    },
    "comment": {
        'content': {
            'type': 'string',
            'required': true,
            'maxLength': 5000,
            'minLength': 10
        },
        'postId': {
            'type': 'number',
            'required': true
        },
        'authorId': {
            'type': 'number',
            'required': true
        }
    },
    "user": {
        'email': {
            'type': 'string',
            'mustContain': ['@', '.'],
            'required': true,
            'maxLength': 100,
            'minLength': 6
        },
        'forename': {
            'type': 'string',
            'required': true,
            'maxLength': 32,
            'minLength': 2
        },
        'surname': {
            'type': 'string',
            'required': true,
            'maxLength': 32,
            'minLength': 2
        },
        'url': {
            'type': 'string',
            'required': true,
            'maxLength': 32,
            'minLength': 2
        },
    }
}

module.exports = {validateInput};