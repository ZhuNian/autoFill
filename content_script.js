var TYPES_DEFAULT_VALUE = {
  date: {
    value: '1985-01-01',
    valueType: 'value'
  },
  email: {
    value: 'example@google.com',
    valueType: 'value'
  },
  number: {
    value: '123',
    valueType: 'value'
  },
  password: {
    value: '3edc#EDC3edc',
    valueType: 'value'
  },
  tel: {
    value: '13297008783',
    valueType: 'value'
  },
  checkbox: {
    value: true,
    valueType: 'checked'
  }
};

var ID_OR_CLASS_REG = {
  'email': TYPES_DEFAULT_VALUE['email'].value,
  'name': '测试',
  'cert|(id(card|(n|N)o))': '445100197412271485'
};

var TYPES_IGNORED = {
  hidden: '',
  submit: ''
};

var inputLists = Array.prototype.slice.call(document.getElementsByTagName('input'), 0).filter(function(i) {
  return !(i.type in TYPES_IGNORED);
}) || [];

fillByType(inputLists);
fillByIdOrClass(inputLists);



function fillByType(inputLists) {
  inputLists.forEach(function(i) {
    var type = TYPES_DEFAULT_VALUE[i.type];

    if(!type || i[type.valueType]) {
      return;
    }

    i[type.valueType] = type.value;
  });
}


function fillByIdOrClass(inputLists) {
  inputLists.forEach(function(i) {
    var identity = [i.className, i.id, i.name].join(' ');

    if(!identity || i.value) {
      return;
    }

    for(var reg in ID_OR_CLASS_REG) {
      if((new RegExp(reg)).test(identity)) {
        i.value = ID_OR_CLASS_REG[reg];
      } 
    }
  });
}
