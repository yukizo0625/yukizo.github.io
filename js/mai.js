'use strict';

{
  // intersection observer api

  // こちらでは、監視対象の要素が画面と交差した時の処理を書くのですが、引数として交差した要素と Observer 自身を渡すので、このように書けば OK です。↓
  function callback(entries,obs){
    entries.forEach((entry)=>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  const options = {
    threshold:0.2,
  };

  const observer = new IntersectionObserver(callback,options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach((target)=>{
    observer.observe(target);
  });
}