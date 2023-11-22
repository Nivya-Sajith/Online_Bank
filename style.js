if(window.location.href.includes('userpage.html'))
{
    let uid=localStorage.getItem("userId")
    console.log(uid);
    let details=JSON.parse(localStorage.getItem(uid))
    console.log(details);
document.getElementById('head1').innerHTML=`Welcome ${details.uname}`

}


function userlogin()
        {
            if(pwd1.value=='' || accnumb.value=='' )
            {
                alert("Please fill the form!!")
            }
            else{
                
                if(accnumb.value in localStorage)
                {
                    let user1=JSON.parse(localStorage.getItem(accnumb.value));
                    console.log(user1);
                    console.log(pwd1.value);
                    if(pwd1.value==user1.password)
                    {localStorage.setItem('userId',accnumb.value)
                        alert("Login successfull")
                     
                        window.location="./userpage.html"
                    }
                    else{
                        alert("Invalid password")
                    }
                }
            }
        }


function deposit()
{        

    let upwd=dpwd.value;
    amt=damt.value;
    amt=Math.floor(amt);
    if(amt<=0)
    {
        alert("Please enter a valid positive amount.")
    }
    let userid=localStorage.getItem('userId')
    let userdetails=JSON.parse(localStorage.getItem(userid))
    if(!userdetails.hasOwnProperty('balance'))
    {
        userdetails.balance=0;
    }
    if(upwd == userdetails.password)
    {
        userdetails.balance+=amt;
        depomsg.innerHTML=`Balance Amount is ${userdetails.balance}`
        document.getElementById('dep').reset();

    }
    else
    {
        alert("invalid password")
        document.getElementById('dep').reset();

    }
    localStorage.setItem(userid,JSON.stringify(userdetails))

}



function withdraw()
{
    let upwd=wpwd.value;
    amt=wamt.value;
    amt=Math.floor(amt);

    let userid=localStorage.getItem('userId')
    let userdetails=JSON.parse(localStorage.getItem(userid))
    if(!userdetails.hasOwnProperty('balance'))
    {
        userdetails.balance=0;
    }
    if(upwd==userdetails.password)
    {

    
    if(userdetails.balance<amt)
    {
        alert('Insufficient balance');
        document.getElementById('with').reset();
    }
    else{
userdetails.balance-=amt;
withmsg.innerHTML=`Balance Amount is ${userdetails.balance}`
document.getElementById('with').reset();

    }

}
else
{
    alert("Incorrect Password")
    depomsg.innerHTML=` `


}
localStorage.setItem(userid,JSON.stringify(userdetails))

}


// Logout

function logout()
{
    localStorage.removeItem('userId')
    window.location='./index.html'
}