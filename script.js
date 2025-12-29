
/* SNOW */
const snow=document.getElementById("snow");
setInterval(()=>{
  const f=document.createElement("div");
  f.className="snowflake";
  f.textContent="❄";
  f.style.left=Math.random()*window.innerWidth+"px";
  f.style.fontSize=10+Math.random()*10+"px";
  f.style.animationDuration=5+Math.random()*5+"s";
  snow.appendChild(f);
  setTimeout(()=>f.remove(),10000);
},200);

/* DATA */
const data={
  romantika:[
    {n:"Silent Love",i:"https://i.imgur.com/0H8G4pZ.jpg",b:"41 bob"},
    {n:"Under the Oak Tree",i:"https://i.imgur.com/9XnFQ9M.jpg",b:"73 bob"}
  ],
  drama:[
    {n:"Nano Machine",i:"https://i.imgur.com/6OZQnYB.jpg",b:"290 bob"}
  ],
  fantastika:[
    {n:"Latna Saga",i:"https://i.imgur.com/ULJ4JQ9.jpg",b:"185 bob"}
  ],
  jangari:[
    {n:"Mercenary Enrollment",i:"https://i.imgur.com/3ZQ3ZQf.jpg",b:"120 bob"}
  ]
};

const list=document.getElementById("manhwaList");
const favList=document.getElementById("favList");
let fav=JSON.parse(localStorage.getItem("fav")||"[]");

/* GENRE CLICK */
document.querySelectorAll(".genre").forEach(g=>{
  g.onclick=()=>{
    list.innerHTML="";
    (data[g.dataset.genre]||[]).forEach(m=>{
      list.innerHTML+=`
      <div class="manhwa-card">
        <img src="${m.i}">
        <div class="manhwa-info">
          <h4>${m.n}</h4>
          <span>${m.b}</span>
          <button onclick='addFav("${m.n}")'>❤️</button>
        </div>
      </div>`;
    });
  };
});

/* SEARCH */
document.getElementById("searchInput").oninput=e=>{
  const q=e.target.value.toLowerCase();
  list.innerHTML="";
  Object.values(data).flat().filter(m=>m.n.toLowerCase().includes(q)).forEach(m=>{
    list.innerHTML+=`
    <div class="manhwa-card">
      <img src="${m.i}">
      <div class="manhwa-info"><h4>${m.n}</h4></div>
    </div>`;
  });
};

/* FAVORITES */
function addFav(n){
  if(!fav.includes(n)){
    fav.push(n);
    localStorage.setItem("fav",JSON.stringify(fav));
    renderFav();
  }
}
function renderFav(){
  favList.innerHTML="";
  fav.forEach(n=>{
    favList.innerHTML+=`<div class="card">${n}</div>`;
  });
}
renderFav();

/* 18+ */
function open18(){document.getElementById("modal18").style.display="flex";}
function close18(){document.getElementById("modal18").style.display="none";}
function confirm18(){alert("18+ bo‘lim ochildi");close18();}
