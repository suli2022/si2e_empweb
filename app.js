const doc = {
    addButton: document.querySelector('#addButton')
};
const state = {
    token: null
};

window.addEventListener('load', () => {
    init();
});

function init(){
    doc.addButton.addEventListener('click', startAdding);
};

function startAdding() {
    console.log(localStorage.getItem('token'))
}
