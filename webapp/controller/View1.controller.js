sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("r1.controller.View1", {
            onInit: function () {

            },
            onSubmit: function () {
                var name = this.getView().byId("idInput1");
                var inputValue = name.getValue();
                if (inputValue) {
                    name.setEnabled(false);
                    this.byId("idText1").setText("Welcome to " + inputValue);
                }
                var alignmentValue = this.getView().byId("idInput2").getValue();
                this.byId("idText1").setTextAlign(alignmentValue);
            },
            onHide: function () {
                this.getView().byId("idLabel1").setVisible(false);
                this.getView().byId("idInput1").setVisible(false);
                this.getView().byId("idInput2").setVisible(false);
                this.getView().byId("idBtn4").setText("showFlip");
            },
            onAll: function () {
                this.getView().byId("idLabel1").setVisible(true);
                this.getView().byId("idInput1").setVisible(true);
                this.getView().byId("idInput2").setVisible(true);
                this.getView().byId("idBtn4").setText("hideFlip");
            },
            onFlip: function () {
                var btnText = this.getView().byId("idBtn4");
                if (btnText.getText() === "hideFlip") {
                    this.getView().byId("idLabel1").setVisible(false);
                    this.getView().byId("idInput1").setVisible(false);
                    this.getView().byId("idInput2").setVisible(false);
                    btnText.setText("showFlip");
                } else {
                    this.getView().byId("idLabel1").setVisible(true);
                    this.getView().byId("idInput1").setVisible(true);
                    this.getView().byId("idInput2").setVisible(true);
                    btnText.setText("hideFlip");
                }
            }
        });
    });
