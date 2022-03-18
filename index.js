"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AIOValidation;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AIOValidation(props) {
  var dateCalc = DateCalculator();
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

      if (type === 'date') {
        if (operator === 'l') {
          error += 'نمی تواند قبل از';
        }

        if (operator === 'g') {
          error += 'نمی تواند بعد از';
        }

        if (operator === 'e') {
          error += 'نمی تواند برابر';
        }

        error += ' ';
        error += translate(target);
        error += ' ';
        error += 'باشد';
        return error;
      } else {
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
      }
    },
    getErrorA_en: function getErrorA_en(target, operator, type) {
      var label = props.label,
          translate = props.translate;
      var error = label;

      if (type === 'date') {
        if (operator === 'l') {
          error += ' connot be before ';
        }

        if (operator === 'g') {
          error += ' cannot be after ';
        }

        if (operator === 'e') {
          error += ' cannot be ';
        }

        error += translate(target);
        return error;
      } else {
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
      }
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

        if (type === '=') {
          if (Array.isArray(target)) {
            if (target.indexOf(value) !== -1) {
              return $$.getErrorD(value, message);
            }
          } else if (typeof value === 'string') {
            if (value.indexOf('/') !== -1) {
              if (dateCalc.isEqual(value, target)) {
                return $$.getErrorA(target, 'e', 'date', message);
              }
            } else if (typeof target === 'number') {
              if (value.length === target) {
                return $$.getErrorA(target, 'e', 'string', message);
              }
            } else if (typeof target === 'string') {
              if (value === target) {
                return $$.getErrorC(target, '-', message);
              }
            }
          } else if (Array.isArray(value) && typeof target === 'number') {
            if (value.length === target) {
              return $$.getErrorA(target, 'e', 'list', message);
            }
          } else if (value === target) {
            return $$.getErrorC(target, '-', message);
          }
        } else if (type === '!=') {
          if (Array.isArray(target)) {
            if (target.indexOf(value) === -1) {
              return $$.getErrorD(value, message);
            }
          } else if (value !== target) {
            return $$.getErrorC(target, '+', message);
          }
        } else if (type === '<') {
          if (Array.isArray(value)) {
            if (value.length < target) {
              return $$.getErrorA(target, 'l', 'list', message);
            }
          } else if (typeof value === 'number') {
            if (value < target) {
              return $$.getErrorA(target, 'l', 'number', message);
            }
          } else if (typeof value === 'string') {
            if (value.indexOf('/') !== -1 && dateCalc.isLess(value, target)) {
              return $$.getErrorA(target, 'l', 'date', message);
            } else if (value.length < target) {
              return $$.getErrorA(target, 'l', 'string', message);
            }
          }
        } else if (type === '>') {
          if (Array.isArray(value)) {
            if (value.length > target) {
              return $$.getErrorA(target, 'g', 'list', message);
            }
          } else if (typeof value === 'number') {
            if (value > target) {
              return $$.getErrorA(target, 'g', 'number', message);
            }
          } else if (typeof value === 'string') {
            if (value.indexOf('/') !== -1 && dateCalc.isGreater(value, target)) {
              return $$.getErrorA(target, 'g', 'date', message);
            } else if (value.length > target) {
              return $$.getErrorA(target, 'g', 'string', message);
            }
          }
        }

        if (typeof value === 'string') {
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

function DateCalculator() {
  var $$ = {
    getSplitter: function getSplitter(value) {
      var splitter = '/';

      for (var i = 0; i < value.length; i++) {
        if (isNaN(parseInt(value[i]))) {
          return value[i];
        }
      }

      return splitter;
    },
    convertToArray: function convertToArray(o) {
      var setDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var list;

      if (Array.isArray(o)) {
        list = _toConsumableArray(o);
      } else if (typeof o === 'string') {
        list = o.split($$.getSplitter(o));
        list = list.map(function (o) {
          return parseInt(o);
        });
      } else {
        return false;
      }

      if (setDefault) {
        var _list = list,
            _list2 = _slicedToArray(_list, 4),
            y = _list2[0],
            _list2$ = _list2[1],
            m = _list2$ === void 0 ? 1 : _list2$,
            _list2$2 = _list2[2],
            d = _list2$2 === void 0 ? 1 : _list2$2,
            _list2$3 = _list2[3],
            h = _list2$3 === void 0 ? 0 : _list2$3;

        return [y, m, d, h];
      } else {
        return list;
      }
    },
    gregorianToJalali: function gregorianToJalali(o) {
      var _$$$convertToArray = $$.convertToArray(o),
          _$$$convertToArray2 = _slicedToArray(_$$$convertToArray, 3),
          gy = _$$$convertToArray2[0],
          gm = _$$$convertToArray2[1],
          gd = _$$$convertToArray2[2];

      var g_d_m, jy, jm, jd, gy2, days;
      g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      gy2 = gm > 2 ? gy + 1 : gy;
      days = 355666 + 365 * gy + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
      jy = -1595 + 33 * ~~(days / 12053);
      days %= 12053;
      jy += 4 * ~~(days / 1461);
      days %= 1461;

      if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
      }

      if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + days % 31;
      } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + (days - 186) % 30;
      }

      return [jy, jm, jd];
    },
    jalaliToGregorian: function jalaliToGregorian(o) {
      var _$$$convertToArray3 = $$.convertToArray(o),
          _$$$convertToArray4 = _slicedToArray(_$$$convertToArray3, 3),
          jy = _$$$convertToArray4[0],
          jm = _$$$convertToArray4[1],
          jd = _$$$convertToArray4[2];

      var sal_a, gy, gm, gd, days;
      jy += 1595;
      days = -355668 + 365 * jy + ~~(jy / 33) * 8 + ~~((jy % 33 + 3) / 4) + jd + (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
      gy = 400 * ~~(days / 146097);
      days %= 146097;

      if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
      }

      gy += 4 * ~~(days / 1461);
      days %= 1461;

      if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
      }

      gd = days + 1;
      sal_a = [0, 31, gy % 4 === 0 && gy % 100 !== 0 || gy % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) {
        gd -= sal_a[gm];
      }

      return [gy, gm, gd];
    },
    compaireDate: function compaireDate(_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 4),
          year1 = _ref3[0],
          month1 = _ref3[1],
          day1 = _ref3[2],
          hour1 = _ref3[3];

      var _ref4 = _slicedToArray(_ref2, 4),
          year2 = _ref4[0],
          month2 = _ref4[1],
          day2 = _ref4[2],
          hour2 = _ref4[3];

      if (year1 < year2) {
        return 'less';
      }

      if (year1 > year2) {
        return 'greater';
      }

      if (month1 < month2) {
        return 'less';
      }

      if (month1 > month2) {
        return 'greater';
      }

      if (day1 < day2) {
        return 'less';
      }

      if (day1 > day2) {
        return 'greater';
      }

      if (hour1 < hour2) {
        return 'less';
      }

      if (hour1 > hour2) {
        return 'greater';
      }

      return 'equal';
    },
    isLess: function isLess(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2, false);

      for (var i = 0; i < o1.length; i++) {
        if (o2[i] === undefined) {
          o2[i] = o1[i];
        }
      }

      return $$.compaireDate(o1, o2) === 'less';
    },
    isEqual: function isEqual(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2, false);

      for (var i = 0; i < o1.length; i++) {
        if (o2[i] === undefined) {
          o2[i] = o1[i];
        }
      }

      return $$.compaireDate(o1, o2) === 'equal';
    },
    isGreater: function isGreater(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2, false);

      for (var i = 0; i < o1.length; i++) {
        if (o2[i] === undefined) {
          o2[i] = o1[i];
        }
      }

      return $$.compaireDate(o1, o2) === 'greater';
    },
    isBetween: function isBetween(o1, _ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          o2 = _ref6[0],
          o3 = _ref6[1];

      if (!o1 || !o2 || !o3) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2, false);
      o3 = $$.convertToArray(o3, false);

      for (var i = 0; i < o1.length; i++) {
        if (o2[i] === undefined) {
          o2[i] = o1[i];
        }

        if (o3[i] === undefined) {
          o3[i] = o1[i];
        }
      }

      return $$.compaireDate(o1, o2) === 'greater' && $$.compaireDate(o1, o3) === 'less';
    },
    getByOffset: function getByOffset(_ref7) {
      var date = _ref7.date,
          offset = _ref7.offset,
          _ref7$unit = _ref7.unit,
          unit = _ref7$unit === void 0 ? 'day' : _ref7$unit,
          _ref7$calendarType = _ref7.calendarType,
          calendarType = _ref7$calendarType === void 0 ? 'gregorian' : _ref7$calendarType;

      if (!offset) {
        return date;
      }

      var fn = $$['get' + (Math.sign(offset) > 0 ? 'Next' : 'Prev') + {
        'hour': 'Hour',
        'day': 'Day',
        'month': 'Month'
      }[unit]];
      var abs = Math.abs(offset);

      for (var i = 0; i < abs; i++) {
        date = fn(date, calendarType);
      }

      return date;
    },
    getNextHour: function getNextHour(_ref8, calendarType) {
      var _ref9 = _slicedToArray(_ref8, 4),
          year = _ref9[0],
          month = _ref9[1],
          day = _ref9[2],
          hour = _ref9[3];

      if (hour < 23) {
        return [year, month, day, hour + 1];
      }

      var a = $$.getNextDay([year, month, day], calendarType);
      return [a[0], a[1], a[2], 0];
    },
    getPrevHour: function getPrevHour(_ref10, calendarType) {
      var _ref11 = _slicedToArray(_ref10, 4),
          year = _ref11[0],
          month = _ref11[1],
          day = _ref11[2],
          hour = _ref11[3];

      if (hour > 0) {
        return [year, month, day, hour - 1];
      }

      var a = $$.getPrevDay([year, month, day], calendarType);
      return [a[0], a[1], a[2], 23];
    },
    getNextDay: function getNextDay(_ref12, calendarType) {
      var _ref13 = _slicedToArray(_ref12, 4),
          year = _ref13[0],
          month = _ref13[1],
          day = _ref13[2],
          hour = _ref13[3];

      if (day < $$.getMonthDaysLength(year, month, calendarType)) {
        return [year, month, day + 1, hour];
      }

      if (month < 12) {
        return [year, month + 1, 1, hour];
      }

      return [year + 1, 1, 1, hour];
    },
    getPrevDay: function getPrevDay(_ref14, calendarType) {
      var _ref15 = _slicedToArray(_ref14, 3),
          year = _ref15[0],
          month = _ref15[1],
          day = _ref15[2];

      if (day > 1) {
        return [year, month, day - 1];
      }

      if (month > 1) {
        month -= 1;
        day = $$.getMonthDaysLength(year, month, calendarType);
        return [year, month, day];
      }

      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year, month, calendarType);
      return [year, month, day];
    },
    getNextMonth: function getNextMonth(_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
          year = _ref17[0],
          month = _ref17[1];

      return month < 12 ? [year, month + 1, 1] : [year + 1, 1, 1];
    },
    getPrevMonth: function getPrevMonth(_ref18) {
      var _ref19 = _slicedToArray(_ref18, 2),
          year = _ref19[0],
          month = _ref19[1];

      return month > 1 ? [year, month - 1, 1] : [year - 1, 12, 1];
    },
    GetMonthDaysLength: {
      jalali: function jalali(year, month) {
        if (month <= 6) {
          return 31;
        }

        if (month <= 11) {
          return 30;
        }

        if ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(year % 33) === -1) {
          return 29;
        }

        return 30;
      },
      gregorian: function gregorian(year, month) {
        return new Date(year, month, 0).getDate();
      }
    },
    getMonthDaysLength: function getMonthDaysLength(year, month, calendarType) {
      return $$.GetMonthDaysLength[calendarType](year, month);
    },
    GetWeekDay: {
      jalali: function jalali(_ref20) {
        var _ref21 = _slicedToArray(_ref20, 3),
            year = _ref21[0],
            month = _ref21[1],
            day = _ref21[2];

        var offset;
        var weekDays = $$.getWeekDays('jalali');

        if ($$.isEqual([year, month, day], [1399, 12, 30])) {
          offset = 0;
        } else if ($$.isLess([year, month, day], [1399, 12, 30])) {
          offset = (-$$.getDaysBetween([year, month, day], [1399, 12, 30]) - 1) % 7;

          if (offset < 0) {
            offset += 7;
          }
        } else {
          offset = ($$.getDaysBetween([1399, 12, 30], [year, month, day]) + 1) % 7;
        }

        return {
          weekDay: weekDays[offset],
          index: offset
        };
      },
      gregorian: function gregorian(_ref22) {
        var _ref23 = _slicedToArray(_ref22, 3),
            year = _ref23[0],
            month = _ref23[1],
            day = _ref23[2];

        var offset = new Date(year, month - 1, day).getDay();
        var weekDays = $$.getWeekDays('gregorian');
        return {
          weekDay: weekDays[offset],
          index: offset
        };
      }
    },
    getWeekDay: function getWeekDay(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gregorian';
      return $$.GetWeekDay[calendarType](date);
    },
    getWeekDays: function getWeekDays(calendarType) {
      return {
        jalali: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        gregorian: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
      }[calendarType];
    },
    getMonths: function getMonths(calendarType) {
      return {
        jalali: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        gregorian: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
      }[calendarType];
    },
    getDaysBetween: function getDaysBetween(start, end) {
      if (end[0] - start[0] === 0) {
        return Math.max($$.getDayIndexInYear(end) - $$.getDayIndexInYear(start) - 1, 0);
      }

      var result = 0;

      if (end[0] - start[0] > 1) {
        var leaps = $$.getLeapBetweenYears(start[0], end[0]);
        var notLeaps = Math.max(end[0] - start[0] - 1 - leaps, 0);
        result = leaps * 366 + notLeaps * 365;
      }

      result += $$.getDayIndexInYear(end) - 1;
      result += ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(start[0] % 33) !== -1 ? 366 : 365) - $$.getDayIndexInYear(start);
      return result;
    },
    getDayIndexInYear: function getDayIndexInYear(_ref24) {
      var _ref25 = _slicedToArray(_ref24, 3),
          year = _ref25[0],
          month = _ref25[1],
          day = _ref25[2];

      var index = 0;

      for (var i = 1; i < month; i++) {
        index += i <= 6 ? 31 : 30;
      }

      return index + day;
    },
    getLeapBetweenYears: function getLeapBetweenYears(start, end) {
      var count = 0;
      start++;

      while (start < end) {
        if ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(start % 33) !== -1) {
          count++;
        }

        start++;
      }

      return count;
    },
    GetToday: {
      jalali: function jalali(unit) {
        var dateObject = new Date();
        var date = dateObject.toLocaleDateString('fa-IR').split('/');
        var dic = {
          '۰': 0,
          '۱': 1,
          '۲': 2,
          '۳': 3,
          '۴': 4,
          '۵': 5,
          '۶': 6,
          '۷': 7,
          '۸': 8,
          '۹': 9
        };

        for (var j = 0; j < date.length; j++) {
          var str = '';

          for (var i = 0; i < date[j].length; i++) {
            str += dic[date[j][i]];
          }

          date[j] = Number(str);
        }

        date.push(dateObject.getHours());

        if (unit === 'day') {
          date[3] = 0;
        }

        if (unit === 'month') {
          date[2] = 1;
          date[3] = 0;
        }

        return date;
      },
      gregorian: function gregorian(unit) {
        var date = new Date();
        var result = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours()];

        if (unit === 'day') {
          date[3] = 0;
        }

        if (unit === 'month') {
          date[2] = 1;
          date[3] = 0;
        }

        return result;
      }
    },
    getToday: function getToday(calendarType) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';
      return $$.GetToday[calendarType](unit);
    }
  };
  return {
    gregorianToJalali: $$.gregorianToJalali,
    jalaliToGregorian: $$.jalaliToGregorian,
    getSplitter: $$.getSplitter,
    convertToArray: $$.convertToArray,
    isEqual: $$.isEqual,
    isGreater: $$.isGreater,
    isLess: $$.isLess,
    isBetween: $$.isBetween,
    getByOffset: $$.getByOffset,
    getMonthDaysLength: $$.getMonthDaysLength,
    getWeekDay: $$.getWeekDay,
    getWeekDays: $$.getWeekDays,
    getMonths: $$.getMonths,
    getToday: $$.getToday
  };
}