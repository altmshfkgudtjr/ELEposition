const getElementPosition = (target = null) => {
  if (!target) return null;

  const element = function (DOM) {
    this.rect = null;
    this.target = DOM;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };

  const elem = new element(target);
  elem.rect = target.getBoundingClientRect();

  if (!!elem.rect && !!elem.rect.x && !!elem.rect.y) {
    elem.x = elem.rect.x;
    elem.y = elem.rect.y;
    elem.width = elem.rect.width;
    elem.height = elem.rect.height;
  } else {
    let t = target;
    elem.width = t.offsetWidth;
    elem.height = t.offsetHeight;

    while (!!t && t !== document) {
      elem.x += t.offsetLeft - t.scrollLeft;
      elem.y += t.offsetTop - t.scrollTop;
      if (!!t.style.left) elem.x += t.style.left;
      if (!!t.style.top) elem.y += t.style.top;
      t = t.offsetParent;
    }
  }

  return {
    target: target,
    leftTop: {
      x: elem.x,
      y: elem.y
    },
    rightTop: {
      x: elem.x + elem.width,
      y: elem.y
    },
    leftBottom: {
      x: elem.x,
      y: elem.y + elem.height
    },
    rightBottom: {
      x: elem.x + elem.width,
      y: elem.y + elem.height
    },
    width: elem.width,
    height: elem.height
  };
};

export default getElementPosition;