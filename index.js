let doc=document.querySelector.bind(document);
let docs=document.querySelectorAll.bind(document);
doc('.ul_lv1').onmouseover=function(e){
    var menuLv1=e.target.closest('.li_lv1');
    var menuLv2=e.target.closest('.li_lv2');
    var menuId=e.target.closest('span');
    if(menuId){
        var id=menuId.dataset.id;
        if(menuLv2){
            var a=handleMenu.bind(doc);
            a('.ul_lv3',id)
        }else if(menuLv1){
            // var ulsLv2=docs('.ul_lv2');
            // ulsLv2.forEach(function(ulLv2) {
            //     ulLv2.classList.remove("active");
            //   });
            // doc(`.ul_lv2_${id}`).classList.add('active')
            var a=handleMenu.bind(doc);
            a('.ul_lv2',id)
            a('.ul_lv3',id)
        }
    }
}
function handleMenu(ele,id){
    var uls=document.querySelectorAll(ele);
    if(uls){
        uls.forEach(function(ul) {
            ul.classList.remove("active");
      });
    }
    var ul=document.querySelector(`${ele}_${id}`);
    if(ul){
        ul.classList.add('active')
    }
       
}