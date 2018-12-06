
REDIPS.drag.dropMode = 'overwrite';
REDIPS.drag.init()

init();

// 初期化処理
function init() {
    // 初期配置は3×4にする
    operateCells(3, 4);

    $('.redips-drag').css('border-style', 'none');

}

// ダンジョンマスボタン押下時の処理
$('.btn-dungeon').on('click', function (elem) {
    const id = elem.target.id;
    operateCells(id/10|0, id%10);
});

// カメラボタン押下時の処理
$('#btn-camera').on('click', function () {
    html2canvas(document.querySelector("#table-dungeon")).then(canvas => {
        $('#img-out').append(canvas);
        $('#img-out').append('　　');
    });
});

// ダンジョンマスのサイズを動的に変更
function operateCells(row, col) {
    // 行方向セルの表示・非表示設定
    switch(row) {
        case 3:
            $('.tr-1').hide();
            $('.tr-5').hide();
            break;
        case 4:
            $('.tr-1').show();
            $('.tr-5').hide();
            break;
        case 5:
            $('.tr-1').show();
            $('.tr-5').show();
            break;
    }

    // 列方向セルの表示・非表示設定
    switch(col) {
        case 3:
            $('.td-4').hide();
            $('.td-5').hide();
            $('.td-6').hide();
            break;
        case 4:
            $('.td-4').show();
            $('.td-5').hide();
            $('.td-6').hide();
            break;
        case 5:
            $('.td-4').show();
            $('.td-5').show();
            $('.td-6').hide();
            break;
        case 6:
            $('.td-4').show();
            $('.td-5').show();
            $('.td-6').show();
            break;
    }
}
