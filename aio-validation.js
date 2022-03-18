export default function AIOValidation(props) {
  let dateCalc = DateCalculator();
  let $$ = {
    getErrorA(target,operaetor,type,message){
      let {lang} = props;
      if(message){return message(target)}
      return $$['getErrorA_' + lang](target,operaetor,type)
    },
    getErrorA_fa(target,operator,type){
      let {label,translate} = props;
      let error=label;error+=' ';
      if(type === 'date'){
        if(operator === 'l'){error+='نمی تواند قبل از';}
        if(operator === 'g'){error+='نمی تواند بعد از';}
        if(operator === 'e'){error+='نمی تواند برابر';}
        error+=' ';error+=translate(target);error+=' ';
        error+='باشد';return error
      }
      else {
        if(operator === 'l'){error+='باید حداقل';}
        if(operator === 'g'){error+='باید حداکثر';}
        if(operator === 'e'){error+='نمی تواند';}
        error+=' ';error+=translate(target);error+=' ';
        if(type === 'list'){error+='مورد ';}
        if(type === 'string'){error+='کاراکتر ';}
        error+='باشد';return error
      }
    }, 
    getErrorA_en(target,operator,type){
      let {label,translate} = props;
      let error=label;
      if(type === 'date'){
        if(operator === 'l'){error+=' connot be before ';}
        if(operator === 'g'){error+=' cannot be after ';}
        if(operator === 'e'){error+=' cannot be ';}
        error+=translate(target);
        return error
      }
      else {
        if(operator === 'l'){error+=' should be at least ';}
        if(operator === 'g'){error+=' should be a maximum of ';}
        if(operator === 'e'){error+=' cannot be ';}
        error+=translate(target);
        if(type === 'list'){error+=' item';}
        if(type === 'string'){error+=' character';}
        return error
      }
    },
    getError1(message){
      let {lang} = props;
      if(message){return message()}
      return this['getError1_' + lang]()
    },
    getError1_fa(){let {label}=props;let str='';str+='وارد کردن';str+=' ';str+=label;str+=' ';str+='ضروری می باشد';return str;},
    getError1_en(){let {label}=props;let str='';str+=label;str+=' is required';return str;},
    getErrorB(target,type,message){
      let {lang} = props;
      if(message){return message(value)}
      return $$['getErrorB_' + lang](target,type)
    },
    getErrorB_fa(target,type){
      let {label,translate}=props;
      let str='';str+=label;str+=' ';
      if(type === '-'){str+='نباید شامل';}
      if(type === '+'){str+='باید شامل';}
      str+=' ';
      if(target === 'symbol'){str += 'کاراگتر های خاص'}
      else if(target === 'number'){str += 'عدد';}
      else if(target === 'letter'){str += 'حروف'}
      else if(target === 'uppercase'){str += 'حروف بزرگ'}
      else if(target === 'lowercase'){str += 'حروف کوچک'}
      else {str += translate(target);}
      str+=' ';str += 'باشد';return str;
    },
    getErrorB_en(target,type){
      let {label,translate}=props;
      let str = label;
      if(type === '-'){str+=' should not contain ';}
      if(type === '+'){str+=' should contain ';}
      if(target === 'symbol'){str += 'symbol'}
      else if(target === 'number'){str += 'number';}
      else if(target === 'letter'){str += 'letter'}
      else if(target === 'uppercase'){str += 'uppercase'}
      else if(target === 'lowercase'){str += 'lowercase'}
      else {str += translate(target);}
      return str;
    },
    getErrorC(target,type,message){
      let {lang} = props;
      if(message){return message(target)}
      return $$['getErrorC_' + lang](target,type)
    },
    getErrorC_fa(target,type){
      let {label,translate}=props; 
      let str=label;str+=' ';
      if(type === '-'){str+='نباید ';}
      if(type === '+'){str+='باید ';}
      str+=translate(target);str+=' ';str+='باشد';return str;
    },
    getErrorC_en(target,type){
      let {label,translate}=props;
      let str=label;
      if(type === '-'){str+=' cannot be ';}
      if(type === '+'){str+=' should be ';}
      str+=translate(target);return str;
    },
    getErrorD(value,message){
      let {lang} = props;
      if(message){return message(value)}
      return $$['getErrorD_' + lang](value)
    },
    getErrorD_en(value){
      let {label}=props;
      let str = label;
      str += ' cannot be ';
      str += value;
      return str;
    },
    getErrorD_fa(value){
      let {label}=props;
      let str = label;
      str += ' نمیتواند ';
      str += value;
      str += ' باشد';
      return str;
    },
    getError(){
      let {value,errors = []} = props; 
      for(let i = 0; i < errors.length; i++){
        let {type,target,message} = errors[i];
        if(type === 'required' && (value === undefined || value === '' || value === false || value.length === 0)){return $$.getError1(message)}
        if(type === '='){
          if(Array.isArray(target)){
            if(target.indexOf(value) !== -1){return $$.getErrorD(value,message)}
          }
          else if(typeof value === 'string'){
            if(value.indexOf('/') !== -1){
              if(dateCalc.isEqual(value,target)){return $$.getErrorA(target,'e','date',message)}
            }
            else if(typeof target === 'number'){
              if(value.length === target){return $$.getErrorA(target,'e','string',message)}
            }
            else if(typeof target === 'string'){
              if(value === target){return $$.getErrorC(target,'-',message)}
            }
          }
          else if(Array.isArray(value) && typeof target === 'number'){
            if(value.length === target){return $$.getErrorA(target,'e','list',message)}
          }
          else if(value === target){return $$.getErrorC(target,'-',message)}
        }
        else if(type === '!='){
          if(Array.isArray(target)){
            if(target.indexOf(value) === -1){return $$.getErrorD(value,message)}
          }
          else if(value !== target){return $$.getErrorC(target,'+',message)}
        }
        else if(type === '<'){
          if(Array.isArray(value)){
            if(value.length < target){return $$.getErrorA(target,'l','list',message)}
          }
          else if(typeof value === 'number'){
            if(value < target){return $$.getErrorA(target,'l','number',message)}
          }
          else if(typeof value === 'string'){
            if(value.indexOf('/') !== -1 && dateCalc.isLess(value,target)){return $$.getErrorA(target,'l','date',message)}
            else if(value.length < target){return $$.getErrorA(target,'l','string',message)}
          }
        }
        else if(type === '>'){
          if(Array.isArray(value)){
            if(value.length > target){return $$.getErrorA(target,'g','list',message)}
          }
          else if(typeof value === 'number'){
            if(value > target){return $$.getErrorA(target,'g','number',message)}
          }
          else if(typeof value === 'string'){
            if(value.indexOf('/') !== -1 && dateCalc.isGreater(value,target)){return $$.getErrorA(target,'g','date',message)}
            else if(value.length > target){return $$.getErrorA(target,'g','string',message)}
          }
        }
        if(typeof value === 'string'){
          if(type === 'contain'){
            if(target === 'symbol'){
                let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
                if(format.test(value)){return $$.getErrorB(target,'-',message)}  
            }
            if(target === 'number'){
                let format = /\d/;
                if(format.test(value)){return $$.getErrorB(target,'-',message)}  
            }
            if(target === 'letter'){
              let format = /[a-zA-Z]/;
              if(format.test(value)){return $$.getErrorB(target,'-',message)}  
            }
            if(target === 'uppercase'){
                let format = /[A-Z]/;
                if(format.test(value)){return $$.getErrorB(target,'-',message)}  
            }
            if(target === 'lowercase'){
                let format = /[a-z]/;
                if(format.test(value)){return $$.getErrorB(target,'-',message)}  
            }
            if(typeof target.test === 'function'){
              if(target.test(value)){return $$.getErrorB(target,'-',message)}  
            }
          }
          if(type === 'not contain'){
            if(target === 'symbol'){
                let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
                if(!format.test(value)){return $$.getErrorB(target,'+',message)}  
            }
            if(target === 'number'){
                let format = /\d/;
                if(!format.test(value)){return $$.getErrorB(target,'+',message)}  
            }
            if(target === 'letter'){
              let format = /[a-zA-Z]/;
              if(!format.test(value)){return $$.getErrorB(target,'+',message)}  
            }
            if(target === 'uppercase'){
                let format = /[A-Z]/;
                if(!format.test(value)){return $$.getErrorB(target,'+',message)}  
            }
            if(target === 'lowercase'){
                let format = /[a-z]/;
                if(!format.test(value)){return $$.getErrorB(target,'+',message)}  
            }
            if(typeof target.test === 'function'){
              if(!target.test(value)){return $$.getErrorB(target,'+',message)}  
            }
          }
        }
      }
      return ''
    }
  }
  props.translate = props.translate || function (text){
    return text
  }
  props.lang = props.lang || 'en';
  let error;
  try{error = $$.getError()}
  catch{error = ''}
  return error; 
}
function DateCalculator(){
  let $$ = {
    getSplitter(value){
      let splitter = '/';
      for(let i = 0; i < value.length; i++){
        if(isNaN(parseInt(value[i]))){return value[i]}
      }
      return splitter;
    },
    convertToArray(o,setDefault = true){
      let list;
      if(Array.isArray(o)){list = [...o]}
      else if(typeof o === 'string'){
        list = o.split($$.getSplitter(o));
        list = list.map((o)=>parseInt(o))
      }
      else{return false}
      if(setDefault){
        let [y,m = 1,d = 1,h = 0] = list;
        return [y,m,d,h];
      }
      else {
        return list;
      }
    },
    gregorianToJalali(o) {
      let [gy, gm, gd] = $$.convertToArray(o);
      var g_d_m, jy, jm, jd, gy2, days;
      g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      gy2 = (gm > 2) ? (gy + 1) : gy;
      days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
      jy = -1595 + (33 * ~~(days / 12053));days %= 12053;jy += 4 * ~~(days / 1461);days %= 1461;
      if (days > 365) {jy += ~~((days - 1) / 365);days = (days - 1) % 365;}
      if (days < 186) {jm = 1 + ~~(days / 31);jd = 1 + (days % 31);} else {jm = 7 + ~~((days - 186) / 30);jd = 1 + ((days - 186) % 30);}
      return [jy, jm, jd];
    },
    jalaliToGregorian(o) {
      let [jy, jm, jd] = $$.convertToArray(o);
      var sal_a, gy, gm, gd, days;
      jy += 1595;days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
      gy = 400 * ~~(days / 146097);days %= 146097;
      if (days > 36524) {gy += 100 * ~~(--days / 36524);days %= 36524;if (days >= 365) days++;}
      gy += 4 * ~~(days / 1461);days %= 1461;
      if (days > 365) {gy += ~~((days - 1) / 365);days = (days - 1) % 365;}
      gd = days + 1;
      sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
      return [gy, gm, gd];
    },
    compaireDate([year1,month1,day1,hour1],[year2,month2,day2,hour2]){
      if(year1 < year2){return 'less'}
      if(year1 > year2){return 'greater'}
      if(month1 < month2){return 'less'}
      if(month1 > month2){return 'greater'}
      if(day1 < day2){return 'less'}
      if(day1 > day2){return 'greater'}
      if(hour1 < hour2){return 'less'}
      if(hour1 > hour2){return 'greater'}
      return 'equal';
    },
    isLess(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2,false);
      for(let i = 0; i < o1.length; i++){
        if(o2[i] === undefined){o2[i] = o1[i]}
      }
      return $$.compaireDate(o1,o2) === 'less'
    },
    isEqual(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2,false);
      for(let i = 0; i < o1.length; i++){
        if(o2[i] === undefined){o2[i] = o1[i]}
      }
      return $$.compaireDate(o1,o2) === 'equal'
    },
    isGreater(o1,o2){
      if(!o1 || !o2){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2,false);
      for(let i = 0; i < o1.length; i++){
        if(o2[i] === undefined){o2[i] = o1[i]}
      }
      return $$.compaireDate(o1,o2) === 'greater'
    },
    isBetween(o1,[o2,o3]){
      if(!o1 || !o2 || !o3){return false}
      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2,false);
      o3 = $$.convertToArray(o3,false);
      for(let i = 0; i < o1.length; i++){
        if(o2[i] === undefined){o2[i] = o1[i]}
        if(o3[i] === undefined){o3[i] = o1[i]}
      }
      return $$.compaireDate(o1,o2) === 'greater' && $$.compaireDate(o1,o3) === 'less'
    },
    getByOffset({date,offset,unit = 'day',calendarType = 'gregorian'}){
      if(!offset){return date}
      let fn = $$['get' + (Math.sign(offset)>0?'Next':'Prev') + {'hour':'Hour','day':'Day','month':'Month'}[unit]];
      let abs = Math.abs(offset);
      for(let i = 0; i < abs; i++){date = fn(date,calendarType);}
      return date;
    },
    getNextHour([year,month,day,hour],calendarType){
      if(hour < 23){return [year,month,day,hour + 1]}
      let a = $$.getNextDay([year,month,day],calendarType);
      return [a[0],a[1],a[2],0] 
    },
    getPrevHour([year,month,day,hour],calendarType){
      if(hour > 0){return [year,month,day,hour - 1]}
      let a = $$.getPrevDay([year,month,day],calendarType);
      return [a[0],a[1],a[2],23] 
    },
    getNextDay([year,month,day,hour],calendarType){
      if(day < $$.getMonthDaysLength(year,month,calendarType)){return [year,month,day + 1,hour]}
      if(month < 12){return [year,month + 1,1,hour]}
      return [year + 1,1,1,hour];
    },
    getPrevDay([year,month,day],calendarType){
      if(day > 1){return [year,month,day - 1]}
      if(month > 1){
        month -= 1;
        day = $$.getMonthDaysLength(year,month,calendarType);
        return [year,month,day];
      }
      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year,month,calendarType);
      return [year,month,day];
    },
    getNextMonth([year,month]){return month < 12?[year,month + 1,1]:[year + 1,1,1];},
    getPrevMonth([year,month]){return month > 1?[year,month - 1,1]:[year - 1,12,1];},
    GetMonthDaysLength:{
      jalali:(year,month)=>{
        if(month <= 6){return  31;}
        if(month <= 11){return 30;}
        if([1,5,9,13,17,22,26,30].indexOf(year % 33) === -1){return 29;}
        return 30;
      },
      gregorian:(year,month)=>{return new Date(year, month, 0).getDate();}
    },
    getMonthDaysLength(year,month,calendarType){return $$.GetMonthDaysLength[calendarType](year,month)},
    GetWeekDay:{
      jalali:([year,month,day])=>{
        var offset;
        var weekDays = $$.getWeekDays('jalali');
        if($$.isEqual([year,month,day],[1399,12,30])){offset = 0;}
        else if($$.isLess([year,month,day],[1399,12,30])){
          offset = (-$$.getDaysBetween([year,month,day],[1399,12,30]) - 1) % 7;
          if(offset < 0){offset += 7}
        }
        else{offset = ($$.getDaysBetween([1399,12,30],[year,month,day]) + 1) % 7;}
        return {weekDay:weekDays[offset],index:offset};
      },
      gregorian:([year,month,day])=>{
        var offset = new Date(year,month - 1,day).getDay();
        var weekDays = $$.getWeekDays('gregorian');
        return {weekDay:weekDays[offset],index:offset};
      }
    },
    getWeekDay(date,calendarType = 'gregorian'){return $$.GetWeekDay[calendarType](date)},
    getWeekDays(calendarType){
      return {
        jalali:['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
        gregorian:['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
      }[calendarType]
    },
    getMonths(calendarType){
      return {
        jalali:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند',],
        gregorian:['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
      }[calendarType]
    },
    getDaysBetween(start,end){
      if(end[0] - start[0] === 0){return Math.max($$.getDayIndexInYear(end) - $$.getDayIndexInYear(start) - 1,0);}
      var result = 0;
      if(end[0] - start[0] > 1){
        var leaps = $$.getLeapBetweenYears(start[0],end[0]);
        var notLeaps = Math.max(end[0] - start[0] - 1 - leaps,0);
        result = leaps * 366 + notLeaps * 365;
      }
      result += $$.getDayIndexInYear(end) - 1;
      result += ([1,5,9,13,17,22,26,30].indexOf(start[0] % 33) !== -1?366:365) - $$.getDayIndexInYear(start);
      return result;
    },
    getDayIndexInYear([year,month,day]){
      let index = 0;
      for(let i = 1; i < month; i++){index += i <= 6 ? 31 : 30;}
      return index + day;
    },
    getLeapBetweenYears(start,end){
      var count = 0;
      start++;
      while(start < end){
        if([1,5,9,13,17,22,26,30].indexOf(start % 33) !== -1){count++;}
        start++;
      }
      return count;
    },
    GetToday:{
      jalali:(unit)=>{
        let dateObject = new Date();
        var date = dateObject.toLocaleDateString('fa-IR').split('/');
        var dic = {'۰':0,'۱':1,'۲':2,'۳':3,'۴':4,'۵':5,'۶':6,'۷':7,'۸':8,'۹':9};
        for(var j = 0; j < date.length; j++){
          var str = '';
          for(var i = 0; i < date[j].length; i++){str+= dic[date[j][i]]; }
          date[j] = Number(str);
        }   
        date.push(dateObject.getHours());
        if(unit === 'day'){date[3] = 0;}
        if(unit === 'month'){date[2] = 1; date[3] = 0;}
        return date;
      },
      gregorian:(unit)=>{
        var date = new Date();
        var result = [date.getFullYear(),date.getMonth() + 1,date.getDate(),date.getHours()]
        if(unit === 'day'){date[3] = 0;}
        if(unit === 'month'){date[2] = 1; date[3] = 0;}
        return result;
      }
    },
    getToday(calendarType,unit = 'day'){return $$.GetToday[calendarType](unit)},
    
  }
  return {
    gregorianToJalali:$$.gregorianToJalali,
    jalaliToGregorian:$$.jalaliToGregorian,
    getSplitter:$$.getSplitter,
    convertToArray:$$.convertToArray,
    isEqual:$$.isEqual,
    isGreater:$$.isGreater,
    isLess:$$.isLess,
    isBetween:$$.isBetween,
    getByOffset:$$.getByOffset,
    getMonthDaysLength:$$.getMonthDaysLength,
    getWeekDay:$$.getWeekDay,
    getWeekDays:$$.getWeekDays,
    getMonths:$$.getMonths,
    getToday:$$.getToday
  }
}