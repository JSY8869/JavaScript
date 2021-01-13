var Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor: function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('white');
        document.querySelector('div#menu').style.backgroundColor = 'rgb(69, 80, 80)';
        document.querySelector('div#whole_contents').style.backgroundColor = 'rgb(54, 52, 41)';
        document.querySelector('div#head_name').style.backgroundColor = 'rgb(65, 60, 68)';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
        document.querySelector('div#menu').style.backgroundColor = 'rgb(224, 226, 226)';
        document.querySelector('div#whole_contents').style.backgroundColor = 'rgb(253, 250, 238)';
        document.querySelector('div#head_name').style.backgroundColor = 'rgb(237, 222, 245)';
    }
}