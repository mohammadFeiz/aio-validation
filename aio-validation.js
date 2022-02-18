export default function AIOValidation(props) {
  let $$ = {
    getErrorA(target,operaetor,type,message){
      let {lang} = props;
      if(message){return message(target)}
      return $$['getErrorA_' + lang](target,operaetor,type)
    },
    getErrorA_fa(target,operator,type){
      let {label,translate} = props;
      let error=label;error+=' ';
      if(operator === 'l'){error+='باید حداقل';}
      if(operator === 'g'){error+='باید حداکثر';}
      if(operator === 'e'){error+='نمی تواند';}
      error+=' ';error+=translate(target);error+=' ';
      if(type === 'list'){error+='مورد ';}
      if(type === 'string'){error+='کاراکتر ';}
      error+='باشد';return error
    }, 
    getErrorA_en(target,operator,type){
      let {label,translate} = props;
      let error=label;
      if(operator === 'l'){error+=' should be at least ';}
      if(operator === 'g'){error+=' should be a maximum of ';}
      if(operator === 'e'){error+=' cannot be ';}
      error+=translate(target);
      if(type === 'list'){error+=' item';}
      if(type === 'string'){error+=' character';}
      return error
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
        if(type === 'is' && value === target){return $$.getErrorC(target,'-',message)}
        if(type === 'is not' && value !== target){return $$.getErrorC(target,'+',message)}
        if(type === 'is in' && target.indexOf(value) !== -1){return $$.getErrorD(value,message)}
        if(type === 'is not in' && target.indexOf(value) === -1){return $$.getErrorD(value,message)}
        if(Array.isArray(value)){
          if(type === 'equal' && value.length === target){return $$.getErrorA(target,'e','list',message)}
          if(type === 'less' && value.length < target){return $$.getErrorA(target,'l','list',message)}
          if(type === 'greater' && value.length > target){return $$.getErrorA(target,'g','list',message)}
        }
        if(typeof value === 'number'){
          if(type === 'equal' && value === target){return $$.getErrorA(target,'e','number',message)}
          if(type === 'less' && value < target){return $$.getErrorA(target,'l','number',message)}
          if(type === 'greater' && value > target){return $$.getErrorA(target,'g','number',message)}
        }
        if(typeof value === 'string'){
          if(type === 'equal' && value.length === target){return $$.getErrorA(target,'e','string',message)}
          if(type === 'less' && value.length < target){return $$.getErrorA(target,'l','string',message)}
          if(type === 'greater' && value.length > target){return $$.getErrorA(target,'g','string',message)}
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