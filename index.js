window.addEventListener('scroll', reveal);

        function reveal{
            var elemens = document.querySelectorAll('.reveal');

            for(var i = 0; i<elemens.length; i++){
                var win = window.innerHeight;
                var middle = elemens[i].getBoundingClientRect().top;
                var height = 100;

                if(middle < win - height){
                    elemens[i].classList.add('active');
                }else{
                    elemens[i].classList.remove('active');

                }
            }
        }