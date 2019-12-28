// author langenhagen
// found here http://stackoverflow.com/questions/6914360/how-to-scroll-through-a-div-by-dragging-and-not-by-using-the-scroll-bars
// 191228

/**
@param dragElement The element to be dragged.
@param mouseTarget The element which listens on mouse events
*/
function ObjectDragablizer( dragElement, mouseTarget ) {
    var self = this;

    if( mouseTarget === undefined ) {
        mouseTarget = dragElement;
    }

    var oldClientY = 0;

    self.OnMouseDown = function (event) {
        mouseTarget.onmousemove  = self.OnMouseMove;
        mouseTarget.onmouseleave = self.OnMouseLeave;
        oldClientY = event.clientY;
    }
    self.OnMouseMove = function (event) {
        dragElement.scrollTop +=  oldClientY - event.clientY;
        oldClientY = event.clientY;
    }
    self.OnMouseUp = function (event) {
        mouseTarget.onmousemove  = null;
        mouseTarget.onmouseleave = null;
    }
    self.OnMouseLeave = function () {
        mouseTarget.onmousemove  = null;
        mouseTarget.onmouseleave = null;
    }

    mouseTarget.onmousedown = self.OnMouseDown;
    mouseTarget.onmouseup   = self.OnMouseUp;
}
