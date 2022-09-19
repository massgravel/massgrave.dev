const langsUrl = "https://www.microsoft.com/en-us/api/controls/contentinclude/html?pageId=cd06bda8-ff9c-4a6e-912a-b92a21f42526&host=www.microsoft.com&segments=software-download%2cwindows11&query=&action=getskuinformationbyproductedition&sdVersion=2";
const downUrl = "https://www.microsoft.com/en-us/api/controls/contentinclude/html?pageId=cfa9e580-a81e-4a4b-a846-7b21bf4e2e5b&host=www.microsoft.com&segments=software-download%2Cwindows11&query=&action=GetProductDownloadLinksBySku&sdVersion=2";

const sessionId = document.getElementById('msdl-session-id');
const msContent = document.getElementById('msdl-ms-content');
const pleaseWait = document.getElementById('msdl-please-wait');
const processingError = document.getElementById('msdl-processing-error');

const productsList = document.getElementById('products-list');
const backToProductsDiv = document.getElementById('back-to-products');

var msdlXhr = new XMLHttpRequest();

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function updateVars() {
    var id = document.getElementById('product-languages').value;
    if(id == "") {
        document.getElementById('submit-sku').disabled = 1;
        return;
    }

    id = JSON.parse(id);
    document.getElementById('submit-sku').disabled = 0;

    return id;
}

function checkForError(content) {
    var errorMessage = document.getElementById('errorModalMessage');

    if(errorMessage) {
        processingError.style.display = "block";
        content.style.display = "none";
        return true;
    }

    return false;
}

function updateContent(content, response) {
    content.innerHTML = response;
    return !checkForError(content);
}

function abortAndHide() {
    msdlXhr.abort();

    msContent.style.display = 'none';
    pleaseWait.style.display = 'none';
    processingError.style.display = 'none';

    window.location.hash = "";
}

function fixSubmitSku() {
    var submitSku = document.getElementById('submit-sku');
    submitSku.setAttribute("onClick", "getDownload();");
}

function fixProdLang() {
    var prodLang = document.getElementById('product-languages');
    prodLang.setAttribute("onChange", "updateVars();");
}

function fixLanguageList() {
    fixSubmitSku();
    fixProdLang();
}

function onLanguageXhrChange() {
    if(!(this.readyState == 4 && this.status == 200))
        return;
    
    if(pleaseWait.style.display != "block")
        return;

    pleaseWait.style.display = "none";
    msContent.style.display = "block";

    if(!updateContent(msContent, this.responseText))
        return;

    fixLanguageList();
    updateVars();
}

function onDownloadsXhrChange() {
    if(!(this.readyState == 4 && this.status == 200))
        return;
    
    if(pleaseWait.style.display != "block")
        return;

    pleaseWait.style.display = "none";
    msContent.style.display = "block";

    if(!updateContent(msContent, this.responseText))
        return;
}

function getLanguages(productId) {
    sessionId.value = uuidv4();

    msContent.style.display = "none";
    pleaseWait.style.display = "block";

    var url = langsUrl + "&productEditionId=" + encodeURIComponent(productId) + 
        "&sessionId=" + encodeURIComponent(sessionId.value);

    msdlXhr.abort();
    msdlXhr.onreadystatechange = onLanguageXhrChange;
    msdlXhr.open("GET", url, true);
    msdlXhr.send();
}

function getDownload() {
    msContent.style.display = "none";
    pleaseWait.style.display = "block";

    var id = updateVars();

    var url = downUrl + "&skuId=" + encodeURIComponent(id['id']) +
        "&language=" + encodeURIComponent(id['language'])+ 
        "&sessionId=" + encodeURIComponent(sessionId.value);

    msdlXhr.abort();
    msdlXhr.onreadystatechange = onDownloadsXhrChange;
    msdlXhr.open("GET", url, true);
    msdlXhr.send();
}

function backToProducts() {
    abortAndHide();

    backToProductsDiv.style.display = 'none';
    productsList.style.display = 'block';
}

function prepareDownload(id) {
    productsList.style.display = 'none';
    backToProductsDiv.style.display = 'block';

    return getLanguages(id);
}

function createTable(data) {
    var table = document.getElementById('products-table-body');
    for(value in data) {
        var a = document.createElement('a')
        a.href = "#" + value;
        a.setAttribute("onClick", "prepareDownload(" + value + ");");
        a.appendChild(document.createTextNode(data[value]))

        var tr = table.insertRow();

        var td = tr.insertCell();
        td.appendChild(a);

        var td2 = tr.insertCell();
        td2.appendChild(document.createTextNode(value))
    }
}

function checkHash() {
    var hash = window.location.hash;
    if(hash.length == 0)
        return

    prepareDownload(hash.substring(1))
}

function preparePage(resp) {
    var data = JSON.parse(resp);

    createTable(data['products']);

    pleaseWait.style.display = 'none';
    productsList.style.display = 'block';

    checkHash();
}

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(this.readyState != 4)
        return;

    if(this.status != 200) {
        pleaseWait.style.display = 'none';
        processingError.style.display = 'block';
        return;
    }

    preparePage(this.responseText);
};

xhr.open("GET", 'data/products.json', true);
xhr.send();

pleaseWait.style.display = 'block';
