var ImageNews = function (url, href, classname) {
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.className = classname || 'normal';
    this.init();
}
inheritPrototype(ImageNews, News);
ImageNews.prototype.init = function () {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news' + this.classname;
    this.element.href = this.href;
}
ImageNews.prototype.add = function () {}
ImageNews.prototype.getElement = function () {
    return this.element;
}

var IconNews = function (text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
}
inheritPrototype(IconNews, News);
IconNews.prototype.init = function () {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon' + this.type;
}
IconNews.prototype.add = function () {}
IconNews.prototype.getElement = function () {
    return this.element;
}

var EasyNews = function (text, href) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}
inheritPrototype(EasyNews, News);
EasyNews.prototype.init = function () {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function () {}
EasyNews.prototype.getElement = function () {
    return this.element;
}

var TypeNews =  function (text, href, type, pos) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
}
inheritPrototype(TypeNews, News);
TypeNews.prototype.init = function () {
    this.element = document.createElement('a');
    if (this.pos === 'left') {
        this.element.innerHTML = '[' + this.type + ']' + this.text;
    } else {
        this.element.innerHTML = this.text + '[' + this.type + ']';
    }
    this.element.href = this.href;
    this.element.className = 'text';
}
TypeNews.prototype.add = function () {}
TypeNews.prototype.getElement = function () {
    return this.element;
}