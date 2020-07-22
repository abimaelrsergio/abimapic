"use strict";
exports.__esModule = true;
var Deleteme = /** @class */ (function () {
    function Deleteme() {
        this.itemSelecionado = 'item3';
        this.removerValor = 'campo2';
    }
    Deleteme.prototype.ngOnInit = function () {
        this.mapa = [
            { 'item1': ['Não selecionado', 'campo1', 'campo2', 'campo3'] },
            { 'item2': ['Não selecionado', 'campo1', 'campo2', 'campo3'] },
            { 'item3': ['Não selecionado', 'campo1', 'campo2', 'campo3'] },
            { 'item4': ['Não selecionado', 'campo1', 'campo2', 'campo3'] },
            { 'item5': ['Não selecionado', 'campo1', 'campo2', 'campo3'] },
            { 'item6': ['Não selecionado', 'campo1', 'campo2', 'campo3'] }
        ];
        this.executar();
    };
    Deleteme.prototype.executar = function () {
        var _this = this;
        this.mapa.forEach(function (objeto) {
            for (var chave in objeto) {
                if (chave !== _this.itemSelecionado) {
                    var posicao = void 0;
                    for (posicao in objeto[chave]) {
                        if (objeto[chave][posicao] === _this.removerValor) {
                            objeto[chave].splice(posicao, 1);
                        }
                    }
                    console.log("Chave: " + chave + "; Valor: [" + objeto[chave] + "]");
                }
            }
        });
    };
    return Deleteme;
}());
exports.Deleteme = Deleteme;
