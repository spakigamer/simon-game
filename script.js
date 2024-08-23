adminlist=[];
userlist=[];
chose=["one","two","three","four"];
let head=document.querySelector("h2");
run=false;

let level=0;
document.addEventListener("keypress",function(){
    if(run==false){
        run=true;
        fg();
    }
})


function flash(y){
    y.classList.add("flash");
    setInterval(function(){
        y.classList.remove("flash")
    },250);
}

function fg(){
    userlist=[];
    level++;
    head.innerHTML=`level ${level}`;
    let r=Math.floor(Math.random()*3);
    let q=chose[r];
    let s=document.querySelector(`.${q}`);
    flash(s);
    adminlist.push(q);
}

function check(chk){
    if(userlist[chk]==adminlist[chk]){
        if(userlist.length==adminlist.length){
            setTimeout(fg(),1000);
        }
    }
    else{
        head.innerHTML=`!Game over your score ${level} . Press any key to restart`;
        reset();
    }
}

function btn(){
    let a=this;
    flash(a);
    let usercolor=a.getAttribute("id");
    userlist.push(usercolor);
    check(userlist.length-1);
}

let z=document.querySelectorAll(".box");
for(f of z){
    f.addEventListener("click",btn);
}

function reset(){
    userlist=[];
    adminlist=[];
    level=0;
    run=false;
}