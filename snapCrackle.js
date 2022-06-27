function SnapCrackle (maxvalue){
    const Maxvalue = []
    for(let num = 1 ; num <=(maxvalue);num++){
        if(num%2 != 0 && num%5 == 0){
            Maxvalue.push("SnapCrackle")
            continue
        }
         else if(num%2 != 0){
            Maxvalue.push("Snap")
        }
         else if(num%5 == 0){
            Maxvalue.push("Crackle")
         }else if(num%2 == 0 ){
            Maxvalue.push(num)
         }
    }
   return (Maxvalue.join(', '))
}
 console.log (SnapCrackle(12))



 


