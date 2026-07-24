// 여러 가지 소개 문구 배열 - 나중에 쉽게 수정할 수 있음
const introductions = [
    {
        title: "프로젝트 제목",
        subtitle: "프로젝트에 대한 간단한 소개 문구입니다. 내용은 나중에 쉽게 수정할 수 있습니다."
    },
    {
        title: "혁신적인 솔루션",
        subtitle: "사용자의 요구를 완벽하게 충족시키는 차세대 프로젝트입니다. 간편하고 효율적인 사용 경험을 제공합니다."
    },
    {
        title: "미래를 여는 기술",
        subtitle: "최신 기술을 활용하여 사용자에게 새로운 가치를 전달합니다. 함께 미래를 만들어가세요."
    },
    {
        title: "사용자 중심 디자인",
        subtitle: "모든 사용자가 쉽게 사용할 수 있는 직관적인 인터페이스를 제공합니다. 접근성과 편의성을 최우선으로 고려합니다."
    },
    {
        title: "지속 가능한 성장",
        subtitle: "장기적인 관점에서 프로젝트를 발전시킵니다. 사용자의 피드백을 반영하여 지속적으로 개선합니다."
    }
];

let currentIndex = 0;

// DOM 요소 선택
const mainTitle = document.getElementById('mainTitle');
const subtitle = document.getElementById('subtitle');
const changeTextBtn = document.getElementById('changeTextBtn');

// 버튼 클릭 이벤트 리스너
changeTextBtn.addEventListener('click', function() {
    // 버튼 애니메이션 효과 추가
    changeTextBtn.classList.add('clicked');
    setTimeout(() => {
        changeTextBtn.classList.remove('clicked');
    }, 200);

    // 랜덤으로 소개 문구 선택
    currentIndex = Math.floor(Math.random() * introductions.length);
    updateText();
    const colors = [
    "#4a90e2",
    "#28a745",
    "#dc3545",
    "#ff9800",
    "#9c27b0"
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];
changeTextBtn.style.backgroundColor = randomColor;
});

// 텍스트 업데이트 함수
function updateText() {
    // 기존 애니메이션 클래스 제거
    mainTitle.classList.remove('fade-in');
    subtitle.classList.remove('fade-in');

    // 텍스트 변경 (애니메이션을 위한 딜레이)
    setTimeout(() => {
        mainTitle.textContent = introductions[currentIndex].title;
        subtitle.textContent = introductions[currentIndex].subtitle;

        // 애니메이션 클래스 추가
        mainTitle.classList.add('fade-in');
        subtitle.classList.add('fade-in');
    }, 50);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 로드되었습니다.');
    console.log('총 ' + introductions.length + '개의 소개 문구가 준비되어 있습니다.');
});

// 카드 호버 효과 추가 (선택적)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#4a90e2';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'transparent';
    });
});

// 키보드 접근성 개선 (Enter 키로 버튼 클릭)
changeTextBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
});