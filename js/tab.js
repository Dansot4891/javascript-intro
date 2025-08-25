// 모든 탭 버튼에 클릭 이벤트 추가
$('.tab-button').on('click', function() {
    // 클릭된 버튼의 인덱스 가져오기
    let tabIndex = $(this).index();
    
    // 모든 탭 버튼에서 active 클래스 제거
    $('.tab-button').removeClass('orange');
    
    // 클릭된 탭 버튼에 active 클래스 추가
    $(this).addClass('orange');
    
    // 모든 탭 콘텐츠 숨기기
    $('.tab-content').removeClass('show');
    
    // 해당하는 탭 콘텐츠만 보이기
    $('.tab-content').eq(tabIndex).addClass('show');
});

// for(var i = 0; i < 3; i++){
//     console.log('안녕');
// }

// console.log(document.querySelector('.tab-button').dataset.id);

var cars = [
    {name: '소나타', price: 50000, color: 'white'},
    {name: '소나타1', price: 60000, color: 'white1'},
    {name: '소나타2', price: 70000, color: 'white2'},
    {name: '소나타3', price: 80000, color: 'white3'},
    {name: '소나타4', price: 90000, color: 'white4'},
];

// HTML에 출력
cars.forEach(function(car) {
    document.querySelector('.car-list').innerHTML += `
        <div class="car-item">
            <h3>${car.name}</h3>
            <p>가격: ${car.price.toLocaleString()}원</p>
            <p>색상: ${car.color}</p>
        </div>
    `;
});