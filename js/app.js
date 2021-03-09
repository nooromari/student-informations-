'use strict';

let studentForm=document.getElementById('studentForm');
let table =document.getElementById('table');
// let rwo=document.getElementById('rwo');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let objectArr=[];
let id=0;
function Student(sId,email,phone,tuition){
  this.sId=sId;
  this.spE=email.split('@');
  this.sName=this.spE[0];
  this.email=email;
  this.phone=phone;
  this.age=this.randomAge();
  this.tuition=tuition;
  objectArr.push(this);
}

Student.prototype.randomAge=function(){
  return this.age=getRandomInt(18, 24);
};

studentForm.addEventListener('submit',newStud);
let total=0;
function newStud(event){
  event.preventDefault();
  id++;
  new Student(id,sEmail.value,sNumber.value,parseInt(select.value));
  saveObj();
  getObj();
  result();
}

function result(){
//   while (table.rwo.length) {
//     table.deleteRow(0);
//   }

  for(let i=0;i<objectArr.length;i++){
    let tr=document.createElement('tr');
    table.appendChild(tr);

    let tdEl =document.createElement('td');
    tr.appendChild(tdEl);
    tdEl.textContent=objectArr[i].sId;

    let tdEl2=document.createElement('td');
    tr.appendChild(tdEl2);
    tdEl2.textContent=objectArr[i].sName;

    let tdEl3=document.createElement('td');
    tr.appendChild(tdEl3);
    tdEl3.textContent=objectArr[i].email;

    let tdEl4=document.createElement('td');
    tr.appendChild(tdEl4);
    tdEl4.textContent=objectArr[i].phone;

    let tdEl5=document.createElement('td');
    tr.appendChild(tdEl5);
    tdEl5.textContent=objectArr[i].age;

    let tdEl6=document.createElement('td');
    tr.appendChild(tdEl6);
    tdEl6.textContent=objectArr[i].tuition;

    total=parseInt(total)+parseInt(objectArr[i].tuition);
  }
  let totals=document.getElementById('totals');
  totals.textContent=`Total= ${total}`;
}
getObj();
result();

function saveObj(){
  let save = JSON.stringify(objectArr);
  let allStud=localStorage.setItem('allStud',save);
}

function getObj(){
  let gettingObj=localStorage.getItem('allStud');
  let studObj=JSON.parse(gettingObj);
  if(studObj){
    objectArr=studObj;
  }
}
