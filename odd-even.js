let n=5;
if(n==1 || n==0 || n<0) 
  console.log("Not a Prime")
else if(n==2)
       console.log("Prime")
    else {
        let flag=true 
        for(let i=2;i<n;i++){
            if(n%i==0){
                console.log("Not a Prime")
                flag=false 
                break 
            }
        }
        if(flag==true) 
          console.log("Prime")
        else {
            console.log("Not a Prime")
        }
    }