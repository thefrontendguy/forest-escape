function init() {
    controller.getHandler(handler);
    controller.getModel(model);
    controller.getView(view);

    controller.handler.setupEvents();
}
document.addEventListener("DOMContentLoaded", function(){
    init();
});