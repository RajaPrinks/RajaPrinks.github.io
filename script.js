			$(document).ready(function(){
				$('.bar').click(function(){
					$('.bar').toggleClass('active');
					$('ul').toggleClass('active');
				});
				$('ul li').click(function(){
					$('ul li ul li').toggleClass('disp');
				});
			});