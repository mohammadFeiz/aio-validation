"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AIOValidation;

function AIOValidation(props) {
  var $$ = {
    getErrorA: function getErrorA(target, operaetor, type, message) {
      var lang = props.lang;

      if (message) {
        return message(target);
      }

      return $$['getErrorA_' + lang](target, operaetor, type);
    },
    getErrorA_fa: function getErrorA_fa(target, operator, type) {
      var label = props.label,
          translate = props.translate;
      var error = label;
      error += ' ';

      if (operator === 'l') {
        error += 'باید حداقل';
      }

      if (operator === 'g') {
        error += 'باید حداکثر';
      }

      if (operator === 'e') {
        error += 'نمی تواند';
      }

      error += ' ';
      error += translate(target);
      error += ' ';

      if (type === 'list') {
        error += 'مورد ';
      }

      if (type === 'string') {
        error += 'کاراکتر ';
      }

      error += 'باشد';
      return error;
    },
    getErrorA_en: function getErrorA_en(target, operator, type) {
      var label = props.label,
          translate = props.translate;
      var error = label;

      if (operator === 'l') {
        error += ' should be at least ';
      }

      if (operator === 'g') {
        error += ' should be a maximum of ';
      }

      if (operator === 'e') {
        error += ' cannot be ';
      }

      error += translate(target);

      if (type === 'list') {
        error += ' item';
      }

      if (type === 'string') {
        error += ' character';
      }

      return error;
    },
    getError1: function getError1(message) {
      var lang = props.lang;

      if (message) {
        return message();
      }

      return this['getError1_' + lang]();
    },
    getError1_fa: function getError1_fa() {
      var label = props.label;
      var str = '';
      str += 'وارد کردن';
      str += ' ';
      str += label;
      str += ' ';
      str += 'ضروری می باشد';
      return str;
    },
    getError1_en: function getError1_en() {
      var label = props.label;
      var str = '';
      str += label;
      str += ' is required';
      return str;
    },
    getErrorB: function getErrorB(target, type, message) {
      var lang = props.lang;

      if (message) {
        return message(value);
      }

      return $$['getErrorB_' + lang](target, type);
    },
    getErrorB_fa: function getErrorB_fa(target, type) {
      var label = props.label,
          translate = props.translate;
      var str = '';
      str += label;
      str += ' ';

      if (type === '-') {
        str += 'نباید شامل';
      }

      if (type === '+') {
        str += 'باید شامل';
      }

      str += ' ';

      if (target === 'symbol') {
        str += 'کاراگتر های خاص';
      } else if (target === 'number') {
        str += 'عدد';
      } else if (target === 'letter') {
        str += 'حروف';
      } else if (target === 'uppercase') {
        str += 'حروف بزرگ';
      } else if (target === 'lowercase') {
        str += 'حروف کوچک';
      } else {
        str += translate(target);
      }

      str += ' ';
      str += 'باشد';
      return str;
    },
    getErrorB_en: function getErrorB_en(target, type) {
      var label = props.label,
          translate = props.translate;
      var str = label;

      if (type === '-') {
        str += ' should not contain ';
      }

      if (type === '+') {
        str += ' should contain ';
      }

      if (target === 'symbol') {
        str += 'symbol';
      } else if (target === 'number') {
        str += 'number';
      } else if (target === 'letter') {
        str += 'letter';
      } else if (target === 'uppercase') {
        str += 'uppercase';
      } else if (target === 'lowercase') {
        str += 'lowercase';
      } else {
        str += translate(target);
      }

      return str;
    },
    getErrorC: function getErrorC(target, type, message) {
      var lang = props.lang;

      if (message) {
        return message(target);
      }

      return $$['getErrorC_' + lang](target, type);
    },
    getErrorC_fa: function getErrorC_fa(target, type) {
      var label = props.label,
          translate = props.translate;
      var str = label;
      str += ' ';

      if (type === '-') {
        str += 'نباید ';
      }

      if (type === '+') {
        str += 'باید ';
      }

      str += translate(target);
      str += ' ';
      str += 'باشد';
      return str;
    },
    getErrorC_en: function getErrorC_en(target, type) {
      var label = props.label,
          translate = props.translate;
      var str = label;

      if (type === '-') {
        str += ' cannot be ';
      }

      if (type === '+') {
        str += ' should be ';
      }

      str += translate(target);
      return str;
    },
    getErrorD: function getErrorD(value, message) {
      var lang = props.lang;

      if (message) {
        return message(value);
      }

      return $$['getErrorD_' + lang](value);
    },
    getErrorD_en: function getErrorD_en(value) {
      var label = props.label;
      var str = label;
      str += ' cannot be ';
      str += value;
      return str;
    },
    getErrorD_fa: function getErrorD_fa(value) {
      var label = props.label;
      var str = label;
      str += ' نمیتواند ';
      str += value;
      str += ' باشد';
      return str;
    },
    getError: function getError() {
      var value = props.value,
          _props$errors = props.errors,
          errors = _props$errors === void 0 ? [] : _props$errors;

      for (var i = 0; i < errors.length; i++) {
        var _errors$i = errors[i],
            type = _errors$i.type,
            target = _errors$i.target,
            message = _errors$i.message;

        if (type === 'required' && (value === undefined || value === '' || value === false || value.length === 0)) {
          return $$.getError1(message);
        }

        if (type === 'is' && value === target) {
          return $$.getErrorC(target, '-', message);
        }

        if (type === 'is not' && value !== target) {
          return $$.getErrorC(target, '+', message);
        }

        if (type === 'is in' && target.indexOf(value) !== -1) {
          return $$.getErrorD(value, message);
        }

        if (type === 'is not in' && target.indexOf(value) === -1) {
          return $$.getErrorD(value, message);
        }

        if (Array.isArray(value)) {
          if (type === 'equal' && value.length === target) {
            return $$.getErrorA(target, 'e', 'list', message);
          }

          if (type === 'less' && value.length < target) {
            return $$.getErrorA(target, 'l', 'list', message);
          }

          if (type === 'greater' && value.length > target) {
            return $$.getErrorA(target, 'g', 'list', message);
          }
        }

        if (typeof value === 'number') {
          if (type === 'equal' && value === target) {
            return $$.getErrorA(target, 'e', 'number', message);
          }

          if (type === 'less' && value < target) {
            return $$.getErrorA(target, 'l', 'number', message);
          }

          if (type === 'greater' && value > target) {
            return $$.getErrorA(target, 'g', 'number', message);
          }
        }

        if (typeof value === 'string') {
          if (type === 'equal' && value.length === target) {
            return $$.getErrorA(target, 'e', 'string', message);
          }

          if (type === 'less' && value.length < target) {
            return $$.getErrorA(target, 'l', 'string', message);
          }

          if (type === 'greater' && value.length > target) {
            return $$.getErrorA(target, 'g', 'string', message);
          }

          if (type === 'contain') {
            if (target === 'symbol') {
              var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

              if (format.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }

            if (target === 'number') {
              var _format = /\d/;

              if (_format.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }

            if (target === 'letter') {
              var _format2 = /[a-zA-Z]/;

              if (_format2.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }

            if (target === 'uppercase') {
              var _format3 = /[A-Z]/;

              if (_format3.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }

            if (target === 'lowercase') {
              var _format4 = /[a-z]/;

              if (_format4.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }

            if (typeof target.test === 'function') {
              if (target.test(value)) {
                return $$.getErrorB(target, '-', message);
              }
            }
          }

          if (type === 'not contain') {
            if (target === 'symbol') {
              var _format5 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

              if (!_format5.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }

            if (target === 'number') {
              var _format6 = /\d/;

              if (!_format6.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }

            if (target === 'letter') {
              var _format7 = /[a-zA-Z]/;

              if (!_format7.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }

            if (target === 'uppercase') {
              var _format8 = /[A-Z]/;

              if (!_format8.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }

            if (target === 'lowercase') {
              var _format9 = /[a-z]/;

              if (!_format9.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }

            if (typeof target.test === 'function') {
              if (!target.test(value)) {
                return $$.getErrorB(target, '+', message);
              }
            }
          }
        }
      }

      return '';
    }
  };

  props.translate = props.translate || function (text) {
    return text;
  };

  props.lang = props.lang || 'en';
  var error;

  try {
    error = $$.getError();
  } catch {
    error = '';
  }

  return error;
}