const adthriveWebsiteList=async ()=>{

    const url=  `https://ads.cafemedia.com/sellers.json`
    const res= await fetch(url);
    const data= await res.json();
    // console.log(data.sellers);
    showWebsiteList(data.sellers);

}

const showWebsiteList=data=>{
  if(data.length>100){
    const webLink= data.slice(0,500);
    webLink.forEach(websiteName=>{
      const showList=document.getElementById('adtrhive-card');
      const divCard=document.createElement('div');
        divCard.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl border-double border-4 border-sky-500 rounded-xl">
                <div class="card-body">
                  <h2 class="card-title text-center pt-3">Website Address</h2>
                  <p class="text-center font-bold text-xl pb-3"><a target="_blank" href="http://${websiteName.domain}">${websiteName.domain}</a></p>
                </div>
              </div>
        `
        showList.appendChild(divCard);
    })
  }

    

}


adthriveWebsiteList();