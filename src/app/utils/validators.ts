import { AbstractControl } from "@angular/forms";

export class MyValidators{

    static passwordValid( control: AbstractControl){
        const value = control.value
        
        if(!splitValue(value)){
            return {invalid_password : true}
        }

        return null
        
    }

    static confirmPasswords(control: AbstractControl){
        const password = control.get('password')?.value
        const confirmPassword = control.get('confirmPassword')?.value

        if(password === confirmPassword){
            return null
        }
        return  {password_confirm : true}
    }

    static confirmRange(range: AbstractControl){
        const minNums = range.get('minNum')?.value
        const maxNums = range.get('maxNum')?.value

        if(  maxNums > 100 || minNums < 0 || maxNums< minNums){
            return {range : true}
        }
        return null
        
    }
}

function splitValue(value:string){
    return value.split('').find(V => hasAnumber(V)) !== undefined
}

function hasAnumber(value: string){
    return !isNaN(parseInt(value, 10))
}