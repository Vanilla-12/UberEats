let chooseForm = document.querySelector('.footer-info-lang');
let chooseVariants = document.querySelector('.choose-lang-text');
chooseForm.addEventListener('click', function() {
    chooseVariants.classList.toggle('hidden');
})
let chooseRu = document.querySelector('.choice-ru');
let chooseEn = document.querySelector('.choice-en');
let currentLang = document.querySelector('.lang-text');
function switchLang(choosen) {
    currentLang.innerText = choosen.innerText; 
}
chooseRu.addEventListener('click', function() {
    currentLang.innerText = chooseRu.innerText; 
    chooseVariants.classList.toggle('hidden');
});
chooseEn.addEventListener('click', function() {
    currentLang.innerText = chooseEn.innerText; 
    chooseVariants.classList.toggle('hidden');
});