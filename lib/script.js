const getData = document.querySelectorAll('[data-scroll]')

let options = {
    threshold: [0.5]
}
function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting)
        {
            if(entry[0].target.dataset.scroll == "up")
            {
                change.target.classList.add('_up')
            }else if(entry[0].target.dataset.scroll == "left"){
                change.target.classList.add('_left')
            }
            else if(entry[0].target.dataset.scroll == "right"){
                change.target.classList.add('_right')
            }
        }
    });
}

let observer = new IntersectionObserver(onEntry,options)

for(let elm of getData){
    observer.observe(elm)
}
