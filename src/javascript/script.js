
//sidebar
const paston = document.querySelector('.aston-p');
const pkoeg = document.querySelector('.koeg-p');
const prevu = document.querySelector('.revu-p');
const revu = document.querySelector('.revu');
const koeg = document.querySelector('.koeg');
const aston = document.querySelector('.aston');
const options = document.querySelector('.options');
const modelosBtn = document.getElementById('modelosBtn');
const modelos = document.querySelector('.modelos');
const caixinha = document.querySelector('.caixinha');
const sidebar = document.querySelector('.sidebar');
const btn = document.getElementById('toggleSidebarBtn');
const header = document.querySelector('header');

btn.addEventListener("click", function() {
    caixinha.classList.toggle('caixinha_active');
    if (caixinha.classList.contains('caixinha_active')) {
        caixinha.appendChild(btn);
        test.classList.remove('test-active');
    } else {
        koeg.id = '';
        revu.id = '';
        aston.id = '';
        header.appendChild(btn);
        setTimeout(() => {
            modelos.classList.remove('modelos-active');
        }, 600);
        setTimeout(() => {
            modelos.style.display = 'none';
        }, 1100);
    }
    setTimeout(() => {
        sidebar.classList.toggle('sidebar_active');
    }, 300);
}); 

modelosBtn.addEventListener('click', function() {
    if (modelos.classList.contains('modelos-active')) {
        modelos.classList.remove('modelos-active');
        koeg.id = '';
        revu.id = '';
        aston.id = '';
        setTimeout(() => {
            modelos.style.display = 'none';
        }, 500);
    } else {
        foto.src = img[0];
        paston.classList.remove('.aston-p-active');
        pkoeg.classList.remove('koeg-p-active');
        prevu.classList.remove('revu-p-active');
        revu.classList.remove('revu-active');
        koeg.classList.remove('koeg-active');
        aston.classList.remove('aston-active');
        koeg.style.top = '45vh';
        aston.style.top = '90vh';
        modelos.style.display = 'block';
        setTimeout(() => {
            modelos.classList.add('modelos-active');
            setTimeout(() => {
                koeg.id = 'koeg';
                revu.id = 'revu';
                aston.id = 'aston';
                foto.src = img[0];
            }, 500);
        }, 10);
    }
});

//carrossel imgs
const imagens = [
    "/imgs/carrao.png",
    "/imgs/Ferrari.jpg",
    "/imgs/lambo.jpeg",
    "/imgs/uau.jpg",
];
let indiceAtual = 0;

const headerImg = document.getElementById("legal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function mostrarImagem(indice) {
    headerImg.src = imagens[indice];
}

prevBtn.addEventListener("click", function() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
});

nextBtn.addEventListener("click", function() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
});

mostrarImagem(indiceAtual);


//aparição
const h1 = document.querySelectorAll('.corth1');
const cortina = document.querySelectorAll('.cortina');
const cortina2 = document.querySelectorAll('.cortina2');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('cortina2')) {
            entry.target.classList.add('ativa');
            setTimeout(() => {
                entry.target.style.display = 'none';
            }, 1500);
            observer.unobserve(entry.target);
        } else if (entry.isIntersecting && entry.target.classList.contains('cortina')) {
            entry.target.classList.add('ativa');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0
});



cortina2.forEach(element => {
    observer.observe(element);
});

cortina.forEach(element => {
    observer.observe(element);
});

//carrossel 3d

var models = [
    "/modelos/ferrari_fxx_k_2015__www.vecarz.com.glb",
    "/modelos/lamborghini_venevo.glb",
    "/modelos/source_fr_la/ferrari_laferrari.glb",
    "/modelos/source_lb_si/lamborghini_sian.glb",
];

let currentModelIndex = 0;

function loadModel(index) {
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.src = models[index];
    const titles = document.querySelectorAll('.mod-container h1');
if (currentModelIndex === 0) {
    titles[0].style.display = 'block';
    titles[1].style.display = 'none';
    titles[2].style.display = 'none';
    titles[3].style.display = 'none';
 } else if (currentModelIndex === 1) {
    titles[0].style.display = 'none';
    titles[1].style.display = 'block';
    titles[2].style.display = 'none';
    titles[3].style.display = 'none';
 } else if (currentModelIndex === 2) {
    titles[0].style.display = 'none';
    titles[1].style.display = 'none';
    titles[2].style.display = 'block';
    titles[3].style.display = 'none';
 } else if (currentModelIndex === 3) {
    titles[0].style.display = 'none';
    titles[1].style.display = 'none';
    titles[2].style.display = 'none';
    titles[3].style.display = 'block';
 }
}

prevMod = document.getElementById('prevMod');
nextMod = document.getElementById('nextMod');

prevMod.addEventListener('click', function() {
    currentModelIndex = (currentModelIndex - 1 + models.length) % models.length;
    loadModel(currentModelIndex);
});

nextMod.addEventListener('click', function() {
    currentModelIndex = (currentModelIndex + 1) % models.length;
    loadModel(currentModelIndex);
});

loadModel(currentModelIndex);

//Modelos

const img = ["/imgs/noticias/F1.jpg",
            "../../imgs/noticias/lamborevu.jpg",
           "../../imgs/noticias/absolut.webp",
           "../../imgs/noticias/aston1.jpg", 
                                            ];

const foto = document.getElementById('f1');

revu.addEventListener('click', function() {
    revu.classList.toggle('revu-active');
    prevu.classList.toggle('revu-p-active');
    if(revu.classList.contains('revu-active')) {
        foto.src = img[1];
        koeg.id = '';
        aston.id = '';
    } else {
        foto.src = img[0];
        koeg.id = 'koeg';
        aston.id = 'aston';
    }
});

koeg.addEventListener('click', function() {
    koeg.classList.toggle('koeg-active');
    pkoeg.classList.toggle('koeg-p-active');
    if(koeg.classList.contains('koeg-active')) {
        foto.src = img[2];
        revu.id = '';
        aston.id = '';
        koeg.style.top = '1vh';
    } else {
        foto.src = img[0];
        revu.id = 'revu';
        aston.id = 'aston';
        koeg.style.top = '45vh';
    }
});

aston.addEventListener('click', function() {
    aston.classList.toggle('aston-active');
    paston.classList.toggle('aston-p-active');
        if(aston.classList.contains('aston-active')) {
        foto.src = img[3];
        revu.id = '';
        koeg.id = '';
        aston.style.top = '1vh';
    } else {
        foto.src = img[0];
        revu.id = 'revu';
        koeg.id = 'koeg';
        aston.style.top = '90vh';
    }
});

//form

const testdrive = document.getElementById('testdrive');
const test = document.querySelector('.test');

testdrive.addEventListener('click', () => {
    test.classList.add('test-active');
    caixinha.classList.remove('caixinha_active');
    sidebar.classList.remove('sidebar_active');
    modelos.classList.remove('modelos-active');
});

const links = document.querySelectorAll('.links');

const close = document.querySelector('.close');

close.addEventListener('click', () => {
    test.classList.remove('test-active');
});
