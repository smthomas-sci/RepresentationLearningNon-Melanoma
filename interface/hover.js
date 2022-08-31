
// Manages the 3-layer hover effect of the first IEC image

let ker = document.getElementById('hover_ker');
let epi = document.getElementById('hover_epi');
let der = document.getElementById('hover_der');

let example = document.getElementById('iec_example');

ker.addEventListener('mouseover', function(){
    example.src = './imgs/iec_regions/keratin.png';
});

epi.addEventListener('mouseover', function(){
    example.src = './imgs/iec_regions/epidermis.png';
});

der.addEventListener('mouseover', function(){
    example.src = './imgs/iec_regions/dermis.png';
});


ker.addEventListener('mouseleave', function(){
    example.src = './imgs/iec_regions/all.jpg';
});

epi.addEventListener('mouseleave', function(){
    example.src = './imgs/iec_regions/all.jpg';
});

der.addEventListener('mouseleave', function(){
    example.src = './imgs/iec_regions/all.jpg';
});


